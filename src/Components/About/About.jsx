import React, { useState, useEffect } from "react";
import "./About.css";
// import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.svg";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFigma,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaCode,
  FaDatabase,
  FaUsers,
} from "react-icons/fa";
import {
  SiCypress,
  SiJest,
  
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";

const About = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = [
    {
      title: "UX Design & Testing",
      color: "red",
      skills: [
        {
          name: "Figma",
          icon: <FaFigma />,
          level: "90%",
          details: "Wireframing, Prototyping, Collaboration",
        },
        {
          name: "Adobe XD",
          // icon: <SiAdobeXd />,
          level: "85%",
          details: "UI Design, Interactive Prototypes",
        },
        {
          name: "Jest",
          icon: <SiJest />,
          level: "80%",
          details: "Unit Testing, Snapshot Testing",
        },
        {
          name: "Cypress",
          icon: <SiCypress />,
          level: "75%",
          details: "E2E Testing, Component Testing",
        },
        {
          name: "UserTesting",
          icon: <FaUsers />,
          level: "85%",
          details: "Usability Testing, A/B Testing",
        },
      ],
      programming: ["Sketch", "InVision", "Zeplin"],
    },
    {
      title: "Frontend Development",
      color: "blue",
      skills: [
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss />,
          level: "95%",
          details: "Utility-First CSS, Custom Themes",
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs />,
          level: "90%",
          details: "SSR, ISR, App Router",
        },
        {
          name: "Framer Motion",
          icon: <FaCode />,
          level: "85%",
          details: "Animations, Transitions",
        },
        {
          name: "Vite",
          icon: <FaCode />,
          level: "80%",
          details: "Fast Build Tool, HMR",
        },
        {
          name: "Storybook",
          icon: <FaCode />,
          level: "75%",
          details: "Component Library, UI Testing",
        },
      ],
      programming: ["React", "Vue.js", "Svelte"],
    },
    {
      title: "Backend & Database",
      color: "purple",
      skills: [
        {
          name: "Prisma",
          icon: <FaDatabase />,
          level: "90%",
          details: "ORM, Type-Safe Queries",
        },
        {
          name: "Supabase",
          icon: <FaDatabase />,
          level: "85%",
          details: "Realtime DB, Auth",
        },
        {
          name: "Redis",
          icon: <FaDatabase />,
          level: "80%",
          details: "Caching, Pub/Sub",
        },
        {
          name: "GraphQL",
          icon: <FaCode />,
          level: "75%",
          details: "API Design, Apollo Client",
        },
        {
          name: "Drizzle",
          icon: <FaDatabase />,
          level: "70%",
          details: "Lightweight ORM, SQL",
        },
      ],
      programming: ["Node.js", "Python", "Go"],
    },
    {
      title: "Dev Tools & Others",
      color: "green",
      skills: [
        {
          name: "Git",
          icon: <FaGitAlt />,
          level: "90%",
          details: "Version Control, GitHub",
        },
        {
          name: "Docker",
          icon: <FaDocker />,
          level: "85%",
          details: "Containerization, Docker Compose",
        },
        {
          name: "AWS",
          icon: <FaAws />,
          level: "80%",
          details: "EC2, S3, Lambda",
        },
        {
          name: "Kubernetes",
          icon: <FaCode />,
          level: "75%",
          details: "Orchestration, CI/CD",
        },
        {
          name: "Terraform",
          icon: <FaCode />,
          level: "70%",
          details: "Infrastructure as Code",
        },
      ],
      programming: ["Bash", "PowerShell"],
    },
  ];

  const handleContact = (category) => {
    window.location.href = `mailto:your.email@example.com?subject=Job Opportunity: ${category}`;
  };
  const [counts, setCounts] = useState({
    experience: 0,
    projects: 0,
    clients: 0,
  });

  useEffect(() => {
    const animateCounts = () => {
      const targetCounts = {
        experience: 3,
        projects: 15,
        clients: 7,
      };

      const duration = 2000; // 2 seconds
      const steps = 60;
      const interval = duration / steps;

      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setCounts({
          experience: Math.ceil(targetCounts.experience * progress),
          projects: Math.ceil(targetCounts.projects * progress),
          clients: Math.ceil(targetCounts.clients * progress),
        });

        if (currentStep === steps) {
          clearInterval(timer);
        }
      }, interval);

      return () => clearInterval(timer);
    };

    animateCounts();
  }, []);

  return (
    <div id="about" className="about">
      <div className="about-sections">
        <div className="about-left hidden md:block">
          <img src={profile_img} alt="Profile" />
        </div>
        <div className="about-right">
          <div className="about-para bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <p className="text-gray-300 leading-relaxed">
              I am a passionate Full-Stack Developer with expertise in modern
              web technologies. Throughout my career, I have had the privilege
              of collaborating with prestigious organizations, contributing to
              their success through innovative digital solutions.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My approach combines technical excellence with creative
              problem-solving, ensuring that every project I undertake not only
              meets but exceeds expectations. I'm constantly learning and
              adapting to new technologies to deliver cutting-edge solutions.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-4 py-8">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            className={`relative bg-gray-900/40 backdrop-blur-md p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border-t-4 border-${category.color}-500 min-h-[400px] flex flex-col`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            onMouseEnter={() => setHoveredCategory(index)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <h3
              className={`text-2xl font-bold text-${category.color}-400 mb-6`}
            >
              {category.title}
            </h3>
            <div className="space-y-4 flex-1">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="group relative">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl text-gray-300">
                        {skill.icon}
                      </span>
                      <span className="text-gray-200 font-medium">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-gray-400 text-sm">{skill.level}</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r from-${category.color}-400 to-${category.color}-600`}
                      style={{ width: skill.level }}
                      initial={{ width: 0 }}
                      animate={{ width: skill.level }}
                      transition={{ duration: 1, delay: idx * 0.1 }}
                    />
                  </div>
                  {skill.details && (
                    <div className="absolute -bottom-8 left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <div className="bg-gray-900/90 text-gray-300 text-sm py-2 px-3 rounded-lg shadow-md">
                        {skill.details}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <AnimatePresence>
              {hoveredCategory === index && (
                <motion.div
                  className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 flex flex-col justify-center items-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Programming Languages
                  </h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.programming.map((lang, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 bg-${category.color}-500/20 text-${category.color}-300 rounded-full text-sm`}
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                  <motion.button
                    className={`mt-6 px-6 py-2 bg-${category.color}-500 text-white rounded-full hover:bg-${category.color}-600 transition-colors`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleContact(category.title)}
                  >
                    Hire for {category.title}
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
      <div className="about-achievements bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 shadow-xl mb-16">
        <div className="about-achievement transform hover:scale-110 transition-all duration-300">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            {counts.experience}+
          </h1>
          <p className="text-gray-300 font-medium">YEARS OF EXPERIENCE 🧠</p>
        </div>
        <hr className="border-gray-700 opacity-50" />
        <div className="about-achievement transform hover:scale-110 transition-all duration-300">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            {counts.projects}+
          </h1>
          <p className="text-gray-300 font-medium">PROJECTS COMPLETED ✅</p>
        </div>
        <hr className="border-gray-700 opacity-50" />
        <div className="about-achievement transform hover:scale-110 transition-all duration-300">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            {counts.clients}+
          </h1>
          <p className="text-gray-300 font-medium">HAPPY CLIENTS 🌍</p>
        </div>
      </div>
    </div>
  );
};

export default About;
