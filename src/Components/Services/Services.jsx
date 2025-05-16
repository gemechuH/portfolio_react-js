import React from "react";
import "./Services.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import Services_Data from "../../assets/services_data.js";
import arrow_icon from "../../assets/arrow_icon.svg";

const Services = () => {
  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => {
          return (
            <div
              key={index}
              className="services-format relative overflow-hidden group"
              style={{
                backgroundImage: `url(${service.bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-300"></div>

              
              {/* Content with relative positioning to appear above overlay */}
              <div className="relative z-10">
                <h3 className="text-blue-400">{service.s_no}</h3>
                <h2 className="text-white">{service.s_name}</h2>
                <p className="text-gray-200 transition-opacity duration-300 group-hover:opacity-0">
                  {service.s_desc}
                </p>

                {/* Technology Icons - Visible on Hover */}
                {/* Technology Icons - Visible on Hover */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex flex-wrap gap-4 items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {service.technologies?.map((tech, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-2"
                    >
                      <i
                        className={`${tech.icon} text-4xl hover:scale-110 transition-transform`}
                      ></i>
                      <span className="text-sm text-gray-300">{tech.name}</span>
                    </div>
                  ))}
                </div>

                <div className="services-readmore">
                  <p className="text-white">Read More</p>
                  <img src={arrow_icon} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
