import Reveal from "../components/Reveal";
import Social from "../components/Social";
import TextReveal from "../components/TextReveal";

export default function Home() {
  return (
    <main className="relative -top-20 z-30 mx-6 h-screen lg:mx-40">
      <div className="flex h-full w-full flex-col items-center justify-center text-center text-white">
        <div>
          <span className="lg:text-xl">
            <TextReveal>Hello I&apos;m</TextReveal>
          </span>

          <h2 className="mt-1 text-2xl font-bold lg:text-7xl">
            <TextReveal delay={0.5}>Burhanu Sultan Ramadan</TextReveal>
          </h2>
        </div>

        <Reveal>
          <div className="mt-4">
            <p className="text-lg font-medium lg:text-xl">
              a <span className="text-blue-500">Fullstack Developer</span> who
              loves <span className="text-yellow-500">building web</span> and{" "}
              <span className="text-purple-500">learning every day</span>
            </p>
          </div>
        </Reveal>

        <div className="mt-6">
          <Social delay={1.5} />
        </div>
      </div>
    </main>
  );
}
