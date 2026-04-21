import { useRef, useEffect, useState } from "react";
import "./LiquidGlass.css";

export default function LiquidGlass({ id, children }) {
  const turbRef = useRef(null);
  const cardRef = useRef(null);

  const [target, setTarget] = useState([0.5, 0.5]);
  const [current, setCurrent] = useState([0.5, 0.5]);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (!animating) animate();
  }, [target]);

  const animate = () => {
    setAnimating(true);

    setCurrent(([mx, my]) => {
      const [tx, ty] = target;
      const newX = mx + (tx - mx) * 0.1;
      const newY = my + (ty - my) * 0.1;

      const freqX = 0.004 + newX * 0.003;
      const freqY = 0.004 + newY * 0.003;

      if (turbRef.current) {
        turbRef.current.setAttribute("baseFrequency", `${freqX} ${freqY}`);
      }

      if (Math.abs(tx - newX) > 0.001 || Math.abs(ty - newY) > 0.001) {
        requestAnimationFrame(animate);
      } else {
        setAnimating(false);
      }

      return [newX, newY];
    });
  };

  const handleMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    setTarget([
      (e.clientX - rect.left) / rect.width,
      (e.clientY - rect.top) / rect.height,
    ]);
  };

  const handleLeave = () => setTarget([0.5, 0.5]);

  return (
    <div
      ref={cardRef}
      className="liquid-glass"
      style={{ backdropFilter: `blur(10px) saturate(180%) url(#${id})` }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}

      {/* SVG filter individual */}
      <svg width="0" height="0">
        <filter id={id}>
          <feTurbulence
            ref={turbRef}
            type="fractalNoise"
            baseFrequency="0.004 0.004"
            numOctaves="1"
            seed={Math.floor(Math.random() * 9999)}
          />
          <feGaussianBlur stdDeviation="3" result="softMap" />
          <feDisplacementMap in="SourceGraphic" in2="softMap" scale="150" />
        </filter>
      </svg>
    </div>
  );
}
