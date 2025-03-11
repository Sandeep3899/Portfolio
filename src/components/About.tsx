import React from 'react';
import ProfileImage from "C:/Users/yeruv/Downloads/project-bolt-sb1-vktrekd8/project/Picture/Pic.jpg";


const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start">
            <img 
              src={ProfileImage} // Use the imported image
              alt="Profile"
              className="w-80 h-auto md:w-96 rounded-lg shadow-lg object-cover"
            />
          </div>
          
          <div className="md:ml-12 mt-6 md:mt-0 flex-1">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Who am I?</h3>
            <p className="text-gray-700 mb-4">
              Hi, I’m Sandeep! I’m a passionate software engineer who loves building scalable, efficient, and high-impact applications. 
              Whether it's optimizing backend systems, designing cloud infrastructure, or creating seamless user experiences, 
              I enjoy solving complex problems and making technology work smarter.
            </p>
            <p className="text-gray-700 mb-4">
              I’ve worked on a variety of projects, from developing secure APIs and microservices to integrating cloud solutions and automating workflows. 
              At Cognizant, I built and optimized APIs using Python, Django, Node.js, and .NET, improving performance and reducing latency. I’ve also worked with AWS, CI/CD pipelines, and React.js to create smooth and reliable applications. 
              One of my favorite projects was developing a secure electronic voting system using homomorphic encryption, which made me appreciate the power of security and innovation in tech.
            </p>
            <p className="text-gray-700 mb-4">
              When I'm not coding, you can find me exploring nature, reading tech blogs, or contributing to 
              open-source projects. I believe in the power of technology to transform lives and am committed 
              to creating meaningful digital experiences.

            </p>
            <p className="text-gray-700 mb-6">
              I thrive in collaborative environments where I can learn, grow, and make a real impact. If you're looking for someone who loves problem-solving and building great software, let’s connect!
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-full transition-colors"
              >
                Contact Me
              </a>
              <a 
                href="https://drive.google.com/file/d/14YYgSBcUxhdU428jpB5Ir9oWtiscCL5R/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-transparent hover:bg-indigo-50 text-indigo-600 border border-indigo-600 font-medium py-2 px-6 rounded-full transition-colors"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;