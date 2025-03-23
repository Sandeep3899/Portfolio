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
              Hi, I’m <strong>Sandeep</strong>! I’m a passionate software engineer with a strong focus on backend development, cloud computing, and building reliable, high-performance applications. With hands-on experience at Cognizant and UL Solutions, I’ve designed and deployed scalable systems using technologies like Python, Node.js, .NET, and JavaScript. My work spans from creating RESTful APIs to building dynamic front-end interfaces and integrating CI/CD pipelines for efficient delivery. I’ve worked with cloud platforms like AWS and containerized deployments using Docker and Kubernetes, always aiming to optimize performance and security.
            </p>
            
            <p className="text-gray-700 mb-4">
             I’ve led the development of key features across web applications, contributed to automation testing initiatives, and helped improve internal knowledge-sharing by building documentation and training resources. One of my favorite projects involved creating a secure electronic voting system using Django and homomorphic encryption to ensure privacy and integrity—an experience that deepened my appreciation for the power of secure, ethical tech solutions.
            </p>
            
            <p className="text-gray-700 mb-4">
              When I'm not coding, you can find me exploring nature, reading tech blogs, or contributing to open-source projects.
              I believe in the power of technology to transform lives and am committed to creating meaningful digital experiences.
            </p>
            
            <p className="text-gray-700 mb-6">
              I thrive in collaborative environments where I can learn, grow, and make a real impact.
              If you're looking for someone who loves problem-solving and building great software, let’s connect!
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
