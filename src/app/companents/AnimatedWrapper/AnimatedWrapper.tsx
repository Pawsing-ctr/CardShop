"use client";

import type React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AnimatedWrapperProps {
  children: React.ReactNode;
}

const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedWrapper;
