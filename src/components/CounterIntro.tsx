import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  label: string;
  textColor?: string; // new prop for color
}

export default function Counter({ from = 0, to, duration = 2, label, textColor = "white" }: CounterProps) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.floor(latest).toLocaleString());

  useEffect(() => {
    const controls = animate(count, to, {
      duration,
      ease: "easeOut",
    });
    return controls.stop;
  }, [to, duration, count]);

  return (
    <div className="flex flex-col items-center">
      <motion.h1 className={`text-3xl sm:text-4xl md:text-5xl font-semibold`} style={{ color: textColor }}>
        <motion.span>{rounded}</motion.span>
        <span className="text-2xl font-normal">+</span>
      </motion.h1>
      <p className="text-xs sm:text-sm md:text-base font-medium" style={{ color: textColor + "AA" }}>
        {label}
      </p>
    </div>
  );
}
