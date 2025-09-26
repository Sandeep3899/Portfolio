import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Briefcase, GraduationCap } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  date: string;
  description: string[];
  type: "work" | "education";
}

const experiences: ExperienceItem[] = [
  {
    title: "Java Full Stack Developer",
    company: "Varo Bank",
    location: "San Francisco, CA",
    date: "June 2024 – Present",
    description: [
      "Developing and enhancing scalable, cloud-native financial applications using Java, Spring Boot, and React.js.",
      "Implementing secure REST APIs, integrating real-time transaction features, and improving system performance.",
      "Collaborating with cross-functional teams to deliver seamless digital banking experiences.",
    ],
    type: "work",
  },
  {
    title: "Java Full Stack Developer",
    company: "Concentrix",
    location: "Newark, CA",
    date: "May 2023 – May 2024",
    description: [
      "Built and deployed customer service applications with Java, Angular, and AWS Cloud services.",
      "Optimized microservices architecture for better scalability, security, and fault tolerance.",
      "Led CI/CD implementation with Jenkins, Docker, and Kubernetes for faster deployments.",
    ],
    type: "work",
  },
  {
    title: "Master of Science in Computer Science",
    company: "California State University, Sacramento",
    location: "Sacramento, CA",
    date: "Aug 2022 – Dec 2024",
    description: [],
    type: "education",
  },
  {
    title: "Software Engineer",
    company: "Cloudnine Group of Hospitals",
    location: "Remote, India",
    date: "Jan 2021 – July 2022",
    description: [
      "Designed and developed healthcare web solutions to streamline patient scheduling and hospital operations.",
      "Worked closely with doctors and admin teams to improve system usability and reduce manual effort.",
      "Integrated security best practices and data monitoring using Splunk and AWS CloudWatch.",
    ],
    type: "work",
  },

  {
    title: "Bachelor of Engineering in Computer Science",
    company: "Acharya Nagarjuna University",
    location: "Andhra Pradesh, India",
    date: "Apr 2018 – May 2022",
    description: [],
    type: "education",
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My Experience
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            My professional journey and educational background that have shaped
            my career.
          </p>
        </div>

        <VerticalTimeline>
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element"
              contentStyle={{
                background: "white",
                color: "#333",
                boxShadow: "0 3px 10px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
              }}
              contentArrowStyle={{ borderRight: "7px solid white" }}
              date={exp.date}
              iconStyle={{
                background: exp.type === "work" ? "#4f46e5" : "#10b981",
                color: "#fff",
              }}
              icon={exp.type === "work" ? <Briefcase /> : <GraduationCap />}
            >
              <h3 className="text-xl font-bold">{exp.title}</h3>
              <h4 className="text-indigo-600 font-medium">{exp.company}</h4>
              <p className="text-gray-500 italic">{exp.location}</p>
              <ul className="mt-4 text-gray-700 list-disc pl-5 space-y-2">
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
