import React, { useEffect, useRef } from 'react';

const DottedGlobe: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.width;
    let height = canvas.height;

    // Globe parameters
    const dotsCount = 2000;
    const radius = Math.min(width, height) * 0.55;
    const dots: { x: number; y: number; z: number }[] = [];

    // Initialize dots on a sphere
    for (let i = 0; i < dotsCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / dotsCount);
      const theta = Math.sqrt(dotsCount * Math.PI) * phi;

      dots.push({
        x: radius * Math.cos(theta) * Math.sin(phi),
        y: radius * Math.sin(theta) * Math.sin(phi),
        z: radius * Math.cos(phi),
      });
    }

    let rotationX = 0;
    let rotationY = 0;
    const velocityX = 0.002;
    const velocityY = 0.005;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      rotationX += velocityX;
      rotationY += velocityY;

      // Projection center
      const centerX = width / 2;
      const centerY = height / 2;

      // Sort dots by depth (Z) for correct rendering order
      const projectedDots = dots.map(dot => {
        // Rotate around Y
        const cosY = Math.cos(rotationY);
        const sinY = Math.sin(rotationY);
        const x1 = dot.x * cosY - dot.z * sinY;
        const z1 = dot.x * sinY + dot.z * cosY;

        // Rotate around X
        const cosX = Math.cos(rotationX);
        const sinX = Math.sin(rotationX);
        const y2 = dot.y * cosX - z1 * sinX;
        const z2 = dot.y * sinX + z1 * cosX;

        // 3D to 2D Projection (Simple)
        const scale = 1000 / (1000 + z2);
        const px = x1 * scale + centerX;
        const py = y2 * scale + centerY;

        return { px, py, z2 };
      });

      // Draw dots
      projectedDots.forEach(dot => {
        const { px, py, z2 } = dot;
        
        // Only draw if within bounds and not too far back (optional)
        const opacity = Math.max(0.1, (z2 + radius) / (2 * radius));
        const size = Math.max(0.5, 1.5 * (z2 + radius) / (2 * radius));

        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.8})`;
        ctx.fill();
      });

      // Add a soft glow behind the globe
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
      gradient.addColorStop(0, 'rgba(100, 150, 255, 0.05)');
      gradient.addColorStop(1, 'rgba(100, 150, 255, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(render);
    };

    const handleResize = () => {
      if (!canvas) return;
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (rect) {
        canvas.width = rect.width;
        canvas.height = rect.height;
        width = canvas.width;
        height = canvas.height;
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    render();

    return () => {
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
      {/* Visual Pins Overlay (Static Simulation) */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="relative w-[80%] h-[80%]">
          {/* Pins from mockup */}
          {[
            { top: '40%', left: '60%', name: '대한민국', flag: '🇰🇷' },
            { top: '55%', left: '55%', name: '베트남', flag: '🇻🇳' },
            { top: '50%', left: '45%', name: '태국', flag: '🇹🇭' },
            { top: '65%', left: '52%', name: '캄보디아', flag: '🇰🇭' },
          ].map((pin, index) => (
            <div 
              key={index}
              style={{ top: pin.top, left: pin.left }}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-red-600 rounded-full blur-md opacity-40 animate-pulse scale-150" />
                <div className="w-2.5 h-2.5 bg-red-600 rounded-full border border-white/50 relative z-10" />
                
                {/* Label */}
                <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm border border-white/10 px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] whitespace-nowrap text-white font-bold">{pin.name}</span>
                  <span className="text-[10px]">{pin.flag}</span>
                </div>
              </div>
            </div>
          ))}

          {/* Large Area Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-red-600/10 rounded-full blur-2xl" />
        </div>
      </div>
    </div>
  );
};

export default DottedGlobe;
