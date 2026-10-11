import { motion, useReducedMotion } from "framer-motion";

function PageTransition({ children }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reduceMotion ? 0 : -10 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
      {children}
    </motion.div>
  );
}

export default PageTransition;