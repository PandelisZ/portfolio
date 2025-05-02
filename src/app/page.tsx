import { Mail, Linkedin, Github } from "lucide-react";
import Image from "next/image";
import profilePic from "./me.jpg";
import { motion } from "framer-motion";

const links = [
  {
    href: "mailto:cameronnimmo@hotmail.co.uk",
    icon: <Mail className="text-inherit" />,
  },
  {
    href: "https://www.linkedin.com/in/cameron-nimmo/",
    icon: <Linkedin className="text-inherit" />,
  },
  {
    href: "https://github.com/cnimmo16",
    icon: <Github className="text-inherit" />,
  },
];

const experience = [
  {
    title: "Machine Learning Engineer",
    company: {
      name: "Machine Learning Institute",
      href: "https://ml.institute/",
    },
    location: "London, UK",
    date: "2025",
    summary:
      "I completed an intensive two-month bootcamp focused on modern machine learning. The program covered key deep learning concepts including feature fusion, multi-modal transformers, fine-tuning strategies, and reinforcement learning. In the final phase, I applied these skills to build a transformer-based recommendation system that curated RSS feeds, simulating a real-world product development cycle.",
  },
  {
    title: "Senior Full Stack Engineer",
    company: {
      name: "Blackbullion",
      href: "https://blackbullion.com/",
    },
    location: "Hybrid",
    date: "2021 - 2024",
    summary:
      "As the lead developer on the platform squad, I managed a team of mid-level engineers and spearheaded several high-impact projects. I architected a robust data pipeline for client-facing analytics dashboards, integrating Kafka, Debezium, and Clickhouse, and deploying a custom admin UI on AWS. I mentored two frontend developers into full-stack roles and introduced an open banking integration that reduced applicant-reviewer communication by 35% per application.",
  },
  {
    title: "Web Developer",
    company: {
      name: "Calibrate Consulting",
      href: "https://calibrateconsulting.com/",
    },
    location: "London, UK",
    date: "2019 - 2021",
    summary:
      "At Calibrate Consulting, I launched and ran a junior web developer training program, helping early-career talent transition into capable frontend engineers within months. I also led the frontend development of complex analytics dashboards for a global bank, collaborating closely with data analysts and integrating Qlik-based data via a JSON-RPC API.",
  },
];

export default function Home() {
  return (
    <div className="flex justify-center px-5 py-5 md:py-12">
      <div className="min-h-[90vh] max-w-[690px]">
        <motion.header
          className="mb-10 flex flex-col-reverse items-start justify-between gap-5 md:flex-row md:gap-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <div>
            <motion.h1
              className="mb-4 text-4xl font-bold md:text-5xl"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Cameron Nimmo
            </motion.h1>
            <motion.p
              className="mb-2.5 text-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
            >
              Generalist Full Stack Engineer with 5+ years of experience
            </motion.p>
            <motion.div
              className="text-neutral mb-4 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            >
              London, UK
            </motion.div>
            <motion.div
              className="flex gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:border-primary border-primary-light hover:text-primary-dark rounded-md border p-1.5 transition-all hover:scale-110 focus:scale-110 active:scale-95 shadow-sm hover:shadow-lg"
                  style={{ willChange: "transform" }}
                >
                  {link.icon}
                </a>
              ))}
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: 10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.3, type: "spring" }}
            className="relative"
          >
            <span className="absolute inset-0 z-0 rounded-2xl bg-gradient-to-br from-primary via-primary-light to-primary-dark opacity-40 blur-[8px] animate-pulse"></span>
            <Image
              src={profilePic}
              alt="Cameron Nimmo"
              className="aspect-square h-auto w-30 rounded-2xl object-cover md:w-40 relative z-10 shadow-lg"
            />
          </motion.div>
        </motion.header>
        <main>
          <motion.section
            className="mb-9"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="mb-3 text-2xl font-bold uppercase">About me</h2>
            <p className="text-lg">
              A generalist full stack engineer with a pragmatic approach to
              delivery and a focus on maintainability. Praised for my
              leadership, communication and mentoring skills, as well as my
              strong understanding of commercial concerns and user needs.
              Building products that deliver real value to real people.
            </p>
          </motion.section>
          <motion.section
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            <h2 className="mb-5 text-2xl font-bold uppercase">Experience</h2>
            {experience.map((exp, i) => (
              <motion.article
                key={exp.title}
                className="mb-7"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.1 + i * 0.1,
                  ease: "easeOut",
                }}
              >
                <header className="mb-2 flex flex-col-reverse justify-between md:flex-row">
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <p className="text-neutral text-lg">{exp.date}</p>
                </header>
                <p className="mb-2 text-lg">
                  <a
                    href={exp.company.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-dark underline"
                  >
                    {exp.company.name}
                  </a>{" "}
                  · {exp.location}
                </p>
                <p className="text-neutral text-lg">{exp.summary}</p>
              </motion.article>
            ))}
          </motion.section>
        </main>
      </div>
    </div>
  );
}
