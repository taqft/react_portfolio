import React from "react";
import blogpreview from '../assets/blog-preview.png';
import plannerpreview from "../assets/planner-preview.png";
import emspreview from "../assets/ems-preview.png";
import weatherpreview from "../assets/weather-preview.png";
import namepasspreview from "../assets/namepass-preview.png";
import moonbaypreview from "../assets/moonbay-preview.png";

export const IndividualProject = () => {

  const projects = [
    { id: 1, name: "", img: blogpreview, demo: 'https://techblogmvc.up.railway.app/', code: 'https://github.com/RickyRicer/techBlogMVC'},
    { id: 2, name: "", img: emspreview, demo: 'https://github.com/taqft/CMSApp/blob/main/assets/images/demo.gif', code: 'https://github.com/taqft/CMSApp' },
    { id: 3, name: "", img: plannerpreview, demo: 'https://taqft.github.io/work_planner/', code: 'https://github.com/taqft/work_planner' },
    { id: 4, name: "", img: weatherpreview, demo: 'https://atmention.github.io/weather_app/', code: 'https://github.com/atmention/weather_app' },
    { id: 5, name: "", img: namepasspreview, demo: 'https://namepasspro.up.railway.app/', code: 'https://github.com/taqft/NamePassPro'},
    { id: 6, name: "", img: moonbaypreview, demo: 'https://moonbay.herokuapp.com/', code: 'https://github.com/taqft/MoonBay'}
  ];

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project) => (
            <div key={project.id} style={{backgroundImage: `url(${project.img})` }}className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">{project.name}</span>
              <div className="pt-8 text-center">
                <a href={project.demo} >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                </a>
                <a href={project.code}>
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
