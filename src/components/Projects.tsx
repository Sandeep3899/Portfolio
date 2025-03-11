import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  
}

const projects: Project[] = [
  {
    title: "Secure Electronic Voting System using BFV Homomorphic Encryption",
    description: "Developed a secure electronic voting system leveraging homomorphic encryption to ensure voter privacy and data integrity. Designed with Django, Python, and SQLite, the system enables encrypted vote storage and automated tallying for a transparent and tamper-proof election process.",
    image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    githubLink: "https://github.com/Sandeep3899/Secure-Electronic-Voting-Systems-Enhancing-Integrity-And-Privacy-Through-Advanced-Cryptography.git",
    
  },
  {
    title: "Software Verification and Validation",
    description: "Developed a firmware validation system for G-Code interpretation aligned with Haas CNC standards, ensuring precise CNC machine control. Implemented testing strategies to verify rapid positioning, linear interpolation, and spindle control operations.",
    image: "https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",    
    githubLink: "https://github.com/Sandeep3899/SoftwareVerification-Validation",
  },
  {
    title: "E-Commerce Application using Oracle Apex",
    description: "Developed a dynamic e-commerce web application using Oracle APEX and Oracle Autonomous Database to manage products, orders, and customer data with real-time data visualization.",
    image: "https://plus.unsplash.com/premium_photo-1677852356095-51e64184cf25?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    githubLink: "https://github.com/Sandeep3899/CSC244_E-Commerce_Application_using_Oracle_APEX-main.git",
  },

];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Here are the projects I've worked on. Each project represents a unique challenge and solution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg transition-transform hover:transform hover:scale-105">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                
                {/*<div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies. => (
                    <span key={idx} className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div> */}
                
                <div className="flex space-x-4">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors"
                  >
                    <Github size={18} className="mr-1" />
                    <span>Code</span>
                  </a>
                  <a 
                     
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors"
                  >
                   
                    
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/Sandeep3899" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-full transition-colors inline-flex items-center"
          >
            <Github size={18} className="mr-2" />
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;