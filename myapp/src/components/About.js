import { backGradientColor, textGradientColor } from "@/utils/classNames";


// app/components/About.jsx
export default function About() {
    return (
      <section id="about" className="section bg-slate-900">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About <span className={`${textGradientColor}`}>Me</span></h2>
            <div className={`w-20 h-1 mx-auto ${backGradientColor}`}></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Full Stack Developer & <span className={`${textGradientColor}`}>ML Engineer</span></h3>
              <p className="text-gray-300 mb-6">
              I'm a passionate software developer with expertise in full-stack development, backend engineering, and database management. Skilled
              in designing scalable architectures, writing optimized code, and enhancing application performance. Strong foundation in data
              structures and algorithms with a problem-solving mindset for building robust software solutions.
              </p>
              <p className="text-gray-300 mb-6">
                My journey in software development started when I was in college, and since then, I've worked on various projects
                ranging from e-commerce platforms to AI-powered applications. I'm always eager to learn new technologies
                and stay updated with industry best practices.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-300"><span className={`${textGradientColor} font-bold`}>Email:</span> abhishekkumar2004abhi@gmail.com</p>
                </div>
                {/* <div>
                  <p className="text-gray-300"><span className="${textGradientColor} font-bold">Location:</span> New York, USA</p>
                  <p className="text-gray-300"><span className="${textGradientColor} font-bold">Availability:</span> Full-time</p>
                </div> */}
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold mb-4">Education</h4>
                <div className="space-y-4">
                  <div>
                    <span className={`font-bold ${textGradientColor}`}>Bachelors in Materials Science & Engineering</span>
                    <p className="text-gray-300">Indian Institute of Technology Kanpur, India | 2021 - 2025</p>
                  </div>
                  <div>
                    <span className={`font-bold ${textGradientColor}`}>Class 12</span>
                    <p className="text-gray-300">Children's Academy Lakhimpur-Kheri, India | 2020 - 2021</p>
                    <p className="text-gray-400 text-sm">Science - PCM</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold mb-4">Work Experience</h4>
                <div className="space-y-4">
                  <div>
                    <span className={`font-bold ${textGradientColor}`}>Senior Executive Web</span>
                    <p className="text-gray-300">Techkriti, IIT Kanput | Dec 2022 - March 2023</p>
                    <p className="text-gray-400 text-sm">Leading development and maintenance of Techkriti official website</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }