import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.svg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am an experienced Frontend Developer with over a decade of
              professional expertise in the field. Throughout my career, I have
              had the priviledge of collaborating with prestigious
              organizations, contributing to their success and growth.
            </p>
            <p>
              My passion for frontend development is not only reflected in my
              extensive experience, but also in the enthisiasm and dedication i
              bring to each project.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-32">
            <div className=" p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-blue-500">
              <div className="about-skills">
                <h1 className="text-3xl font-bold mb-10 text-blue-400 text-center font-poppins">
                  Frontend Development
                </h1>
                <div className="about-skill p-4 rounded-lg transition-all duration-300 transform hover:scale-105">
                  <p className="flex items-center gap-2 text-lg">
                    <i className="devicon-html5-plain colored text-2xl"></i>
                    <i className="devicon-css3-plain colored text-2xl"></i>
                    HTML & CSS
                  </p>
                  <hr style={{ width: "50%" }} />
                </div>
                <div className="about-skill">
                  <p className="flex items-center justify-center gap-4 text-lg text-gray-200 font-roboto">
                    <i className="devicon-javascript-plain colored text-3xl"></i>
                    Javascript
                  </p>
                  <hr style={{ width: "60%" }} />
                </div>
                <div className="about-skill">
                  <p className="flex items-center justify-center gap-4 text-lg text-gray-200 font-roboto">
                    <i className="devicon-react-original colored text-3xl"></i>
                    React JS
                  </p>
                  <hr style={{ width: "70%" }} /> 100%
                </div>
                <div className="about-skill">
                  <p className="flex items-center justify-center gap-4 text-lg text-gray-200 font-roboto">
                    <i className="devicon-tailwindcss-plain colored text-3xl"></i>
                    Tailwind css
                  </p>
                  <hr style={{ width: "50%" }} />
                </div>
                <div className="about-skill">
                  <p className="flex items-center justify-center gap-4 text-lg text-gray-200 font-roboto">
                    <i className="devicon-bootstrap-plain colored text-3xl"></i>
                    Bootstrap
                  </p>
                  <hr style={{ width: "50%" }} />
                </div>

                <div className="about-skill ">
                  <p className="flex items-center justify-center gap-4 text-lg text-gray-200 font-roboto">
                    <i className="devicon-nextjs-plain text-3xl"></i>
                    Next js
                  </p>
                  <hr style={{ width: "50%" }} />
                </div>
              </div>
            </div>
            <div className=" p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-blue-500">
              <div className="about-skills">
                <h1 className="text-3xl font-bold mb-10 text-blue-400 text-center font-poppins">
                  Backend Development
                </h1>
                <div className="about-skill">
                  <p className="flex items-center justify-center gap-4 text-lg text-gray-200 font-roboto">
                    
                      <i className="devicon-nodejs-plain colored text-3xl"></i>
                   
                    Node js
                  </p>
                  <hr style={{ width: "50%" }} />
                </div>
                <div className="about-skill">
                  <p className="flex items-center justify-center gap-4 text-lg text-gray-200 font-roboto">
                    <i>
                      <i className="devicon-express-original colored text-3xl"></i>
                    </i>
                    Express js
                  </p>
                  <hr style={{ width: "70%" }} />
                </div>
                <div className="about-skill">
                  <p className="flex items-center justify-center gap-4 text-lg text-gray-200 font-roboto">
                    <i className="devicon-mongodb-plain colored text-3xl"></i>
                    MongoDB
                  </p>
                  <hr style={{ width: "70%" }} />
                </div>
                <div className="about-skill">
                  <p className="flex items-center justify-center gap-4 text-lg text-gray-200 font-roboto">
                    <i className="devicon-mysql-plain colored text-3xl"></i>
                    Mysql
                  
                  </p>
                  <hr style={{ width: "60%" }} />
                </div>
                <div className="about-skill">
                  <p className="flex items-center justify-center gap-4 text-lg text-gray-200 font-roboto">
                    <i className="devicon-firebase-plain colored text-3xl"></i>
                    
                    FIrebase
                  </p>
                  <hr style={{ width: "50%" }} />
                </div>
              </div>
            </div>
            <div className=" p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-blue-500">
              <div className="about-skills">
                <h2 className="text-3xl font-bold mb-10 text-blue-400 text-center font-poppins">
                  full stack developement
                </h2>

                <div className="about-skill">
                  <p className="flex items-center justify-center gap-4 text-lg text-gray-200 font-roboto">
                    
                    frontend development
                  </p>
                  <hr style={{ width: "50%" }} />
                </div>
                <div className="about-skill">
                  <p className="flex items-center justify-center gap-4 text-lg text-gray-200 font-roboto">
                    backend develoment
                  </p>
                  <hr style={{ width: "70%" }} />
                </div>
                <div className="about-skill">
                  <p className="flex items-center justify-center gap-4 text-lg text-gray-200 font-roboto">
                    database{" "}
                  </p>
                  <hr style={{ width: "60%" }} />
                </div>
              </div>
            </div>
            <div className=" p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-blue-500">
              <div className="about-skills">
                <h2 className="text-3xl font-bold mb-10 text-blue-400 text-center font-poppins">
                  mobile App Developement
                </h2>
                <div className="about-skill">
                  <p className="flex items-center justify-center gap-4 text-lg text-gray-200 font-roboto">
                    Msql
                  </p>
                  <hr style={{ width: "50%" }} />
                </div>
                <div className="about-skill">
                  <p className="flex items-center justify-center gap-4 text-lg text-gray-200 font-roboto">
                    mango db
                  </p>
                  <hr style={{ width: "70%" }} />
                </div>
                <div className="about-skill">
                  <p className="flex items-center justify-center gap-4 text-lg text-gray-200 font-roboto">
                    Firebase
                  </p>
                  <hr style={{ width: "60%" }} />
                </div>
              </div>
            </div>
            <div className=" p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-blue-500">
              <div className="about-skills">
                <h2 className="text-3xl font-bold mb-10 text-blue-400 text-center font-poppins">
                  Database Developement
                </h2>
                <div className="about-skill">
                  <p className="flex items-center justify-center gap-4 text-lg text-gray-200 font-roboto">
                    Msql
                  </p>
                  <hr style={{ width: "50%" }} />
                </div>
                <div className="about-skill">
                  <p className="flex items-center justify-center gap-4 text-lg text-gray-200 font-roboto">
                    mango db
                  </p>
                  <hr style={{ width: "70%" }} />
                </div>
                <div className="about-skill">
                  <p className="flex items-center justify-center gap-4 text-lg text-gray-200 font-roboto">
                    Firebase
                  </p>
                  <hr style={{ width: "60%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>3+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>7+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
