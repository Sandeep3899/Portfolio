import React, { useEffect, useState } from "react";

interface Project {
  title: string;
  description: string;
  githubLink: string;
  image: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch(
      "https://api.github.com/users/Sandeep3899/repos?sort=updated&per_page=20"
    )
      .then((res) => res.json())
      .then((repos) => {
        const formattedProjects = repos.map((repo: any) => ({
          title: repo.name,
          description: repo.description || "No description available.",
          githubLink: repo.html_url,
          image: `https://opengraph.githubassets.com/1/${repo.full_name}`, // GitHub OG image
        }));
        setProjects(formattedProjects);
      })
      .catch((err) => console.error("Error fetching repos:", err));
  }, []);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Here are all the repositories from my GitHub, updated dynamically.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-50 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700">{project.description}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Sandeep3899"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-full transition-colors inline-flex items-center"
          >
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
