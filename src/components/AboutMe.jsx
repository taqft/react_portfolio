import React from 'react'

export const AboutMe = () => {

  return (
    <div name="about-me" className="w-full h-screen bg-[#0a192f] text-gray-300">
        <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                <div className="sm:text-right pb-8 pl-4">
                    <p className="text-4xl font-bold inline border-b-4 border-yellow-300">{"About Me"}</p>
                </div>
            </div>
            <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                <div className="sm:text-right text-4xl font-bold">
                      <p>{"Connect with me on socials! ⬅️👋"}</p>
                </div>
                <div>
                      <p>{"My name is Ben Koenig. I am currently studying software engineering and fullstack web development. I have always worked in tech whether that be the ecommerce space or fixing computers. I love building things and solving problems."}</p>
                </div>
            </div>
        </div>
    </div>
  )
}
