// app/components/Projects.jsx
import { backGradientColor, hoverBackGradientColor, textGradientColor } from '@/utils/classNames';
import Image from 'next/image';



export default function Projects() {
  
const tools = {
  react: {
    name: "React.js",
    color: "teal-600",
    bgColor: "teal-200",
  },
  node: {
    name: "Node.js",
    color: "green-600",
    bgColor: "green-200",
  },
  express: {
    name: "Express.js",
    color: "blue-600",
    bgColor: "blue-200",
  },
  mongo: {
    name: "MongoDB",
    color: "yellow-600",
    bgColor: "yellow-200",
  },
  reduxToolkit: {
    name: "Redux Toolkit",
    color: "purple-600",
    bgColor: "purple-200",
  },
  redux: {
    name: "Redux",
    color: "purple-600",
    bgColor: "purple-200",
  },
  tailwind: {
    name: "Tailwind CSS",
    color: "cyan-600",
    bgColor: "cyan-200",
  },
  django: {
    name: "Django",
    color: "orange-600",
    bgColor: "orange-200",
  },
  socket: {
    name: "Socket.io",
    color: "pink-600",
    bgColor: "pink-200",
  },
  unity: {
    name: "Unity 3D",
    color: "indigo-600",
    bgColor: "indigo-200",
  },
  blender: {
    name: "Blender",
    color: "red-600",
    bgColor: "red-200",
  },
  webgl: {
    name: "WebGL",
    color: "gray-600",
    bgColor: "gray-200",
  },
  cloudinary: {
    name: "Cloudinary",
    color: "teal-700",
    bgColor: "teal-300",
  },
  razorpay: {
    name: "Razorpay",
    color: "green-700",
    bgColor: "green-300",
  },
  sendgrid: {
    name: "Sendgrid",
    color: "blue-700",
    bgColor: "blue-300",
  },
  nextjs: {
    name: "Next.js",
    color: "purple-700",
    bgColor: "purple-300",
  },
  csharp: {
    name: "C#",
    color: "orange-700",
    bgColor: "orange-300",
  },
  js: {
    name: "Javascript",
    color: "yellow-700",
    bgColor: "yellow-300",
  },
  d3: {
    name: "D3.js",
    color: "pink-700",
    bgColor: "pink-300",
  },
  sqlite: {
    name: "Sqlite",
    color: "indigo-700",
    bgColor: "indigo-300",
  }
};


  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform with product management, user authentication, and payment integration.",
      technologies: ["react", "node", "Mongo", "express", "reduxToolkit", "cloudinary", "razorpay"],
      imageUrl: "/projects/p11.png",
      githubUrl: "https://github.com/abhikumar21/E-CommerceApp",
      liveUrl: ""
    },
    {
      title: "Data Structure and Algorithm Visualizer",
      description: "An interactive web application that visualizes various data structures and algorithms in real-time.",
      technologies: ["react", "d3", "js"],
      imageUrl: "/projects/p12.png",
      githubUrl: "https://github.com/abhikumar21/DSA_Visualizer",
      liveUrl: ""
    },
    {
      title: "Social Media Application",
      description: "A social media platform with features like user profiles, authentication, posts, comments and real-time chat.",
      technologies: ["react", "socket", "node", "redux", "mongo"],
      imageUrl: "/projects/p13.png",
      githubUrl: "https://github.com/abhikumar21/social_ring",
      liveUrl: ""
    },
    {
      title: "Code Editor",
      description: "A html, css & javascript code editor using Next js.",
      technologies: ["next", "tailwind"],
      imageUrl: "/projects/p15.png",
      githubUrl: "https://github.com",
      liveUrl: ""  
    },
    {
      title: "Canteen Management System",
      description: "A web application for managing canteen operations, including order management and inventory tracking.",
      technologies: ["react", "django", "sendgrid", "sqlite", "tailwind"],
      imageUrl: "/projects/p14.png",
      githubUrl: "",
      liveUrl: ""
    },
    {
      title: "Heritage Site Virtual Tour",
      description: "A virtual tour application showcasing heritage sites with 360-degree views and information.",
      technologies: ["unity", "csharp", "Webgl", "blender"],
      imageUrl: "/projects/p16.png",
      githubUrl: "",
      liveUrl: ""
    }
  ];

  return (
    <section id="projects" className="section bg-slate-900">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured <span className={`${textGradientColor}`}>Projects</span></h2>
          <div className={`w-20 h-1 mx-auto ${backGradientColor}`}></div>
          <p className="text-gray-300 mt-6">
            Here are some of my recent projects that showcase my skills and expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-2">
              <div className="h-[260px] overflow-hidden relative px-3 pt-3">
                <img className='' src={project.imageUrl} alt="" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className={`px-3 py-1 rounded-full text-xs text-slate-300 border border-cyan-800 shadow-md`}>
                      {tools[tech]?.name || tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  {project.githubUrl && 
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-md text-sm flex items-center gap-2 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    Code
                  </a>}


                 {project.liveUrl!="" && <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`${backGradientColor} ${hoverBackGradientColor} text-black px-4 py-2 rounded-md text-sm flex items-center gap-2`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>}

                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/abhikumar21" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`btn inline-flex items-center gap-2 text-black ${backGradientColor}`}
          >
            <svg className={`w-5 h-5`} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View More Projects
          </a>
        </div>
      </div>
    </section>
  );
}