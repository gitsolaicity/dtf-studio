'use client';
import { motion } from 'framer-motion';

export default function Overlay({ onClick }: { onClick: () => void }) {
  return (
    <motion.div
      key="overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-black z-40 backdrop-blur-sm"
      onClick={onClick}
    />
  );
}
