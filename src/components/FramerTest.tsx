"use client";
import { motion } from "framer-motion"
export const MyComponent = () => (
    <>
  <motion.div className="w-24 h-24 border bg-pink-300 "
      animate={{ x: 200 }}

      transition={{ ease: "easeOut", duration: 2
     }}
     whileHover={{
        scale: 1.2,
        transition: { duration: 1 },
      }}
  >
  </motion.div>
  <motion.button className="border w-7 h-7 bg-green-200"
    whileHover={{ scale: 7.1 }}
    whileTap={{ scale: 0.9 }}
  />
  </>
)