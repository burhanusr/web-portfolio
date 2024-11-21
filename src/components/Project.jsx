export default function Project({ name, desc, demo, github, photo1, photo2 }) {
  return (
    <div className="relative z-10 m-auto flex flex-col-reverse items-center gap-4 xl:w-[90%] xl:flex-row xl:justify-between xl:gap-16">
      <div className="flex flex-col items-center xl:items-start">
        <h3 className="text-xl xl:text-3xl">{name}</h3>
        <p className="text-xs xl:text-sm">{desc}</p>
        <div className="mt-3 flex items-center gap-4">
          <a
            className="rounded-lg bg-slate-800 px-3 py-2 text-sm text-[#e6e6e6] shadow-lg hover:opacity-70"
            href={demo}
            target="_blank"
          >
            Demo
          </a>
          {github && (
            <a
              className="rounded-full shadow-xl hover:opacity-70"
              href={github}
              target="_blank"
            >
              <svg
                className="size-8 fill-current text-slate-800"
                aria-label="github"
                viewBox="0 0 14 14"
              >
                <path d="M7 .175c-3.872 0-7 3.128-7 7 0 3.084 2.013 5.71 4.79 6.65.35.066.482-.153.482-.328v-1.181c-1.947.415-2.363-.941-2.363-.941-.328-.81-.787-1.028-.787-1.028-.634-.438.044-.416.044-.416.7.044 1.071.722 1.071.722.635 1.072 1.641.766 2.035.59.066-.459.24-.765.437-.94-1.553-.175-3.193-.787-3.193-3.456 0-.766.262-1.378.721-1.881-.065-.175-.306-.897.066-1.86 0 0 .59-.197 1.925.722a6.754 6.754 0 0 1 1.75-.24c.59 0 1.203.087 1.75.24 1.335-.897 1.925-.722 1.925-.722.372.963.131 1.685.066 1.86.46.48.722 1.115.722 1.88 0 2.691-1.641 3.282-3.194 3.457.24.219.481.634.481 1.29v1.926c0 .197.131.415.481.328C11.988 12.884 14 10.259 14 7.175c0-3.872-3.128-7-7-7z"></path>
              </svg>
            </a>
          )}
        </div>
      </div>
      <div className="relative xl:h-[28rem] xl:w-[48rem]">
        <img
          className="absolute left-0 top-0 hidden aspect-video rounded-lg shadow-xl xl:block xl:w-[90%]"
          src={photo1}
          alt={`${name} Project Image 1`}
        />
        <img
          className="aspect-video rounded-lg shadow-xl xl:absolute xl:bottom-0 xl:right-0 xl:w-[90%]"
          src={photo2}
          alt={`${name} Project Image 2`}
        />
      </div>
    </div>
  );
}
