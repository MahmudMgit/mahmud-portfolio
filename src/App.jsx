import { motion } from "framer-motion";
import {
  Code2,
  Layers,
  Database,
  Terminal,
  Cloud,
  Wrench,
} from "lucide-react";
import "./index.css";

export default function App() {
  const skills = [
    {
      icon: <Code2 className="w-6 h-6 text-blue-400" />,
      title: "Programming Languages",
      desc: "Java (OOP, JUnit), C# (.NET, EF, SQLite), JavaScript (ES6+), Scala (Functional Programming), HTML5, CSS3, Tailwind CSS",
    },
    {
      icon: <Layers className="w-6 h-6 text-blue-400" />,
      title: "Frameworks & Libraries",
      desc: "Frontend: React, Tailwind CSS, Framer Motion, Lucide React. Backend: ASP.NET Core, Entity Framework, JUnit (Java), ScalaTest. Build Tools: npm, Node.js, PostCSS, Autoprefixer",
    },
    {
      icon: <Database className="w-6 h-6 text-blue-400" />,
      title: "Databases",
      desc: "SQLite (C# project). Learning: MySQL, PostgreSQL, MongoDB (for full-stack projects)",
    },
    {
      icon: <Terminal className="w-6 h-6 text-blue-400" />,
      title: "Tools & IDEs",
      desc: "VS Code, Visual Studio, Eclipse, IntelliJ IDEA, Git & GitHub, PowerShell / Terminal (npm, git commands)",
    },
    {
      icon: <Cloud className="w-6 h-6 text-blue-400" />,
      title: "DevOps & Deployment",
      desc: "Docker, Kubernetes, Azure Pipelines (CI/CD), GitHub Actions (automation & testing)",
    },
    {
      icon: <Wrench className="w-6 h-6 text-blue-400" />,
      title: "Other Skills",
      desc: "OOP, MVC Design Pattern, Software Testing (JUnit, Unit Tests), UML Diagrams, API Integration, Responsive Web Design",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a1a] to-[#050510] text-white flex flex-col items-center px-4 font-sans">
      {/* HEADER */}
      <motion.header
  initial={{ opacity: 0, y: -40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
  className="text-center mt-20"
>
  <motion.h1
    className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
    animate={{ backgroundPosition: ["0%", "100%"] }}
    transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
    style={{
      backgroundSize: "200% auto",
    }}
  >
    Mahmud Mia
  </motion.h1>
  <p className="text-gray-400 mt-3 text-lg tracking-wide">
    Computer Science Student & Developer
  </p>
</motion.header>


      {/* ABOUT SECTION */}
<motion.section
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.3 }}
  className="max-w-4xl w-full mt-16 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-lg text-center"
>
  <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
    About Me
  </h2>

  <p className="text-gray-300 leading-relaxed text-lg mb-6">
    Hey, I’m <span className="text-blue-400 font-semibold">Mahmud Mia</span>, a
    Computer Science student at{" "}
    <span className="text-blue-300">De Montfort University</span> and a
    hands-on developer who enjoys turning ideas into functional, polished
    software. I’m passionate about crafting projects that are both{" "}
    <span className="text-purple-400">impactful</span> and{" "}
    <span className="text-blue-400">well-engineered</span>.
  </p>

  <div className="grid md:grid-cols-3 gap-6 text-left mt-6">
    <div className="bg-white/5 rounded-xl p-5 border border-white/10 hover:border-blue-500/30 transition">
      <h3 className="text-blue-400 font-semibold text-lg mb-2">🎓 Student Developer</h3>
      <p className="text-gray-400 text-sm">
        Currently studying Software Development, OOP, and Systems Design
        applying theory into practical, scalable projects.
      </p>
    </div>

    <div className="bg-white/5 rounded-xl p-5 border border-white/10 hover:border-purple-500/30 transition">
      <h3 className="text-purple-400 font-semibold text-lg mb-2">💼 Real-World Experience</h3>
      <p className="text-gray-400 text-sm">
        Part-time at <span className="text-blue-300">Central Co-op</span>, where
        I’ve sharpened teamwork, communication, and problem-solving skills.
      </p>
    </div>

    <div className="bg-white/5 rounded-xl p-5 border border-white/10 hover:border-pink-500/30 transition">
      <h3 className="text-pink-400 font-semibold text-lg mb-2">🚀 Growth Mindset</h3>
      <p className="text-gray-400 text-sm">
        Currently learning DevOps, CI/CD, and Cloud to expand into full-stack
        and deployment pipelines with hands-on projects.
      </p>
    </div>
  </div>

  <p className="text-gray-400 text-sm mt-8 italic">
    “My goal is to grow into a well-rounded software developer capable of building
    clean, scalable solutions that make a difference.”
  </p>
</motion.section>


      {/* PROJECTS */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="max-w-3xl w-full mt-16"
      >
        <h2 className="text-2xl font-semibold text-center mb-6 text-blue-300">
          Projects
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Java OOP Portfolio",
              desc: "Object-oriented design and testing using Java, MVC pattern, and JUnit.",
            },
            {
              title: "C# TaskFlow App",
              desc: ".NET-based productivity system using Entity Framework and SQLite.",
            },
            {
              title: "Budget Tracker (React)",
              desc: "Personal finance app showcasing frontend and backend integration skills.",
            },
          ].map((proj, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 shadow-md hover:shadow-blue-500/20 transition"
            >
              <h3 className="text-lg font-bold text-blue-400 mb-2">
                {proj.title}
              </h3>
              <p className="text-gray-300 text-sm">{proj.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* SKILLS */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="max-w-5xl w-full mt-16"
      >
        <h2 className="text-2xl font-semibold text-center mb-6 text-blue-300">
          Skills
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col justify-between bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 shadow-md hover:shadow-[0_0_10px_rgba(59,130,246,0.3)] transition"
              style={{ minHeight: "200px" }}
            >
              <div className="flex items-center gap-2 mb-2">
                {skill.icon}
                <h3 className="text-lg font-bold text-blue-400">
                  {skill.title}
                </h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>
      


      {/* NOTE */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="mt-20 text-center text-gray-400 mb-6"
      >
        <h2 className="text-xl font-semibold text-blue-300 mb-2">Note</h2>
        <p>
          Currently, my understanding of the skills listed is at a beginner to
          intermediate level. I am actively working on enhancing these skills
          through practical projects and continuous learning.
        </p>
      </motion.footer>

      {/* CONTACT */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="mt-10 text-center text-gray-400 mb-6"
      >
        <h2 className="text-xl font-semibold text-blue-300 mb-2">Contact</h2>
        <p>
          Let’s connect on{" "}
          <a
            href="https://linkedin.com/in/mahmud-mia"
            target="_blank"
            className="text-blue-400 hover:text-blue-500 transition"
          >
            LinkedIn
          </a>{" "}
          or view my work on{" "}
          <a
            href="https://github.com/MahmudMgit"
            target="_blank"
            className="text-blue-400 hover:text-blue-500 transition"
          >
            GitHub
          </a>
          .
        </p>
        <p className="mt-4 text-xs text-gray-500">
          © 2025 Mahmud Mia. All rights reserved.
        </p>
      </motion.footer>
    </div>
  );
}
