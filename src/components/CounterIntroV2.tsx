import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  label: string;
  color?: string;     // still for the box
  textColor?: string; // for the number and label text
}

export default function Counter({
  from = 0,
  to,
  duration = 2,
  label,
  color,
  textColor = "black",
}: CounterProps) {
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
      <div className="flex items-center gap-[10px]">
        {/* Box stays the same */}
        <div
          className={`w-6 h-6 ${color} rounded-[5px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.15)]`}
        ></div>

        {/* Number with customizable text color */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-7xl font-semibold"
          style={{ color: textColor }}
        >
          <motion.span>{rounded}</motion.span>
          <span className="text-3xl font-normal" style={{ color: textColor }}>
            +
          </span>
        </motion.h1>
      </div>

      {/* Label with customizable text color */}
      <p className="text-xs sm:text-sm md:text-base font-medium" style={{ color: textColor }}>
        {label}
      </p>
    </div>
  );
}
