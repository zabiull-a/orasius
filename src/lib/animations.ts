import type { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

export const cardHover = {
  whileHover: { y: -4, boxShadow: "0 12px 24px -8px rgba(0,0,0,0.12)" },
  transition: { type: "spring", stiffness: 300, damping: 20 },
};

export const scaleHover = {
  whileHover: { scale: 1.02, boxShadow: "0 12px 24px -8px rgba(0,0,0,0.12)" },
  transition: { type: "spring", stiffness: 300, damping: 20 },
};
