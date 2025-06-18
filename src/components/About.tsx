import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        
        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Profile Image */}
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start">
            <img 
              src="https://raw.githubusercontent.com/Sandeep3899/Portfolio/main/Public/Pic.jpg" 
              alt="Profile"
              className="w-80 h-auto md:w-96 rounded-lg shadow-lg object-cover"
            />
          </div>
          
          {/* About Me Text */}
          <div className="md:ml-12 mt-6 md:mt-0 flex-1">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Who am I?</h3>
            
            <p className="text-gray-700 mb-4">
              Hi, I’m <strong>Sandeep</strong>!  I’m a Full Stack Software Engineer with 3.5+ years of hands-on experience designing and deploying scalable, secure, and high-performance web applications across fintech, healthcare, and customer service domains.
            </p>
            
            <p className="text-gray-700 mb-4">
              My expertise lies in building robust backend services with Java, Spring Boot, and RESTful APIs, as well as crafting responsive UIs using React.js and Angular. At companies like Varo Bank and Concentrix, I’ve developed cloud-native applications deployed on AWS, implemented real-time microservices, and automated CI/CD pipelines using Jenkins, Docker, and Kubernetes.
            </p>
            
            <p className="text-gray-700 mb-4">
              From KYC and fraud detection modules in banking to patient scheduling in healthcare, my work has consistently focused on solving real-world problems with clean, maintainable code. I thrive in Agile teams, collaborate closely with cross-functional stakeholders, and follow best practices in security, testing (JUnit, Mockito), and monitoring (CloudWatch, Splunk).
            </p>
            
            <p className="text-gray-700 mb-6">
              Outside of work, I enjoy exploring tech blogs, staying current with new frameworks, and building side projects that challenge me technically. I'm passionate about continuous learning and always looking for opportunities to make a real impact through software.
              Let’s build something great together!
            </p>
            
            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-full transition-colors"
              >
                Contact Me
              </a>
              <a 
                href="https://drive.google.com/uc?export=view&id=14YYgSBcUxhdU428jpB5Ir9oWtiscCL5R" 
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
