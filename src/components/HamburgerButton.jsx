import { motion, MotionConfig } from "framer-motion";

export default function HamburgerButton({ open, setOpen }) {
  return (
    <MotionConfig transition={{ duration: 0.4, ease: "easeInOut" }}>
      <motion.button
        initial={false}
        animate={open ? "open" : "closed"}
        onClick={() => setOpen((pv) => !pv)}
        className="relative h-10 w-10 rounded-full transition-colors hover:bg-blue-500"
      >
        <motion.span
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              top: ["35%", "50%", "50%"],
            },
            closed: {
              rotate: ["45deg", "0deg", "0deg"],
              top: ["50%", "50%", "35%"],
            },
          }}
          style={{ left: "50%", top: "35%", x: "-50%", y: "-50%" }}
          className="absolute h-0.5 w-4 bg-white"
        ></motion.span>

        <motion.span
          variants={{
            open: { rotate: ["0deg", "0deg", "-45deg"] },
            closed: { rotate: ["-45deg", "0deg", "0deg"] },
          }}
          style={{ left: "50%", top: "50%", x: "-50%", y: "-50%" }}
          className="absolute h-0.5 w-4 bg-white"
        ></motion.span>

        <motion.span
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              left: "50%",
              bottom: ["35%", "50%", "50%"],
            },
            closed: {
              rotate: ["45deg", "0deg", "0deg"],
              left: "calc(50% + 4px)",
              bottom: ["50%", "50%", "35%"],
            },
          }}
          style={{
            left: "calc(50% + 4px)",
            bottom: "35%",
            x: "-50%",
            y: "50%",
          }}
          className="absolute h-0.5 w-2 bg-white"
        ></motion.span>
      </motion.button>
    </MotionConfig>
  );
}
