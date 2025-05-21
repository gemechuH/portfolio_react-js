import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import profile_img from "../../assets/about_profile.svg";
import { useInView } from "react-intersection-observer";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaRobot,
  FaMobile,
  FaShieldAlt,
  FaCode,
  FaBrain,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiFirebase,
  SiFigma,
} from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { BiCodeAlt } from "react-icons/bi";
const About = () => {
  const [counts, setCounts] = useState({
    experience: 0,
    projects: 0,
    clients: 0,
  });
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
   const [achievementsRef, achievementsInView] = useInView({
     triggerOnce: true,
     threshold: 0.2,
   });
  // Update the services array
  const services = [
    {
      icon: <FaCode className="w-8 h-8 text-white" />,
      techIcons: [
        <FaReact />,
        <FaNodeJs />,
        <SiJavascript />,
        <SiTailwindcss />,
      ],
      title: "Web Development",
      description:
        "Full-stack web solutions with modern technologies like React, Node.js, and Python",
      features: ["Custom Web Apps", "E-commerce Solutions", "API Development"],
    },
    {
      icon: <FaMobile className="w-8 h-8 text-white" />,
      techIcons: [<FaReact />, <SiFirebase />, <FaPython />, <SiJavascript />],
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications",
      features: ["iOS Development", "Android Apps", "React Native Solutions"],
    },
    {
      icon: <FaRobot className="w-8 h-8 text-white" />,
      techIcons: [<FaPython />, <FaBrain />, <FaNodeJs />, <SiFirebase />],
      title: "Chatbot Development",
      description: "Intelligent chatbot solutions for business automation",
      features: ["AI-Powered Chatbots", "NLP Integration", "Custom Bot Logic"],
    },
    {
      icon: <MdDesignServices className="w-8 h-8 text-white" />,
      techIcons: [<SiFigma />, <FaCode />, <SiTailwindcss />],
      title: "UI AND UX design",
      description: "Creating intuitive and engaging user experiences",
      features: ["User Research", "Wireframing", "Prototype Development"],
    },
    {
      icon: <FaShieldAlt className="w-8 h-8 text-white" />,
      techIcons: [<FaPython />, <FaCode />, <BiCodeAlt />, <FaShieldAlt />],
      title: "Cybersecurity",
      description:
        "Comprehensive security solutions to protect your digital assets",
      features: [
        "Penetration Testing",
        "Security Audits",
        "Vulnerability Assessment",
      ],
    },
    {
      icon: <FaBrain className="w-8 h-8 text-white" />,
      techIcons: [<FaPython />, <FaNodeJs />, <FaBrain />, <FaRobot />],
      title: "AI Solutions",
      description:
        "Cutting-edge AI and machine learning solutions for business automation",
      features: [
        "Machine Learning",
        "Natural Language Processing",
        "Computer Vision",
      ],
    },
  ];

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
    <div id="about" className="bg-gradient-to-b from-gray-900 to-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="relative overflow-hidden rounded-2xl border-4 border-blue-500/30 shadow-xl shadow-blue-500/20 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-blue-500/30 h-[400px]">
              <img
                src={profile_img}
                alt="Profile"
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 self-start"
          >
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700/50">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I am a passionate Full-Stack Developer with expertise in modern
                web technologies. Throughout my career, I have had the privilege
                of collaborating with prestigious organizations, contributing to
                their success through innovative digital solutions.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                My approach combines technical excellence with creative
                problem-solving, ensuring that every project I undertake not
                only meets but exceeds expectations. I'm constantly learning and
                adapting to new technologies to deliver cutting-edge solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-500 border border-gray-700/50 hover:border-blue-500/50 overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            {/* Background Gradient Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Front Content */}
            <div className="relative z-10 transform group-hover:-translate-y-[200%] transition-transform duration-500">
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-white">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
            </div>

            {/* Back Content (Revealed on Hover) */}
            <div className="absolute inset-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-semibold text-blue-400 mb-4">
                    Technologies We Use
                  </h4>
                  <div className="flex gap-4 mb-6">
                    {service.techIcons.map((icon, idx) => (
                      <div
                        key={idx}
                        className="text-2xl text-gray-300 hover:text-blue-400 transition-colors duration-300"
                      >
                        {icon}
                      </div>
                    ))}
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="mt-6 w-full py-3 px-6 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 rounded-xl transition-all duration-300 border border-blue-500/30 hover:border-blue-500/50">
                  Learn More →
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        ref={achievementsRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={
              achievementsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.5 }}
            className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
          >
            <div className="text-center">
              <motion.h1
                className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4"
                initial={{ scale: 0 }}
                animate={achievementsInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {counts.experience}+
              </motion.h1>
              <p className="text-gray-300 font-medium text-lg group-hover:text-blue-400 transition-colors duration-300">
                YEARS OF EXPERIENCE 🧠
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={
              achievementsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
          >
            <div className="text-center">
              <motion.h1
                className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4"
                initial={{ scale: 0 }}
                animate={achievementsInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {counts.projects}+
              </motion.h1>
              <p className="text-gray-300 font-medium text-lg group-hover:text-blue-400 transition-colors duration-300">
                PROJECTS COMPLETED ✅
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={
              achievementsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
          >
            <div className="text-center">
              <motion.h1
                className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4"
                initial={{ scale: 0 }}
                animate={achievementsInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {counts.clients}+
              </motion.h1>
              <p className="text-gray-300 font-medium text-lg group-hover:text-blue-400 transition-colors duration-300">
                HAPPY CLIENTS 🌍
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
