
// app/components/Contact.jsx
"use client";

import { backGradientColor, textGradientColor } from "@/utils/classNames";

export default function Contact() {


  const icons = [
    {
      name: 'Github',
      color: 'white',
      urlPath: "https://github.com/abhikumar21",
      path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61 -.546-1.385-1.333-1.754-1.333-1.754-1.09-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.304 3.495.997 .108-.776.418-1.305.76-1.605-2.665-.3-5.467-1.334-5.467-5.93 0-1.31.468-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.52 11.52 0 0 1 3-.405c1.02.005 2.045.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23 .645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.435.372.81 1.102.81 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.694.825.577 C20.565 22.092 24 17.592 24 12.297 24 5.67 18.627.297 12 .297z",
    },
    {
      name: 'LinkedIn',
      color: '#0077B5',
      urlPath: "https://www.linkedin.com/in/abhishek-kumar-4b20a6230/",
      path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.804-1.75-1.732s.784-1.732 1.75-1.732 1.75.804 1.75 1.732-.784 1.732-1.75 1.732zm13.5 11.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-10h3v1.604c1.396-2.586 7-2.777 7 2.476v5.92z"
    }, 
    {
      name: 'Twitter',
      color: 'white',
      urlPath: "https://x.com/Abhiske81398110",
      path: "M20.39 3H17.6L12 9.65 6.4 3H3l7.68 9.07L3 21h2.79L12 14.35 18.21 21H21l-7.68-8.93L20.39 3z"
    },
    {
      name: 'Email',
      color: '#EA4335',
      urlPath: "mailto:abhishekkumar2004abhi@gmail.com",
      path: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
    }
    
  ]
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thank you for your message! I will get back to you soon.');
      setSubmitError(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In <span className={`${textGradientColor}`}>Touch</span></h2>
          <div className={`w-20 h-1 mx-auto ${backGradientColor}`}></div>
          <p className="text-gray-300 mt-6">
            Have a project in mind or want to learn more about my work? Feel free to reach out!
          </p>
        </div>

        <div className="contact-details flex justify-center items-center flex-wrap gap-20 pb-[60px] pt-[40px]">
         { icons.map((item, index) => (
          <a href={item?.urlPath} target="_blank" key={index} className="card bg-slate-600 h-[160px] w-[160px] flex justify-center items-center rounded-2xl">
            <div className="circular-container h-1/2 w-1/2 flex justify-center items-center rounded-full bg-black" style={{filter: `drop-shadow(0 0 5px ${item.color})`}} >
              <svg xmlns="http://www.w3.org/2000/svg" fill={item.color} className={`h-10 w-10`} viewBox="0 0 24 24">
                  <path d={item.path}/>
              </svg>
            </div>
          </a>
          ))}    
        </div>

      </div>
    </section>
  );
}