import About from "./components/About";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Title from "./components/Title";

import image from "./assets/img";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="bg-[#E6E6E6]">
        <svg className="absolute z-0">
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.6"
              stitchTiles="stitch"
            />
            <feColorMatrix
              in="colorNoise"
              type="matrix"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"
            />
            <feComposite operator="in" in2="SourceGraphic" result="monoNoise" />
            <feBlend in="SourceGraphic" in2="monoNoise" mode="screen" />
          </filter>
        </svg>

        <div className="fixed z-0 h-screen w-full overflow-hidden [filter:url('#noiseFilter')]">
          <div className="absolute left-1/2 h-full w-[60rem] -translate-x-1/2">
            <div className="absolute -top-20 left-0 size-[70%] animate-blob1 rounded-full bg-[#7AFF83] mix-blend-multiply blur-3xl filter"></div>
            <div className="absolute -bottom-20 right-0 size-[70%] animate-blob2 rounded-full bg-[#34C5EA] mix-blend-multiply blur-3xl filter"></div>
          </div>
        </div>

        <Title />
        <div
          id="about"
          className="relative z-10 flex w-full items-center justify-center py-6"
        >
          <div className="flex w-[80%] flex-col gap-4 xl:w-[40rem]">
            <About />
            <Skills />
          </div>
        </div>

        <div
          id="projects"
          className="relative z-10 m-auto flex w-[80%] flex-col items-center gap-16 py-16"
        >
          <Project
            name="POS System"
            desc="Online Web Based POS System"
            demo="https://mern-pos-system-frontend.vercel.app/"
            github="https://github.com/burhanusr/mern-pos-system"
            photo1={image.pos2}
            photo2={image.pos1}
          />
          <Project
            name="Natours"
            desc="Online Tour Web Booking App"
            demo="https://natours-three-rho.vercel.app"
            github="https://github.com/burhanusr/natours"
            photo1={image.natours2}
            photo2={image.natours1}
          />
          <Project
            name="e-Gilang"
            desc="Administration Service Website"
            demo="https://egilang.gilangharjo.id"
            photo1={image.egilang2}
            photo2={image.egilang1}
          />
          <Project
            name="Stufast Learning Center"
            desc="Online Learning And Teaching Marketplace"
            demo="https://stufast.id/"
            photo1={image.stufast2}
            photo2={image.stufast1}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
