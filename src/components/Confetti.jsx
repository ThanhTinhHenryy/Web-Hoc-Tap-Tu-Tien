import React, { useEffect, useState } from "react";

const Confetti = ({ isActive }) => {
  const [confetti, setConfetti] = useState([]);

  useEffect(() => {
    if (isActive) {
      // Generate confetti pieces
      const colors = [
        "#FF5252",
        "#FFD740",
        "#64FFDA",
        "#448AFF",
        "#E040FB",
        "#69F0AE",
      ];
      const shapes = ["circle", "square", "triangle"];
      const animations = [
        "animate-fall-slow",
        "animate-fall-medium",
        "animate-fall-fast",
      ];

      const newConfetti = [];
      for (let i = 0; i < 100; i++) {
        newConfetti.push({
          id: i,
          color: colors[Math.floor(Math.random() * colors.length)],
          shape: shapes[Math.floor(Math.random() * shapes.length)],
          animation: animations[Math.floor(Math.random() * animations.length)],
          left: `${Math.random() * 100}%`,
          size: `${Math.random() * 0.5 + 0.5}rem`,
          delay: `${Math.random() * 5}s`,
        });
      }

      setConfetti(newConfetti);

      // Clean up confetti after 8 seconds
      const timer = setTimeout(() => {
        setConfetti([]);
      }, 8000);

      return () => clearTimeout(timer);
    } else {
      setConfetti([]);
    }
  }, [isActive]);

  if (!isActive || confetti.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {confetti.map((piece) => {
        let shapeElement;

        if (piece.shape === "circle") {
          shapeElement = (
            <div
              className="rounded-full"
              style={{
                width: piece.size,
                height: piece.size,
                backgroundColor: piece.color,
              }}
            ></div>
          );
        } else if (piece.shape === "square") {
          shapeElement = (
            <div
              style={{
                width: piece.size,
                height: piece.size,
                backgroundColor: piece.color,
              }}
            ></div>
          );
        } else if (piece.shape === "triangle") {
          const triangleSize = parseFloat(piece.size) * 16; // Convert rem to px (assuming 1rem = 16px)
          shapeElement = (
            <div
              style={{
                width: 0,
                height: 0,
                borderLeft: `${triangleSize / 2}px solid transparent`,
                borderRight: `${triangleSize / 2}px solid transparent`,
                borderBottom: `${triangleSize}px solid ${piece.color}`,
              }}
            ></div>
          );
        }

        return (
          <div
            key={piece.id}
            className={`absolute ${piece.animation}`}
            style={{
              left: piece.left,
              top: "-20px",
              animationDelay: piece.delay,
            }}
          >
            {shapeElement}
          </div>
        );
      })}
    </div>
  );
};

export default Confetti;
