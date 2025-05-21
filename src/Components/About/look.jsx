import React, { useState, useEffect } from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.svg";

const About = () => {
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
    <div id="about" className="bg-gradient-to-b from-gray-900 to-black">
      <div className="about-sections">
        <div className="about-left hidden md:block">
          <img src={profile_img} alt="Profile" />
        </div>
        <div className="about-right">
          <div className="about-para bg-gradient-to-b from-gray-900 to-black rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
        <div className="bg-gray-800/30 gap-8 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-red-500 h-">
          <h3 className="text-2xl font-bold text-red-400 mb-6">
            UX Design & Testing
          </h3>
          <div className="space-y-10 gap-20">
            {[
              {
                name: "Figma",
                icon: "devicon-figma-plain colored",
                level: "90%",
              },
              {
                name: "Adobe XD",
                icon: "devicon-xd-plain colored",
                level: "85%",
              },
              {
                name: "Jest",
                icon: "devicon-jest-plain colored",
                level: "80%",
              },
              {
                name: "Cypress",
                icon: "devicon-cypress-plain colored",
                level: "75%",
              },
              {
                name: "Selenium",
                icon: "devicon-selenium-original colored",
                level: "70%",
              },
            ].map((skill, index) => (
              <div key={index} className="group relative gap-10 mb-10">
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-10">
                    <i className={`${skill.icon} text-2xl`}></i>
                    <span className="text-gray-300">{skill.name}</span>
                  </div>
                  <span className="text-gray-400 text-sm">{skill.level}</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-red-400 to-orange-600 transition-all duration-500 group-hover:from-orange-600 group-hover:to-red-400"
                    style={{ width: skill.level }}
                  ></div>
                </div>
                {skill.details && (
                  <div className="absolute -bottom-8 left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-gray-900/90 text-gray-300 text-sm py-1 px-2 rounded">
                      {skill.details}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray-800/30  gap-8 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-blue-500">
          <h3 className="text-2xl font-bold text-blue-400 mb-6">
            Frontend Development
          </h3>
          <div className="space-y-4">
            {[
              {
                name: "React",
                icon: "devicon-react-original colored",
                level: "95%",
                details: "Redux, Hooks, Context API",
              },
              {
                name: "JavaScript",
                icon: "devicon-javascript-plain colored",
                level: "90%",
                details: "ES6+, TypeScript, WebPack",
              },
              {
                name: "HTML/CSS",
                icon: "devicon-html5-plain colored",
                level: "95%",
                details: "Semantic HTML5, CSS3, SASS",
              },
              {
                name: "Tailwind",
                icon: "devicon-tailwindcss-plain colored",
                level: "85%",
                details: "Custom Components, JIT",
              },
              {
                name: "Next.js",
                icon: "devicon-nextjs-original",
                level: "80%",
                details: "SSR, ISR, API Routes",
              },
            ].map((skill, index) => (
              <div key={index} className="group relative">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <i className={`${skill.icon} text-2xl`}></i>
                    <span className="text-gray-300">{skill.name}</span>
                  </div>
                  <span className="text-gray-400 text-sm">{skill.level}</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-400 to-purple-600 transition-all duration-500 group-hover:from-purple-600 group-hover:to-blue-400"
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800/30 gap-8 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-purple-500">
          <h3 className="text-2xl font-bold text-purple-400 mb-6">
            Backend & Database
          </h3>
          <div className="space-y-4">
            {[
              {
                name: "Node.js",
                icon: "devicon-nodejs-plain colored",
                level: "90%",
                details: "Express, REST APIs, WebSocket",
              },
              {
                name: "MongoDB",
                icon: "devicon-mongodb-plain colored",
                level: "85%",
                details: "Aggregation, Indexing, Atlas",
              },
              {
                name: "PostgreSQL",
                icon: "devicon-postgresql-plain colored",
                level: "80%",
                details: "Query Optimization, PL/pgSQL",
              },
              {
                name: "Redis",
                icon: "devicon-redis-plain colored",
                level: "75%",
                details: "Caching, Pub/Sub, Sessions",
              },
              {
                name: "GraphQL",
                icon: "devicon-python-plain colored",
                level: "70%",
              },
            ].map((skill, index) => (
              <div key={index} className="group relative">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <i className={`${skill.icon} text-2xl`}></i>
                    <span className="text-gray-300">{skill.name}</span>
                  </div>
                  <span className="text-gray-400 text-sm">{skill.level}</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-400 to-pink-600 transition-all duration-500 group-hover:from-pink-600 group-hover:to-purple-400"
                    style={{ width: skill.level }}
                  ></div>
                </div>
                {skill.details && (
                  <div className="absolute -bottom-8 left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-gray-900/90 text-gray-300 text-sm py-1 px-2 rounded">
                      {skill.details}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray-800/30 gap-8 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-purple-500">
          <h3 className="text-2xl font-bold text-purple-400 mb-6">
            Backend & Database
          </h3>
          <div className="space-y-4">
            {[
              {
                name: "Node.js",
                icon: "devicon-nodejs-plain colored",
                level: "90%",
                details: "Express, REST APIs, WebSocket",
              },
              {
                name: "MongoDB",
                icon: "devicon-mongodb-plain colored",
                level: "85%",
                details: "Aggregation, Indexing, Atlas",
              },
              {
                name: "PostgreSQL",
                icon: "devicon-postgresql-plain colored",
                level: "80%",
                details: "Query Optimization, PL/pgSQL",
              },
              {
                name: "Redis",
                icon: "devicon-redis-plain colored",
                level: "75%",
                details: "Caching, Pub/Sub, Sessions",
              },
              {
                name: "GraphQL",
                icon: "devicon-python-plain colored",
                level: "70%",
              },
            ].map((skill, index) => (
              <div key={index} className="group relative">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <i className={`${skill.icon} text-2xl`}></i>
                    <span className="text-gray-300">{skill.name}</span>
                  </div>
                  <span className="text-gray-400 text-sm">{skill.level}</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-400 to-pink-600 transition-all duration-500 group-hover:from-pink-600 group-hover:to-purple-400"
                    style={{ width: skill.level }}
                  ></div>
                </div>
                {skill.details && (
                  <div className="absolute -bottom-8 left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-gray-900/90 text-gray-300 text-sm py-1 px-2 rounded">
                      {skill.details}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800/30 gap-8 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-green-500 md:col-span-2 lg:col-span-1">
          <h3 className="text-2xl font-bold text-green-400 mb-6">
            Dev Tools & Others
          </h3>
          <div className="space-y-4">
            {[
              { name: "Git", icon: "devicon-git-plain colored", level: "90%" },
              {
                name: "Docker",
                icon: "devicon-docker-plain colored",
                level: "75%",
              },
              {
                name: "AWS",
                icon: "devicon-amazonwebservices-original colored",
                level: "70%",
              },
              { name: "Linux", icon: "devicon-linux-plain", level: "85%" },
              {
                name: "VS Code",
                icon: "devicon-vscode-plain colored",
                level: "95%",
              },
            ].map((skill, index) => (
              <div key={index} className="group relative">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <i className={`${skill.icon} text-2xl`}></i>
                    <span className="text-gray-300">{skill.name}</span>
                  </div>
                  <span className="text-gray-400 text-sm">{skill.level}</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-green-400 to-teal-600 transition-all duration-500 group-hover:from-teal-600 group-hover:to-green-400"
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
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
