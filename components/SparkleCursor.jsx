import { useEffect } from "react";

// A very light sparkle trail that follows the cursor. Spawns a few tiny ✦'s as
// the mouse moves, each fading + drifting + shrinking out over ~700ms.
// Skipped on touch devices and when the user prefers reduced motion.
const SparkleCursor = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    const layer = document.createElement("div");
    Object.assign(layer.style, {
      position: "fixed",
      inset: "0",
      pointerEvents: "none",
      overflow: "hidden",
      zIndex: "2000",
    });
    document.body.appendChild(layer);

    const colors = ["#c4b5fd", "#a78bfa", "#fbbf24", "#ffffff"];
    let lastSpawn = 0;

    const spawn = (x, y) => {
      const s = document.createElement("span");
      s.textContent = "✦"; // ✦
      const size = 6 + Math.random() * 8;
      Object.assign(s.style, {
        position: "absolute",
        left: `${x}px`,
        top: `${y}px`,
        fontSize: `${size}px`,
        lineHeight: "1",
        color: colors[(Math.random() * colors.length) | 0],
        transform: "translate(-50%, -50%)",
        willChange: "transform, opacity",
        userSelect: "none",
      });
      layer.appendChild(s);

      const dx = (Math.random() - 0.5) * 24;
      const dy = -10 - Math.random() * 24;
      const rot = (Math.random() - 0.5) * 180;
      const anim = s.animate(
        [
          { transform: "translate(-50%, -50%) scale(1) rotate(0deg)", opacity: 0.85 },
          {
            transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(0.2) rotate(${rot}deg)`,
            opacity: 0,
          },
        ],
        { duration: 650 + Math.random() * 250, easing: "cubic-bezier(.25,.6,.3,1)" }
      );
      anim.onfinish = () => s.remove();
    };

    const onMove = (e) => {
      const now = performance.now();
      if (now - lastSpawn < 45) return; // throttle — keep it light
      lastSpawn = now;
      spawn(e.clientX, e.clientY);
      if (Math.random() < 0.35) spawn(e.clientX, e.clientY); // occasional second
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      layer.remove();
    };
  }, []);

  return null;
};

export default SparkleCursor;
