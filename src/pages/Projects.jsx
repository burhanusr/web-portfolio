import { motion } from "framer-motion";
import CardProject from "../components/CardProject";
import image from "../assets/img";
import TextReveal from "../components/TextReveal";

const projectList = [
  {
    title: "POS System",
    desc: "Simple Web-Based POS System for Easy Sales and Inventory Management.",
    img: image.pos,
    demoURL: "https://mern-pos-system-frontend.vercel.app/",
    github: "https://github.com/burhanusr/mern-pos-system",
  },
  {
    title: "Natours",
    desc: "Online Tour Web Booking App",
    img: image.natours,
    demoURL: "https://natours-three-rho.vercel.app/",
    github: "https://github.com/burhanusr/natours",
  },
  {
    title: "e-Gilang",
    desc: "An administration services website.",
    img: image.egilang,
    demoURL: "https://egilang.gilangharjo.id/",
  },
  {
    title: "Stufast Learning Center",
    desc: "Online Learning And Teaching Marketplace",
    img: image.stufast,
    demoURL: "https://stufast.id/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative pt-20">
      <div className="mt-16 flex items-center justify-center">
        <div className="relative w-fit">
          <h2 className="text-4xl font-bold lg:text-7xl">
            <TextReveal>Portfolio</TextReveal>
          </h2>
        </div>
      </div>

      <div>
        <ul className="mt-20 grid gap-y-20 md:grid-cols-2 lg:mt-40">
          {projectList.map((project, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <CardProject
                title={project?.title}
                desc={project?.desc}
                image={project?.img}
                demoURL={project?.demoURL}
                github={project?.github}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
