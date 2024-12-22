import { motion } from "framer-motion";
import TextReveal from "./TextReveal";

const experienceList = [
  {
    company: "PT Baracipta Esa Engineering",
    role: "Full Stack Developer",
    position: "Internship",
    date: "Aug 2022 - Dec 2022",
    desc: "Developed monolith web application using CodeIgniter in team.",
    col1: "text-purple-500",
    col2: "text-yellow-500",
    border: "yellow-500",
  },
  {
    company: "Kelurahan Gilangharjo",
    role: "IT Support",
    position: "Freelance",
    date: "Mar 2023 - Sep 2024",
    desc: "Developed website as request, maintained and optimized existing software systems.",
    col1: "text-yellow-500",
    col2: "text-blue-500",
    border: "purple-500",
  },
  {
    company: "Eduwork",
    role: "Full Stack Developer",
    position: "Project Internship",
    date: "Aug 2024 - Nov 2024",
    desc: "Completed a bootcamp at Eduwork, specializing in MERN stack development. Learned to build and deploy full-stack web applications using MongoDB, Express.js, React, and Node.js.",
    col1: "text-blue-500",
    col2: "text-purple-500",
    border: "blue-500",
  },
];

export default function Experience() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 md:gap-20">
      <h2 className="text-2xl font-bold md:text-7xl">
        <TextReveal>Experience</TextReveal>
      </h2>

      <div className="relative -z-10 w-full after:absolute after:top-0 after:-ml-[1px] after:h-full after:w-1 after:bg-yellow-500 after:content-[''] md:after:left-1/2">
        {experienceList.map((exp, i) => (
          <div
            key={i}
            className={`relative mb-4 md:mb-0 md:w-1/2 ${i % 2 === 0 || "md:left-1/2"} pl-8 ${i % 2 === 0 ? "md:pl-0 md:pr-10 lg:pr-16" : "md:pl-10 lg:pl-16"} `}
          >
            <div
              className={`absolute ${i % 2 === 0 ? "-left-5 md:-right-5 md:left-auto" : "-left-5"} top-0 z-10 size-10 rounded-full border border-${exp.border}/50 bg-[#1d1d1f]/30 shadow-[0_3px_10px_rgb(0,0,0,0.2)] backdrop-blur-md`}
            ></div>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
              className={`h-fit w-full rounded-xl border border-${exp.border}/50 bg-[#1d1d1f]/30 p-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] backdrop-blur-md`}
            >
              <h3 className="text-md font-medium md:text-xl">{exp.company}</h3>
              <p className="text-sm font-medium">
                <span className={exp.col1}>{exp.role}</span>
                &nbsp;-&nbsp;
                <span className={exp.col2}>{exp.position}</span>
              </p>
              <p className="text-sm">{exp.date}</p>
              <p className="mt-4 text-sm">{exp.desc}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
