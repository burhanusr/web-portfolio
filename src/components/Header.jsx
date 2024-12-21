import { Link } from "react-router";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useEffect, useState } from "react";
import HamburgerButton from "./HamburgerButton";

export default function Header() {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  const containerVariant = {
    hidden: { height: 0, y: 80 },
    show: {
      height: "100%",
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.2,
      },
    },
    exit: { height: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
    exit: { opacity: 0 },
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();

    if (latest > prev && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    if (open === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <>
      <motion.header
        variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="sticky left-0 top-0 z-50 h-20 w-full"
      >
        <div className="flex h-full items-center justify-between border-b border-[#fafaf6] bg-[#1d1d1f]/70 px-6 text-white backdrop-blur-xl lg:px-40">
          <h1 className="text-xs sm:text-base">
            <Link to="/">Burhanu Sultan Ramadan.</Link>
          </h1>

          <div className="hidden lg:block">
            <nav>
              <ul className="flex gap-10">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/projects">Portfolio</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="lg:hidden">
            <HamburgerButton open={open} setOpen={setOpen} />
          </div>
        </div>
      </motion.header>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={containerVariant}
            initial="hidden"
            animate="show"
            exit="exit"
            className="fixed -top-20 left-0 z-40 flex h-screen w-full items-center justify-center bg-blue-500"
          >
            <nav className="text-2xl font-bold text-white">
              <ul className="flex flex-col items-center gap-20">
                <motion.li variants={itemVariants}>
                  <Link to="/" onClick={() => setOpen(false)}>
                    Home
                  </Link>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Link to="/projects" onClick={() => setOpen(false)}>
                    Portfolio
                  </Link>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Link to="/about" onClick={() => setOpen(false)}>
                    About
                  </Link>
                </motion.li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
