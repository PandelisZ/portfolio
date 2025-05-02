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
  // Animation variants for "wild" effects
  // Only define each variant ONCE!
  const staggerContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const floatPulse = {
    animate: {
      y: [0, -10, 0, 10, 0],
      rotate: [0, 5, 0, -5, 0],
      scale: [1, 1.05, 1, 0.98, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const iconWildInitial = { opacity: 0, y: 50, scale: 0.6, rotate: -40 };
  const iconWildAnimate = { opacity: 1, y: 0, scale: 1.2, rotate: 0 };
  const iconWildTransition = {
    type: "spring",
    stiffness: 500,
    damping: 18,
    mass: 0.7,
  };
  const iconWildWhileHover = {
    scale: 1.35,
    rotate: 10,
    boxShadow: "0 0 30px 0 var(--primary)",
    transition: { type: "spring", stiffness: 250, damping: 8 },
  };
  const iconWildWhileTap = {
    scale: 0.9,
    rotate: -10,
    transition: { type: "spring", stiffness: 300, damping: 15 },
  };

  const wildGradientBorderAnimate = {
    background:
      "linear-gradient(120deg, #ff8c43, #6c63ff, #43e8ff, #ff43c6, #ff8c43)",
    backgroundSize: "400% 400%",
    filter: [
      "blur(8px)",
      "blur(12px)",
      "blur(8px)"
    ],
    transition: {
      backgroundPosition: {
        duration: 16,
        repeat: Infinity,
        ease: "linear",
      },
      filter: { duration: 3, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" },
    },
  };

  const wildGradientBorderAnimate = {
    background:
      "linear-gradient(120deg, #ff8c43, #6c63ff, #43e8ff, #ff43c6, #ff8c43)",
    backgroundSize: "400% 400%",
    filter: [
      "blur(8px)",
      "blur(12px)",
      "blur(8px)"
    ],
    transition: {
      backgroundPosition: {
        duration: 16,
        repeat: Infinity,
        ease: "linear",
      },
      filter: { duration: 3, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" },
    },
  };

  return (
    <div className="flex justify-center px-5 py-5 md:py-12">
      <div className="min-h-[90vh] max-w-[690px]">
        <motion.header
          className="mb-10 flex flex-col-reverse items-start justify-between gap-5 md:flex-row md:gap-20"
          initial="hidden"
          animate="show"
          variants={staggerContainer}
        >
          <div>
            <motion.h1
              className="mb-4 text-4xl font-bold md:text-5xl"
              initial={{ opacity: 0, x: -80, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, x: 0, scale: 1.1, rotate: 0 }}
              transition={{ duration: 1.1, delay: 0.2, type: "spring", bounce: 0.6 }}
            >
              <motion.span
                initial={{ color: "#000" }}
                animate={{ color: ["#ff8c43", "#43e8ff", "#6c63ff", "#ff43c6", "#ff8c43"] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
                style={{ display: "inline-block" }}
              >
                Cameron Nimmo
              </motion.span>
            </motion.h1>
            <motion.p
              className="mb-2.5 text-lg"
              initial={{ opacity: 0, x: -60, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, type: "spring", bounce: 0.7 }}
            >
              Generalist Full Stack Engineer with 5+ years of experience
            </motion.p>
            <motion.div
              className="text-neutral mb-4 text-lg"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
            >
              London, UK
            </motion.div>
            <motion.div
              className="flex gap-2"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.14,
                    delayChildren: 0.8,
                  },
                },
              }}
            >
              {links.map((link, idx) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:border-primary border-primary-light hover:text-primary-dark rounded-md border p-1.5 transition-all shadow-sm relative overflow-hidden"
                  style={{ willChange: "transform" }}
                  initial={iconWildInitial}
                  animate={iconWildAnimate}
                  transition={{
                    ...iconWildTransition,
                    delay: 0.9 + idx * 0.15,
                  }}
                  whileHover={iconWildWhileHover}
                  whileTap={iconWildWhileTap}
                >
                  <span className="absolute inset-0 z-0 bg-gradient-to-br from-pink-400 via-sky-400 to-amber-400 opacity-30 blur-[6px] pointer-events-none"></span>
                  <span className="relative z-10">{link.icon}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: 18, filter: "blur(6px)" }}
            animate={{ opacity: 1, scale: 1, rotate: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.6, type: "spring", bounce: 0.65 }}
            className="relative"
            style={{ willChange: "transform, filter" }}
          >
            <motion.span
              className="absolute inset-0 z-0 rounded-2xl"
              animate={wildGradientBorderAnimate}
              style={{
                background:
                  "linear-gradient(120deg, #ff8c43, #6c63ff, #43e8ff, #ff43c6, #ff8c43)",
                backgroundSize: "400% 400%",
                opacity: 0.55,
                filter: "blur(10px)",
              }}
            ></motion.span>
            <motion.div
              className="relative z-10"
              animate={floatPulse.animate}
            >
              <Image
                src={profilePic}
                alt="Cameron Nimmo"
                className="aspect-square h-auto w-30 rounded-2xl object-cover md:w-40 shadow-2xl border-4 border-transparent"
                style={{ boxShadow: "0 0 50px 5px rgba(67,232,255,0.2)" }}
              />
            </motion.div>
          </motion.div>
        </motion.header>
        <main>
          <motion.section
            className="mb-9"
            initial={{ opacity: 0, y: 60, scale: 0.85, rotate: -5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "anticipate", type: "spring", bounce: 0.7 }}
          >
            <motion.h2
              className="mb-3 text-2xl font-bold uppercase"
              initial={{ letterSpacing: "-0.2em" }}
              animate={{ letterSpacing: "0.08em" }}
              transition={{
                duration: 1,
                yoyo: Infinity,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              About me
            </motion.h2>
            <motion.p
              className="text-lg"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.15, type: "spring", bounce: 0.8 }}
              viewport={{ once: true }}
            >
              A generalist full stack engineer with a pragmatic approach to
              delivery and a focus on maintainability. Praised for my
              leadership, communication and mentoring skills, as well as my
              strong understanding of commercial concerns and user needs.
              Building products that deliver real value to real people.
            </motion.p>
          </motion.section>
          <motion.section
            className="mb-8"
            initial={{ opacity: 0, y: 70, scale: 0.85, rotate: 4 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.05, delay: 0.1, ease: "anticipate", type: "spring", bounce: 0.6 }}
          >
            <motion.h2
              className="mb-5 text-2xl font-bold uppercase"
              initial={{ letterSpacing: "-0.2em" }}
              animate={{ letterSpacing: "0.08em" }}
              transition={{
                duration: 1.1,
                yoyo: Infinity,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              Experience
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.13,
                    delayChildren: 0.3,
                  },
                },
              }}
            >
              {experience.map((exp, i) => (
                <motion.article
                  key={exp.title}
                  className="mb-7"
                  initial={{
                    opacity: 0,
                    y: 90,
                    scale: 0.7,
                    rotate: Math.random() > 0.5 ? 7 : -7,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotate: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: 0.15 + i * 0.16,
                    type: "spring",
                    bounce: 0.75,
                  }}
                  whileHover={{
                    scale: 1.04,
                    rotate: Math.random() > 0.5 ? 3 : -3,
                    boxShadow: "0 4px 40px 0 rgba(255,140,67,0.13)",
                    transition: { type: "spring", stiffness: 170, damping: 7 },
                  }}
                  style={{ willChange: "transform, box-shadow" }}
                >
                  <header className="mb-2 flex flex-col-reverse justify-between md:flex-row">
                    <motion.h3
                      className="text-xl font-bold"
                      initial={{ scale: 0.8, rotate: -10 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.1, type: "spring", bounce: 0.7 }}
                    >
                      {exp.title}
                    </motion.h3>
                    <motion.p
                      className="text-neutral text-lg"
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.16, type: "spring" }}
                    >
                      {exp.date}
                    </motion.p>
                  </header>
                  <motion.p
                    className="mb-2 text-lg"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.19, type: "spring", bounce: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={exp.company.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary-dark underline"
                    >
                      {exp.company.name}
                    </a>{" "}
                    · {exp.location}
                  </motion.p>
                  <motion.p
                    className="text-neutral text-lg"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.95, delay: 0.24, type: "spring", bounce: 0.8 }}
                    viewport={{ once: true }}
                  >
                    {exp.summary}
                  </motion.p>
                </motion.article>
              ))}
            </motion.div>
          </motion.section>
        </main>
      </div>
    </div>
  );
}
