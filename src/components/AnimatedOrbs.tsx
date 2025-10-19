import { motion } from "framer-motion";

export function AnimatedOrbs() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(262 83% 65% / 0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(330 81% 60% / 0.12) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-80 h-80 rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(217 91% 60% / 0.1) 0%, transparent 70%)",
          filter: "blur(45px)",
        }}
        animate={{
          x: [0, 60, 0],
          y: [0, -80, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
