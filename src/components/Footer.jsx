export default function Footer() {
  return (
    <div className="relative z-10 flex h-36 w-full flex-col-reverse items-center justify-evenly bg-slate-800 px-8 text-sm text-white md:flex-row md:justify-between md:px-20 md:text-base">
      <div>
        <h3>Burhanu Sultan Ramadan &copy; 2024</h3>
      </div>
      <div className="flex items-center justify-between gap-4 md:gap-10">
        <div className="flex items-center justify-between gap-4 md:gap-10">
          <a className="hover:opacity-70" href="#about">
            About
          </a>
          <a className="hover:opacity-70" href="#projects">
            Projects
          </a>
        </div>
        <div className="flex items-center justify-between gap-3">
          <a
            className="rounded-lg shadow-xl hover:opacity-70"
            href="https://www.linkedin.com/in/burhanusr/"
            target="_blank"
          >
            <svg
              className="size-6 fill-current text-[#e6e6e6] md:size-8"
              viewBox="0 0 26 26"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22.5999 0.400002H3.3999C1.7439 0.400002 0.399902 1.744 0.399902 3.4V22.6C0.399902 24.256 1.7439 25.6 3.3999 25.6H22.5999C24.2559 25.6 25.5999 24.256 25.5999 22.6V3.4C25.5999 1.744 24.2559 0.400002 22.5999 0.400002ZM8.1999 10V21.4H4.5999V10H8.1999ZM4.5999 6.682C4.5999 5.842 5.3199 5.2 6.3999 5.2C7.4799 5.2 8.1579 5.842 8.1999 6.682C8.1999 7.522 7.5279 8.2 6.3999 8.2C5.3199 8.2 4.5999 7.522 4.5999 6.682ZM21.3999 21.4H17.7999C17.7999 21.4 17.7999 15.844 17.7999 15.4C17.7999 14.2 17.1999 13 15.6999 12.976H15.6519C14.1999 12.976 13.5999 14.212 13.5999 15.4C13.5999 15.946 13.5999 21.4 13.5999 21.4H9.9999V10H13.5999V11.536C13.5999 11.536 14.7579 10 17.0859 10C19.4679 10 21.3999 11.638 21.3999 14.956V21.4Z" />
            </svg>
          </a>
          <a
            className="rounded-full shadow-xl hover:opacity-70"
            href="https://github.com/burhanusr"
            target="_blank"
          >
            <svg
              className="size-6 fill-current text-[#e6e6e6] md:size-8"
              aria-label="github"
              viewBox="0 0 14 14"
            >
              <path d="M7 .175c-3.872 0-7 3.128-7 7 0 3.084 2.013 5.71 4.79 6.65.35.066.482-.153.482-.328v-1.181c-1.947.415-2.363-.941-2.363-.941-.328-.81-.787-1.028-.787-1.028-.634-.438.044-.416.044-.416.7.044 1.071.722 1.071.722.635 1.072 1.641.766 2.035.59.066-.459.24-.765.437-.94-1.553-.175-3.193-.787-3.193-3.456 0-.766.262-1.378.721-1.881-.065-.175-.306-.897.066-1.86 0 0 .59-.197 1.925.722a6.754 6.754 0 0 1 1.75-.24c.59 0 1.203.087 1.75.24 1.335-.897 1.925-.722 1.925-.722.372.963.131 1.685.066 1.86.46.48.722 1.115.722 1.88 0 2.691-1.641 3.282-3.194 3.457.24.219.481.634.481 1.29v1.926c0 .197.131.415.481.328C11.988 12.884 14 10.259 14 7.175c0-3.872-3.128-7-7-7z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
