"use client";

import Link from "next/link";
import { motion } from "motion/react";

interface AnimatedButtonProps {
  href: string;
  children: React.ReactNode;
  style?: string;
}

export default function AnimatedButton({
  href,
  children,
  style = "primary",
}: AnimatedButtonProps) {
  const baseStyles =
    "w-full py-4 px-6 rounded-2xl text-center font-bold text-lg flex items-center justify-center gap-2 transition-colors";

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="w-full"
    >
      <Link href={href} className={`${baseStyles} ${style}`}>
        {children}
      </Link>
    </motion.div>
  );
}
