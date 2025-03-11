import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Hi, I'm <span className="text-yellow-400">Sandeep Reddy</span>
        </h1>
        
        <div className="text-xl md:text-3xl text-white font-light mb-8 h-16">
          <TypeAnimation
            sequence={[
              'Software Engineer',
              1000,
              'Front-End Devloper',
              1000,
              'Back-end Developer',
              1000,
              'Full Stack Developer',
              1000,
              'Problem Solver',
              1000,
              'Tech Enthusiast',
              1000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>
        
        <div className="flex justify-center space-x-4 mb-12">
          <a 
            href="#contact" 
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-full transition-colors"
          >
            Contact Me
          </a>
          <a 
            href="#projects" 
            className="bg-transparent hover:bg-white/10 text-white border border-white font-medium py-3 px-6 rounded-full transition-colors"
          >
            View My Work
          </a>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ArrowDown size={32} />
      </a>
    </section>
  );
};

export default Hero;