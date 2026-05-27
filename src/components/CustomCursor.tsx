import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovering(!!t.closest("button, a, input"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full bg-cyan"
        animate={{ x: pos.x - 4, y: pos.y - 4, scale: hovering ? 2.5 : 1 }}
        transition={{ type: "spring", damping: 30, stiffness: 400, mass: 0.3 }}
        style={{ width: 8, height: 8, boxShadow: "0 0 12px var(--cyan), 0 0 24px var(--cyan)" }}
      />
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] rounded-full border border-cyan/40"
        animate={{ x: pos.x - 16, y: pos.y - 16 }}
        transition={{ type: "spring", damping: 20, stiffness: 150, mass: 0.5 }}
        style={{ width: 32, height: 32 }}
      />
    </>
  );
}
