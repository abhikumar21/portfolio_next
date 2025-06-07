// app/components/Projects.jsx
import { backGradientColor, textGradientColor } from '@/utils/classNames';
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform with product management, user authentication, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Redux Toolkit", "Cloudinary", "Razorpay"],
      imageUrl: "/projects/p11.png",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      title: "Data Structure and Algorithm Visualizer",
      description: "An interactive web application that visualizes various data structures and algorithms in real-time.",
      technologies: ["React", "Javascript", "D3.js"],
      imageUrl: "/projects/p12.png",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      title: "Social Media Application",
      description: "A social media platform with features like user profiles, authentication, posts, comments and real-time chat.",
      technologies: ["React", "Socket.io", "Node.js", "Redux", "MongoDB"],
      imageUrl: "/projects/p13.png",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      title: "Code Editor",
      description: "A html, css & javascript code editor using Next js.",
      technologies: ["Next.js", "Tailwind CSS"],
      imageUrl: "/projects/p15.png",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"  
    },
    {
      title: "Canteen Management System",
      description: "A web application for managing canteen operations, including order management and inventory tracking.",
      technologies: ["React", "Django", "Sendgrid", "Sqlite", "Tailwind"],
      imageUrl: "/projects/p14.png",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      title: "Heritage Site Virtual Tour",
      description: "A virtual tour application showcasing heritage sites with 360-degree views and information.",
      technologies: ["Unity 3D", "C#", "WebGL", "Blender"],
      imageUrl: "/projects/p16.png",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
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
                    <span key={techIndex} className="px-2 py-1 bg-slate-700 text-violet-400 rounded-md text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
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
                  </a>
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white bg-violet-600 hover:bg-violet-700 px-4 py-2 rounded-md text-sm flex items-center gap-2 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View More Projects
          </a>
        </div>
      </div>
    </section>
  );
}