// app/components/About.jsx
export default function About() {
    return (
      <section id="about" className="section bg-slate-900">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About <span className="text-violet-500">Me</span></h2>
            <div className="w-20 h-1 bg-violet-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Full Stack Developer & <span className="text-violet-500">ML Engineer</span></h3>
              <p className="text-gray-300 mb-6">
                I'm a passionate developer with 5+ years of experience building web applications and 
                implementing machine learning solutions. I love solving complex problems and turning ideas into reality.
              </p>
              <p className="text-gray-300 mb-6">
                My journey in software development started when I was in college, and since then, I've worked on various projects
                ranging from e-commerce platforms to AI-powered applications. I'm always eager to learn new technologies
                and stay updated with industry best practices.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-300"><span className="text-violet-400 font-bold">Name:</span> Alex Johnson</p>
                  <p className="text-gray-300"><span className="text-violet-400 font-bold">Email:</span> alex@example.com</p>
                </div>
                <div>
                  <p className="text-gray-300"><span className="text-violet-400 font-bold">Location:</span> New York, USA</p>
                  <p className="text-gray-300"><span className="text-violet-400 font-bold">Availability:</span> Full-time</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold mb-4">Education</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-bold text-violet-400">Master of Science in Computer Science</h5>
                    <p className="text-gray-300">Stanford University | 2018 - 2020</p>
                    <p className="text-gray-400 text-sm">Specialization in Machine Learning</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-violet-400">Bachelor of Science in Computer Engineering</h5>
                    <p className="text-gray-300">MIT | 2014 - 2018</p>
                    <p className="text-gray-400 text-sm">Minor in Mathematics</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold mb-4">Work Experience</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-bold text-violet-400">Senior Full Stack Developer</h5>
                    <p className="text-gray-300">Tech Innovations Inc. | 2020 - Present</p>
                    <p className="text-gray-400 text-sm">Leading development of enterprise applications</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-violet-400">Machine Learning Engineer</h5>
                    <p className="text-gray-300">AI Solutions | 2018 - 2020</p>
                    <p className="text-gray-400 text-sm">Developed recommendation systems and NLP models</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }