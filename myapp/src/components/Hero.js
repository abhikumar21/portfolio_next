import Image from 'next/image';
import Threed from './Threed'; // Assuming you have a 3D component for the image
import { textGradientColor, backGradientColor } from '@/utils/classNames';


export default function Hero() {  
  return (
    <>
    <section id="home" className="section pt-28 md:pt-36 min-h-screen flex flex-col items-center">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 xl:flex xl:flex-col xl:items-end">
            <h2 className={`font-bold text-xl md:text-2xl ${textGradientColor}`}>Hello, I'm</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight my-0">
              Abhishek Kumar
            </h1>
            <h2 className={`${textGradientColor} text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight`}>Software Developer</h2>
            <p className="text-lg text-gray-300 max-w-lg xl:text-right">
              I build exceptional digital experiences with expertise in full-stack development and machine learning.
            </p>
            <div className="flex flex-wrap gap-4">
              <a target="_blank" href="https://drive.google.com/file/d/1ZDK4gVn5r8LjbgFodV4WmufwponfDEWy/view?usp=sharing" className={`btn btn-primary text-black ${backGradientColor}`}>Resume</a>
              <a href="#projects" className={`btn border ${textGradientColor}`}>View Projects</a>
            </div>
            <div className="flex gap-4 pt-4">
              <a href="https://github.com/abhikumar21" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/abhishek-kumar-4b20a6230/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="hidden md:block relative">
            {/* <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-violet-500 rounded-full opacity-20 blur-3xl"></div>
              <div className="relative rounded-full overflow-hidden w-80 h-80 border-4 border-violet-500/30">
                <div className="w-full h-full bg-slate-800 flex items-center justify-center text-6xl text-violet-500">
                  <img src="/myImage.jpg" alt="" />
                </div>
              </div>
            </div> */}

            <Threed/>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}