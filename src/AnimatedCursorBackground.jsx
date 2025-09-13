// InteractiveCursor.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './cssfiles/CustomCursor.css'

const InteractiveCursor = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let width = window.innerWidth;
    let height = window.innerHeight;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const target = { x: width / 2, y: height / 2 };
    let points = [];

    // Resize canvas
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    resize();

    // Create points
    for (let x = 0; x < width; x += width / 15) {
      for (let y = 0; y < height; y += height / 15) {
        const px = x + (Math.random() * width) / 20;
        const py = y + (Math.random() * height) / 20;
        const p = { x: px, originX: px, y: py, originY: py };
        points.push(p);
      }
    }

    // Find closest
    for (let i = 0; i < points.length; i++) {
      const closest = [];
      const p1 = points[i];
      for (let j = 0; j < points.length; j++) {
        const p2 = points[j];
        if (p1 !== p2) {
          const dist = getDistance(p1, p2);
          if (closest.length < 5) {
            closest.push(p2);
          } else {
            for (let k = 0; k < 5; k++) {
              if (getDistance(p1, closest[k]) > dist) {
                closest[k] = p2;
                break;
              }
            }
          }
        }
      }
      p1.closest = closest;
    }

    // Assign circles
    points.forEach((p) => {
      p.circle = new Circle(p, 2 + Math.random() * 2);
    });

    // Animate points
    points.forEach((p) => shiftPoint(p));

    // Mouse move
    const mouseMove = (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('resize', resize);

    // Animate
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      points.forEach((p) => {
        const d = getDistance(target, p);
        if (d < 4000) {
          p.active = 0.2;
          p.circle.active = 0.5;
        } else if (d < 20000) {
          p.active = 0.1;
          p.circle.active = 0.3;
        } else if (d < 40000) {
          p.active = 0.02;
          p.circle.active = 0.1;
        } else {
          p.active = 0;
          p.circle.active = 0;
        }

        drawLines(p);
        p.circle.draw();
      });
      requestAnimationFrame(animate);
    };

    animate();

    // Animation helpers
    function shiftPoint(p) {
      gsap.to(p, {
        duration: 1 + 1 * Math.random(),
        x: p.originX - 50 + Math.random() * 100,
        y: p.originY - 50 + Math.random() * 100,
        ease: 'circ.inOut',
        onComplete: () => shiftPoint(p),
      });
    }

    function drawLines(p) {
      if (!p.active) return;
      p.closest.forEach((closeP) => {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(closeP.x, closeP.y);
        ctx.strokeStyle = `rgba(28, 31, 51, ${p.active})`;
        ctx.stroke();
      });
    }

    function Circle(pos, radius) {
      this.pos = pos;
      this.radius = radius;
      this.active = 0;

      this.draw = function () {
        if (!this.active) return;
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = `rgba(28, 31, 51, ${this.active})`;
        ctx.fill();
      };
    }

    function getDistance(p1, p2) {
      return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    }

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="interactive-cursor-canvas" />;
};

export default InteractiveCursor;
