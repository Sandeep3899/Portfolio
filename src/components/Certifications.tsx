import React, { useEffect, useState } from "react";

interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

const Certifications: React.FC = () => {
  const [certifications, setCertifications] = useState<Certification[]>([]);

  useEffect(() => {
    fetch("/data/certifications.json")
      .then((res) => res.json())
      .then((data) => setCertifications(data))
      .catch((err) => console.error("Error loading certifications:", err));
  }, []);

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">
            Here are some certifications I’ve earned along my journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {cert.name}
              </h3>
              <p className="text-gray-700">{cert.issuer}</p>
              <p className="text-gray-500 text-sm">{cert.date}</p>
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline mt-3 inline-block"
                >
                  View Credential
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
