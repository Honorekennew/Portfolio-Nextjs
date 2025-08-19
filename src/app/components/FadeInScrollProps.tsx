'use client';
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FadeInOnScrollProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
}

export default function FadeInOnScroll({ children, direction = "up", delay = 0 }: FadeInOnScrollProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // animation uniquement côté client
  }, []);

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
      x: direction === "left" ? 20 : direction === "right" ? -20 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, delay },
    },
  };

  if (!mounted) return <div style={{ opacity: 0 }}>{children}</div>; // fallback SSR

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
