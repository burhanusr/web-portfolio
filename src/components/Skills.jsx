import Reveal from "./Reveal";
import TextReveal from "./TextReveal";
import Tooltip from "./Tooltip";

export default function Skills() {
  return (
    <div className="grid grid-cols-1 place-items-center gap-8 text-center lg:grid-cols-2 lg:text-left">
      <h2 className="text-2xl font-bold lg:text-7xl">
        <TextReveal>Skills</TextReveal>
      </h2>

      <div className="flex flex-col items-center gap-4 lg:items-start">
        <Reveal>
          <div className="h-fit w-fit rounded-xl border border-blue-500/50 bg-[#1d1d1f]/30 p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] backdrop-blur-lg">
            <h2 className="text-xl font-medium">Frontend & Design</h2>
            <div className="mt-4 flex items-center gap-4">
              <Tooltip text="ReactJS">
                <img src="react.svg" alt="ReactJS Logo" className="h-8" />
              </Tooltip>
              <Tooltip text="NextJS">
                <img src="nextjs.svg" alt="Python Logo" className="h-8" />
              </Tooltip>
              <Tooltip text="Tailwind">
                <img src="tailwind.webp" alt="Tailwind Logo" className="h-5" />
              </Tooltip>
              <Tooltip text="Bootstrap">
                <img src="bootstrap.svg" alt="Bootstrap Logo" className="h-8" />
              </Tooltip>
              <Tooltip text="Figma">
                <img src="figma.svg" alt="Figma Logo" className="h-8" />
              </Tooltip>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="h-fit w-fit rounded-xl border border-yellow-500/50 bg-[#1d1d1f]/30 p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] backdrop-blur-lg">
            <h2 className="text-xl font-medium">Backend</h2>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
              <Tooltip text="TypeScript">
                <img src="ts.svg" alt="Typescript Logo" className="h-8" />
              </Tooltip>
              <Tooltip text="JavaScript">
                <img src="js.webp" alt="Javascript Logo" className="h-8" />
              </Tooltip>
              <Tooltip text="NodeJS">
                <img src="nodejs.webp" alt="NodeJS Logo" className="h-8" />
              </Tooltip>
              <Tooltip text="ExpressJS">
                <img src="expressjs.svg" alt="ExpressJS Logo" className="h-8" />
              </Tooltip>
              <Tooltip text="PHP">
                <img src="php.svg" alt="PHP Logo" className="h-5" />
              </Tooltip>
              <Tooltip text="Laravel">
                <img src="laravel.webp" alt="Laravel Logo" className="h-8" />
              </Tooltip>
              <Tooltip text="CodeIgniter">
                <img
                  src="codeigniter.svg"
                  alt="CodeIgniter Logo"
                  className="h-8"
                />
              </Tooltip>
              <Tooltip text="MongoDB">
                <img src="mongodb.svg" alt="MongoDB Logo" className="h-8" />
              </Tooltip>
              <Tooltip text="PostgreSQL">
                <img src="postgre.webp" alt="PostgreSQL Logo" className="h-8" />
              </Tooltip>
              <Tooltip text="MySQL">
                <img src="mysql.svg" alt="MySQL Logo" className="h-8" />
              </Tooltip>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="h-fit w-fit rounded-xl border border-purple-500/50 bg-[#1d1d1f]/30 p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] backdrop-blur-lg">
            <h2 className="text-xl font-medium">Tools</h2>
            <div className="mt-4 flex items-center gap-4">
              <Tooltip text="Git">
                <img src="git.webp" alt="Git Logo" className="h-8" />
              </Tooltip>
              <Tooltip text="Github">
                <img src="github.webp" alt="Github Logo" className="h-8" />
              </Tooltip>
              <Tooltip text="Postman">
                <img src="postman.svg" alt="Postman Logo" className="h-8" />
              </Tooltip>
              <Tooltip text="VSCode">
                <img src="vscode.svg" alt="VSCode Logo" className="h-8" />
              </Tooltip>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
