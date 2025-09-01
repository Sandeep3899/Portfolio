import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
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
            <p className="text-gray-700 mb-4">
              Hey there! I’m <strong>Sandeep</strong>, a passionate{" "}
              <strong>Full Stack Software Engineer</strong> with over 3.5 years
              of experience designing and delivering scalable, secure, and
              high-performance web applications in{" "}
              <strong>fintech, healthcare, and customer service</strong>{" "}
              domains.
            </p>

            <p className="text-gray-700 mb-4">
              I specialize in building robust backend services with{" "}
              <strong>Java, Spring Boot</strong>, and RESTful APIs, along with
              crafting modern, responsive UIs using{" "}
              <strong>React.js and Angular</strong>. At companies like{" "}
              <strong>Varo Bank</strong> and <strong>Concentrix</strong>, I’ve
              built cloud-native apps on AWS, implemented real-time
              microservices, and automated CI/CD pipelines with{" "}
              <strong>Jenkins, Docker, and Kubernetes</strong>.
            </p>

            <p className="text-gray-700 mb-4">
              My work spans from fraud detection in banking to healthcare
              scheduling systems, always focusing on solving real-world problems
              with clean, maintainable code. I thrive in Agile teams, value
              collaboration, and follow best practices in{" "}
              <strong>security, testing</strong> (JUnit, Mockito), and{" "}
              <strong>monitoring</strong> (CloudWatch, Splunk).
            </p>

            <p className="text-gray-700 mb-6">
              Outside of work, I’m a big fan of{" "}
              <strong>badminton, camping, and traveling</strong> 🌍. I also love
              winding down with a round of <strong>PUBG</strong> 🎮. Whether
              it’s building software that makes an impact or exploring new
              places, I’m always curious, learning, and ready for the next
              challenge.
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
                href="https://drive.google.com/file/d/11l9x7FunF-mImDugyjNYBuSiBhHNGQG7/view?usp=drive_link"
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
