import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  category:
    | 'programming'
    | 'frontend'
    | 'backend'
    | 'messaging'
    | 'cloud'
    | 'container'
    | 'database'
    | 'devops'
    | 'monitoring'
    | 'testing'
    | 'project'
    | 'os';
}

const skills: Skill[] = [
  // Programming Languages
  { name: 'Java', category: 'programming' },
  { name: 'JavaScript', category: 'programming' },
  { name: 'Python', category: 'programming' },
  { name: 'TypeScript', category: 'programming' },
  { name: 'Bash', category: 'programming' },
  { name: 'Shell', category: 'programming' },
  { name: 'C#', category: 'programming' },
  { name: 'C++', category: 'programming' },
  { name: 'Groovy', category: 'programming' },

  // Frontend Technologies
  { name: 'HTML5', category: 'frontend' },
  { name: 'CSS3', category: 'frontend' },
  { name: 'Bootstrap', category: 'frontend' },
  { name: 'React', category: 'frontend' },
  { name: 'Redux', category: 'frontend' },
  { name: 'React Hooks', category: 'frontend' },
  { name: 'Angular', category: 'frontend' },
  { name: 'NodeJS', category: 'frontend' },
  { name: 'AJAX', category: 'frontend' },

  // Backend & Frameworks
  { name: 'Spring Boot', category: 'backend' },
  { name: 'Spring MVC', category: 'backend' },
  { name: 'Spring Batch', category: 'backend' },
  { name: 'Spring Cloud', category: 'backend' },
  { name: 'Spring Security', category: 'backend' },
  { name: 'Spring IOC', category: 'backend' },
  { name: 'Hibernate', category: 'backend' },

  // Messaging & Event Streaming
  { name: 'Apache Kafka', category: 'messaging' },
  { name: 'Spring Kafka API', category: 'messaging' },
  { name: 'RabbitMQ', category: 'messaging' },
  { name: 'Apache ActiveMQ', category: 'messaging' },

  // Cloud Platforms
  { name: 'AWS EC2', category: 'cloud' },
  { name: 'AWS S3', category: 'cloud' },
  { name: 'AWS Lambda', category: 'cloud' },
  { name: 'AWS EKS', category: 'cloud' },
  { name: 'AWS ECS', category: 'cloud' },
  { name: 'Cloud Foundry', category: 'cloud' },
  { name: 'Microsoft Azure', category: 'cloud' },
  { name: 'Google Cloud Platform (GCP)', category: 'cloud' },

  // Containerization & Orchestration
  { name: 'Docker', category: 'container' },
  { name: 'Kubernetes', category: 'container' },

  // Databases
  { name: 'MySQL', category: 'database' },
  { name: 'MongoDB', category: 'database' },
  { name: 'PostgreSQL', category: 'database' },
  { name: 'SQL Server', category: 'database' },
  { name: 'DynamoDB', category: 'database' },
  { name: 'H2', category: 'database' },
  { name: 'NoSQL', category: 'database' },
  { name: 'Cassandra', category: 'database' },

  // DevOps & CI/CD Tools
  { name: 'Jenkins', category: 'devops' },
  { name: 'Git', category: 'devops' },
  { name: 'GitHub', category: 'devops' },
  { name: 'Bitbucket', category: 'devops' },
  { name: 'Maven', category: 'devops' },
  { name: 'Gradle', category: 'devops' },
  { name: 'Terraform', category: 'devops' },
  { name: 'CI/CD Pipelines', category: 'devops' },
  { name: 'Code Review', category: 'devops' },

  // Monitoring & Logging
  { name: 'Amazon CloudWatch', category: 'monitoring' },
  { name: 'Splunk', category: 'monitoring' },
  { name: 'New Relic', category: 'monitoring' },
  { name: 'log4j', category: 'monitoring' },

  // Testing & Documentation
  { name: 'JUnit', category: 'testing' },
  { name: 'Mockito', category: 'testing' },
  { name: 'Postman', category: 'testing' },
  { name: 'Swagger', category: 'testing' },
  { name: 'SonarQube', category: 'testing' },

  // Project & Agile Tools
  { name: 'Agile (Scrum)', category: 'project' },
  { name: 'Jira', category: 'project' },
  { name: 'Confluence', category: 'project' },
  { name: 'Atlassian', category: 'project' },

  // Operating Systems
  { name: 'Linux', category: 'os' },
  { name: 'UNIX', category: 'os' },
  { name: 'Windows', category: 'os' }
];

const Skills: React.FC = () => {
  const categories = [
    { id: 'programming', name: 'Programming Languages' },
    { id: 'frontend', name: 'Frontend Technologies' },
    { id: 'backend', name: 'Backend & Frameworks' },
    { id: 'messaging', name: 'Messaging & Event Streaming' },
    { id: 'cloud', name: 'Cloud Platforms' },
    { id: 'container', name: 'Containerization & Orchestration' },
    { id: 'database', name: 'Databases' },
    { id: 'devops', name: 'DevOps & CI/CD Tools' },
    { id: 'monitoring', name: 'Monitoring & Logging' },
    { id: 'testing', name: 'Testing & Documentation' },
    { id: 'project', name: 'Project & Agile Tools' },
    { id: 'os', name: 'Operating Systems' }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Here's a categorized overview of my technical expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-indigo-600 mb-4">{category.name}</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {skills
                  .filter(skill => skill.category === category.id)
                  .map((skill, index) => (
                    <li key={index}>{skill.name}</li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
