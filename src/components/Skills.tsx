import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

const skills: Skill[] = [
  // Frontend
  { name: "HTML", level: 95, category: "frontend" },
  { name: "CSS", level: 90, category: "frontend" },
  { name: "JavaScript", level: 92, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "Redux", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 88, category: "frontend" },
  
  // Backend
  { name: "Node.js", level: 88, category: "backend" },
  { name: "Express", level: 85, category: "backend" },
  { name: "MongoDB", level: 80, category: "backend" },
  { name: "SQL", level: 75, category: "backend" },
  { name: "GraphQL", level: 70, category: "backend" },
  { name: "REST API", level: 90, category: "backend" },
  
  // Tools
  { name: "Git", level: 92, category: "tools" },
  { name: "Docker", level: 75, category: "tools" },
  { name: "AWS", level: 70, category: "tools" },
  { name: "Webpack", level: 80, category: "tools" },
  { name: "Jest", level: 85, category: "tools" },
  
  // Other
  { name: "Agile/Scrum", level: 90, category: "other" },
  { name: "UI/UX Design", level: 75, category: "other" },
  { name: "Problem Solving", level: 95, category: "other" },
  { name: "Communication", level: 90, category: "other" }
];

const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 font-medium">{skill.name}</span>
        <span className="text-gray-600">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <motion.div 
          className="bg-indigo-600 h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const categories = [
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "tools", name: "Tools" },
    { id: "other", name: "Other" }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Here's a comprehensive overview of my technical skills and proficiency levels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-indigo-600 mb-4">{category.name}</h3>
              {skills
                .filter(skill => skill.category === category.id)
                .map((skill, index) => (
                  <SkillBar key={index} skill={skill} />
                ))
              }
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;