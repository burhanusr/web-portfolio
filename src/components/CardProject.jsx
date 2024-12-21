import { motion } from "framer-motion";

export default function CardProject({ title, desc, image, demoURL, github }) {
  return (
    <motion.div className="flex flex-col items-center justify-center text-center">
      <div className="w-11/12 overflow-hidden rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          src={image}
          alt=""
          className="aspect-video h-full w-full rounded-lg object-fill"
        />
      </div>

      <div>
        <h3 className="mt-8 text-2xl font-bold">{title}</h3>
        <p className="mt-1 text-sm">{desc}</p>
      </div>
      <div className="mt-4 flex items-center justify-center gap-2">
        <button className="group relative overflow-hidden rounded-md border-2 border-blue-500 font-medium text-blue-500 shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition-all duration-500 ease-out hover:border-white">
          <span className="absolute inset-0 left-0 w-0 bg-blue-500 transition-all duration-500 ease-out group-hover:w-full"></span>
          <a
            className="relative z-10 block px-2.5 py-1 transition-all duration-500 ease-out group-hover:text-white"
            href={demoURL}
            target="_blank"
          >
            Live Demo
          </a>
        </button>

        {github && (
          <button className="group relative overflow-hidden rounded-md border-2 border-white font-medium shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition-all duration-500 ease-out hover:border-slate-800">
            <span className="absolute inset-0 left-0 w-0 bg-yellow-500 transition-all duration-500 ease-out group-hover:w-full"></span>

            <a
              href={github}
              target="_blank"
              className="relative z-10 flex items-center gap-2 fill-white px-2.5 py-1 text-white transition-all duration-500 ease-out group-hover:fill-slate-900 group-hover:text-slate-900"
            >
              <svg
                aria-hidden="true"
                viewBox="-1 -1 17 17"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                className="size-4"
              >
                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
              </svg>
              <p>View Source</p>
            </a>
          </button>
        )}
      </div>
    </motion.div>
  );
}
