import { motion } from "framer-motion";
import splitString from "../utils/splitString";

export default function TextReveal({ children, delay }) {
  const textArray = splitString(children);

  return (
    <motion.div
      variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.05, delayChildren: delay }}
    >
      <div className="flex items-center justify-center">
        {textArray.map((char, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, x: 20 },
              show: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            {char}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
