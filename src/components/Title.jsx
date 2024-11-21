import { useState, useEffect } from "react";
import profile1 from "./../assets/img/profile-1.jpg";
import profile2 from "./../assets/img/profile-2.png";

export default function Title() {
  const images = [profile1, profile2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="relative z-10 flex h-screen flex-col items-center justify-center gap-8 md:flex-row">
      <div className="relative size-44 md:size-48">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`absolute aspect-square rounded-full shadow-xl transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <h1 className="font-fira text-2xl font-bold md:text-4xl">
          Burhanu Sultan Ramadan
        </h1>
        <div className="font-fira text-base md:text-xl">
          <p>{"> "}Full Stack Developer</p>
          <p className="mt-1">{"> "}I love learning new thing</p>
        </div>

        <div className="flex items-center gap-3">
          <a
            className="rounded-xl bg-slate-800 px-4 py-2.5 text-base text-[#e6e6e6] shadow-xl hover:opacity-70"
            href="mailto:bsultanrama@gmail.com"
          >
            Contact Me
          </a>
          <a
            className="rounded-lg shadow-xl hover:opacity-70"
            href="https://www.linkedin.com/in/burhanusr/"
            target="_blank"
          >
            <svg
              className="size-9"
              viewBox="0 0 26 26"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.5999 0.400002H3.3999C1.7439 0.400002 0.399902 1.744 0.399902 3.4V22.6C0.399902 24.256 1.7439 25.6 3.3999 25.6H22.5999C24.2559 25.6 25.5999 24.256 25.5999 22.6V3.4C25.5999 1.744 24.2559 0.400002 22.5999 0.400002ZM8.1999 10V21.4H4.5999V10H8.1999ZM4.5999 6.682C4.5999 5.842 5.3199 5.2 6.3999 5.2C7.4799 5.2 8.1579 5.842 8.1999 6.682C8.1999 7.522 7.5279 8.2 6.3999 8.2C5.3199 8.2 4.5999 7.522 4.5999 6.682ZM21.3999 21.4H17.7999C17.7999 21.4 17.7999 15.844 17.7999 15.4C17.7999 14.2 17.1999 13 15.6999 12.976H15.6519C14.1999 12.976 13.5999 14.212 13.5999 15.4C13.5999 15.946 13.5999 21.4 13.5999 21.4H9.9999V10H13.5999V11.536C13.5999 11.536 14.7579 10 17.0859 10C19.4679 10 21.3999 11.638 21.3999 14.956V21.4Z"
                fill="black"
              />
            </svg>
          </a>
          <a
            className="rounded-full shadow-xl hover:opacity-70"
            href="https://github.com/burhanusr"
            target="_blank"
          >
            <svg
              className="size-9 fill-current text-slate-800"
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
