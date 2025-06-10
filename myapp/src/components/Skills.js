"use client"
import { useState } from 'react';
import './Skills.css'
import { backGradientColor, textGradientColor } from '@/utils/classNames';


export default function Skills() {


  const skills1 = {
    frontend: [
      { name: "HTML", icon: "/skill/html.png" },
      { name: "CSS", icon: "/skill/css.png" },
      { name: "JavaScript", icon: "/skill/js.png" },
      { name: "TypeScript", icon: "/skill/ts.png" },
      { name: "React JS", icon: "/skill/react.png" },
      { name: "Next JS", icon: "/skill/next.png" },
      { name: "Tailwind CSS", icon: "/skill/tailwind.png" },
      { name: "Three JS", icon: "/skill/three.png" },
      { name: "Redux Toolkit", icon: "/skill/redux.png" },
    ],
    backend: [
      { name: "Django", icon: "/skill/django.png" },
      { name: "Node.js", icon: "/skill/node.png" },
      { name: "Express.js", icon: "/skill/express.png" },
      { name: "MongoDB", icon: "/skill/mongodb.png" },
      { name: "MySQL", icon: "/skill/mysql.png" },
    ]
  }

  const skills2 = {
    languages: [
      { name: "C++", icon: "/skill/cpp.png" },
      { name: "Python", icon: "/skill/python.png" },
      { name: "JavaScript", icon: "/skill/js.png" },

    ],
    Tools: [
      { name: "Git", icon: "/skill/git.png" },
      { name: "Github", icon: "/skill/github.png" },
      { name: "Postman", icon: "/skill/postman.png" },
      { name: "Vercel", icon: "/skill/vercel.png" },
    ]
  }

  
    return (
      <section id="skills" className="section bg-slate-900">
        <div className="container">
          <div className="mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">My Tech <span className={textGradientColor}>Stack</span></h2>
            <div className={`w-20 h-1 mx-auto ${backGradientColor}`}></div>  

            <div className="skills-first gap-8 mt-8">
            {
              Object.entries(skills1)  // converts the object into an array of [key, value] pairs
              .map(([category, skillList], index) => {
                return (
                  <div key={index} className="w-full bg-slate-800 rounded-md">
                    <h3 className="text-2xl font-bold mb-5 mt-6">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                    <div className="flex flex-wrap justify-center mb-3">
                    {skillList.map((skill, skillIndex) => {
                        return (
                          <div key={skillIndex} className="flex items-center mb-4 bg-white px-4 py-2 mx-2 lg:mx-4 rounded-2xl gap-1">
                              <img
                                src={skill.icon}
                                alt={skill.name}
                                className="w-6 h-6"
                              />
                            <span className="text-black">{skill.name}</span>
                          </div>
                        )
                      })}
                    </div>

                  </div>
                )
              })
            }
            </div>


            <div className="skills-second gap-8 mt-8">
            {
              Object.entries(skills2)  // converts the object into an array of [key, value] pairs
              .map(([category, skillList], index) => {
                return (
                  <div key={index} className="w-full bg-slate-800 rounded-md">
                    <h3 className="text-2xl font-bold mb-5 mt-6">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                    <div className="flex flex-wrap justify-center mb-3">
                    {skillList.map((skill, skillIndex) => {
                        return (
                          <div key={skillIndex} className="flex items-center mb-4 bg-white px-4 py-2 mx-2 lg:mx-4 rounded-2xl gap-1">
                              <img
                                src={skill.icon}
                                alt={skill.name}
                                className="w-6 h-6"
                              />
                            <span className="text-black">{skill.name}</span>
                          </div>
                        )
                      })}
                    </div>

                  </div>
                )
              })
            }
            </div>

          </div>
        </div>
      </section>
    );
  }