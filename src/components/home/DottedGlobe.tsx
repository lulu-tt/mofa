import React, { useEffect, useRef } from 'react';
import type { Mission } from '../../types';

interface DottedGlobeProps {
  missions: Mission[];
  onPinClick?: (id: string) => void;
  selectedId?: string | null;
}

const DottedGlobe: React.FC<DottedGlobeProps> = ({ missions, onPinClick, selectedId }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let radius = 0;

    const dotsCount = 3500;
    const dots: { x: number; y: number; z: number }[] = [];

    // Initialize unit sphere dots once
    for (let i = 0; i < dotsCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / dotsCount);
      const theta = Math.sqrt(dotsCount * Math.PI) * phi;
      dots.push({
        x: Math.cos(theta) * Math.sin(phi),
        y: Math.sin(theta) * Math.sin(phi),
        z: Math.cos(phi),
      });
    }

    // Pre-calculate mission unit vectors
    const missionVectors = (missions || []).map(m => {
      const phi = (90 - m.lat) * (Math.PI / 180);
      const theta = (m.lng + 180) * (Math.PI / 180);
      return {
        id: m.id,
        x: -Math.sin(phi) * Math.cos(theta),
        y: Math.cos(phi),
        z: Math.sin(phi) * Math.sin(theta)
      };
    });

    let rotationX = 0.2;
    let rotationY = 0;
    const velocityX = 0.0002;
    const velocityY = 0.0015;

    const render = () => {
      // Safety check for context and dimensions
      if (!ctx || width === 0 || height === 0) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);
      
      rotationX += velocityX;
      rotationY += velocityY;

      const centerX = width / 2;
      const centerY = height / 2;

      // 1. Draw Dotted Globe Background (Canvas)
      dots.forEach(dot => {
        const cosY = Math.cos(rotationY);
        const sinY = Math.sin(rotationY);
        let rx = dot.x * cosY - dot.z * sinY;
        let rz = dot.x * sinY + dot.z * cosY;

        const cosX = Math.cos(rotationX);
        const sinX = Math.sin(rotationX);
        let ry = dot.y * cosX - rz * sinX;
        rz = dot.y * sinX + rz * cosX;

        const scale = 1000 / (1000 + (rz * radius));
        const px = (rx * radius) * scale + centerX;
        const py = (ry * radius) * scale + centerY;
        const opacity = Math.max(0.1, (rz + 1) / 2);

        ctx.beginPath();
        ctx.arc(px, py, 1.2 * scale, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180, 200, 255, ${opacity * 0.35})`;
        ctx.fill();
      });

      // 2. Update Interactive Pins (Imperative DOM)
      missionVectors.forEach(v => {
        const el = pinRefs.current[v.id];
        if (!el) return;

        const cosY = Math.cos(rotationY);
        const sinY = Math.sin(rotationY);
        let rx = v.x * cosY - v.z * sinY;
        let rz = v.x * sinY + v.z * cosY;

        const cosX = Math.cos(rotationX);
        const sinX = Math.sin(rotationX);
        let ry = v.y * cosX - rz * sinX;
        rz = v.y * sinX + rz * cosX;

        const scale = 1000 / (1000 + (rz * radius));
        const px = (rx * radius) * scale + centerX;
        const py = (ry * radius) * scale + centerY;

        const isVisible = rz > -0.2;
        el.style.transform = `translate(${px}px, ${py}px) scale(${isVisible ? scale : 0})`;
        el.style.opacity = isVisible ? '1' : '0';
        el.style.zIndex = rz > 0 ? '100' : '0';
      });

      animationFrameId = requestAnimationFrame(render);
    };

    const handleResize = () => {
      const parent = containerRef.current;
      if (!parent || !canvas) return;
      
      const dpr = window.devicePixelRatio || 1;
      const rect = parent.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); // Scale context for High DPI
      
      width = rect.width;
      height = rect.height;
      radius = Math.min(width, height) * 0.44;
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call
    
    // Start loop
    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [missions]);

  return (
    <div ref={containerRef} className="w-full h-full relative overflow-visible select-none">
      {/* Dynamic Watermark Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-[120px] font-black font-sans text-white/[0.03] whitespace-nowrap tracking-tighter uppercase select-none">
          World 세계
        </span>
      </div>

      <canvas ref={canvasRef} className="w-full h-full block" />

      {/* Pins Layer - Rendered once, moved via DOM style */}
      <div className="absolute inset-0 pointer-events-none">
        {(missions || []).map((m) => (
          <div 
            key={m.id}
            ref={el => { pinRefs.current[m.id] = el; }}
            className="absolute top-0 left-0 pointer-events-auto will-change-transform"
            style={{ transform: 'translate(-1000px, -1000px)' }}
          >
            <button 
              onClick={() => onPinClick?.(m.id)}
              className="relative -translate-x-1/2 -translate-y-1/2 group outline-none"
            >
              <div className={`w-[14px] h-[14px] rounded-full border-2 border-white shadow-[0_0_15px_rgba(0,0,0,0.3)] transition-all duration-300 ${selectedId === m.id ? 'bg-gold scale-[1.4] ring-4 ring-gold/30' : 'bg-red-600 ring-2 ring-red-600/20 group-hover:scale-110'}`} />
              
              <div className={`absolute left-6 top-1/2 -translate-y-1/2 flex items-center gap-2 px-3 py-1.5 rounded-xl backdrop-blur-md border border-white/20 shadow-2xl transition-all duration-300 pointer-events-none ${selectedId === m.id ? 'bg-gold text-primary opacity-100 translate-x-0' : 'bg-black/40 text-white opacity-0 group-hover:opacity-100 translate-x-2'}`}>
                <span className="text-[11px] font-black whitespace-nowrap">{m.name}</span>
                <span className="text-sm">{m.flag}</span>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DottedGlobe;
