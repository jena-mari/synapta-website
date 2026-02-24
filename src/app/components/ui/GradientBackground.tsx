import { motion } from "framer-motion"

export default function GradientBackground() {
  return (
    <motion.div
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "linear"
      }}
      className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-[length:200%_200%]"
    />
  )
}