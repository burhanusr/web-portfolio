import image from "../assets/img";
import Experience from "../components/Experience";
import Reveal from "../components/Reveal";
import Skills from "../components/Skills";
import Social from "../components/Social";
import TextReveal from "../components/TextReveal";

export default function About() {
  return (
    <main className="relative z-30 mx-6 mb-20 lg:mx-40">
      <div className="flex flex-col items-center justify-center gap-8 text-white">
        <div className="mt-16 flex flex-col items-center gap-4 text-center">
          <Reveal>
            <img
              src={image.profile}
              alt="Profile Image"
              className="aspect-square size-40 rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
            />
          </Reveal>

          <div>
            <h3 className="text-2xl font-bold lg:text-4xl">
              <TextReveal>Burhanu Sultan Ramadan</TextReveal>
            </h3>
            <span className="font-medium text-yellow-500 lg:text-xl">
              <TextReveal>FullStack Developer</TextReveal>
            </span>
          </div>
        </div>
        <div className="text-center">
          <Reveal>
            <p>
              Hello! I&apos;m a Fullstack Developer with a passion for crafting
              creative websites and building robust web applications. My journey
              in tech has been exciting, from being an intern at PT Baracipta
              Esa Engineering to sharpening my skills in a Fullstack MERN
              Bootcamp at Eduwork.
              <br />
              <br />
              I hold a Bachelor&apos;s degree in Computer Science from Ahmad
              Dahlan University, where I developed a strong foundation in web
              development, data structure, and optimization techniques—subjects
              that continue to fuel my passion for coding.
              <br />
              <br />
              I&apos;ve got hands-on experience with a diverse range of
              technologies, including JavaScript, TypeScript, ReactJS, NextJS,
              PHP, Laravel, and many more. Whether it&apos;s designing sleek
              user interfaces or building efficient backend systems, I love
              bringing ideas to life through code.
              <br />
              <br />
              I&apos;m currently looking for full-time opportunities where I can
              collaborate with amazing teams and tackle challenging projects.
              When I&apos;m not coding, you&apos;ll find me immersed in a good
              book—always exploring new ideas and perspectives.
              <br />
              <br />
              Let&apos;s connect and create something amazing together!
            </p>
          </Reveal>
        </div>

        <div className="rounded-lg border border-purple-500/50 bg-[#1d1d1f]/30 p-6 shadow-[0_3px_10px_rgb(0,0,0,0.2)] backdrop-blur-lg">
          <Social />
        </div>

        <div className="mt-10 flex items-center justify-center lg:mt-40">
          <Skills />
        </div>

        <div className="mt-40">
          <Experience />
        </div>
      </div>
    </main>
  );
}
