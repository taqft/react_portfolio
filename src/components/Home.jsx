import React from 'react'
import Typewriter from 'typewriter-effect'
import { Link } from 'react-scroll'

export const Home = () => {

  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
        {/* Container */}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
            <p className="text-yellow-300">{"Hello! My name is"}</p>
            <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Ben Koenig</h1>
            <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]"><Typewriter options={{strings: ["I'm a Full Stack Developer.", "I'm a Mountain Climber.", "I'm a Heavy Sleeper."], autoStart: true, loop: true}} /></h2>
            <p className="text-[#8892b0] py-4 max-w-[700px]">{"Constantly seeking new challenges and advancements in the world of technology."}</p>
            <div>
                <Link to="AboutMe" smooth={true} duration={400}>
                    <button className="text-white border-2 px-6 py-3 my-2 flex items-center hover:border-yellow-300">
                      {"About Me"}
                    </button>
                </Link>
                <Link to="Skills" smooth={true} duration={400}>
                    <button className="text-white border-2 px-6 py-3 my-2 flex items-center hover:border-yellow-300">
                      {"My Skills"}
                    </button>
                </Link>
                <Link to="Projects" smooth={true} duration={400}>
                    <button className="text-white border-2 px-6 py-3 my-2 flex items-center hover:border-yellow-300">
                      {"Projects"}
                    </button>
                </Link>
                <button className="text-white border-2 px-6 py-3 my-2 flex items-center hover:border-yellow-300">
                      <a href="https://docs.google.com/document/d/1fdJ-iBceguClSOTl35afv4psxpZOEV2_ZblU8GJkRrU/edit?usp=sharing" target="_blank" rel="noopener noreferrer" download="Resume for Ben Koenig">
                        {"Resume"}
                      </a>
                </button>
            </div>
        </div>
    </div>
  )
}
