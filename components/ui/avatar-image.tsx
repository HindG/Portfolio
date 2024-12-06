"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import photo from './photo.jpg';

export function AvatarImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-8"
    >
      <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl" />
      <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20">
        <Image
          src={photo.src}
          alt="John Doe"
          fill
          className="object-cover"
          priority
        />
      </div>
    </motion.div>
  );
}