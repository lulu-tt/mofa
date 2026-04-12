import React, { useEffect, useRef } from 'react';

const DottedGlobe: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width: number;
    let height: number;
    let radius: number;

    // Dots are pre-calculated as unit vectors for efficient scaling
    const dotsCount = 4000;
    const dots: { x: number; y: number; z: number }[] = [];

    // Initialize dots on a unit sphere (radius 1)
    for (let i = 0; i < dotsCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / dotsCount);
      const theta = Math.sqrt(dotsCount * Math.PI) * phi;

      dots.push({
        x: Math.cos(theta) * Math.sin(phi),
        y: Math.sin(theta) * Math.sin(phi),
        z: Math.cos(phi),
      });
    }

    let rotationX = 0;
    let rotationY = 0;
    const velocityX = 0.001;
    const velocityY = 0.003;

    const render = () => {
      if (!ctx || !width || !height) return;
      ctx.clearRect(0, 0, width, height);

      rotationX += velocityX;
      rotationY += velocityY;

      const centerX = width / 2;
      const centerY = height / 2;

      // Project and draw dots
      dots.forEach(dot => {
        // Apply rotations to unit coordinates
        const cosY = Math.cos(rotationY);
        const sinY = Math.sin(rotationY);
        let rx = dot.x * cosY - dot.z * sinY;
        let rz = dot.x * sinY + dot.z * cosY;

        const cosX = Math.cos(rotationX);
        const sinX = Math.sin(rotationX);
        let ry = dot.y * cosX - rz * sinX;
        rz = dot.y * sinX + rz * cosX;

        // Apply radius scaling here
        const x = rx * radius;
        const y = ry * radius;
        const z = rz * radius;

        // Perspective projection
        const scale = 1200 / (1200 + z);
        const px = x * scale + centerX;
        const py = y * scale + centerY;

        // Rendering style
        const opacity = Math.max(0.05, (z + radius) / (2 * radius));
        const size = Math.max(0.6, 1.8 * (z + radius) / (2 * radius));

        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180, 200, 255, ${opacity * 0.6})`;
        ctx.fill();
      });

      // Globe background glow
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
      gradient.addColorStop(0, 'rgba(100, 150, 255, 0.08)');
      gradient.addColorStop(0.8, 'rgba(100, 150, 255, 0.02)');
      gradient.addColorStop(1, 'rgba(100, 150, 255, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(render);
    };

    const handleResize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const dpr = window.devicePixelRatio || 1;
      const rect = parent.getBoundingClientRect();
      
      // Ensure we have a valid size
      if (rect.width === 0 || rect.height === 0) return;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      ctx.scale(dpr, dpr);
      
      width = rect.width;
      height = rect.height;
      // Increased scaling factor: 0.45 of container width/height
      radius = Math.min(width, height) * 0.48; 
    };

    window.addEventListener('resize', handleResize);
    
    // Initial call after a short delay to ensure DOM is ready and sized
    const timer = setTimeout(() => {
      handleResize();
      render();
    }, 50);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="w-full h-full relative group">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full block"
      />
      {/* Dynamic Overlay for locations */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="relative w-full h-full max-w-[800px] max-h-[800px]">
          {[
            { top: '38%', left: '72%', name: '대한민국', flag: '🇰🇷' },
            { top: '55%', left: '68%', name: '베트남', flag: '🇻🇳' },
            { top: '50%', left: '58%', name: '태국', flag: '🇹🇭' },
            { top: '65%', left: '65%', name: '캄보디아', flag: '🇰🇭' },
          ].map((pin, index) => (
            <div 
              key={index}
              style={{ top: pin.top, left: pin.left }}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-in fade-in duration-1000"
            >
              <div className="relative group/pin">
                <div className="absolute inset-0 bg-red-600 rounded-full blur-md opacity-30 group-hover/pin:opacity-70 group-hover/pin:scale-150 transition-all duration-500 animate-pulse" />
                <div className="w-3 h-3 bg-red-600 rounded-full border-2 border-white relative z-10 shadow-lg" />
                
                {/* Always-on or Hover Label */}
                <div className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center gap-2 bg-primary/80 backdrop-blur-md border border-white/20 pl-3 pr-2 py-1 rounded-full shadow-2xl transition-all duration-300 transform scale-90 opacity-90 group-hover/pin:scale-100 group-hover/pin:opacity-100">
                  <span className="text-[11px] whitespace-nowrap text-white font-black tracking-tighter">{pin.name}</span>
                  <span className="text-[12px]">{pin.flag}</span>
                </div>
              </div>
            </div>
          ))}

          {/* Core Hub Glow */}
          <div className="absolute top-[45%] left-[65%] -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default DottedGlobe;
