import certificationsDataRaw from "../data/certifications.json";

interface Certification {
  name: string;
  url: string;
  authority: string;
  startedOn: string;
  finishedOn: string;
  licenseNumber: string;
}

// ✅ Tell TS that this JSON is an array of Certification objects
const certificationsData: Certification[] = certificationsDataRaw;

const Certifications: React.FC = () => {
  return (
    <section
      id="certifications"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Here are the certifications I’ve earned to sharpen my technical
            skills.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => (
            <a
              key={index}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-xl shadow-md hover:shadow-2xl transition-all p-6 border border-gray-100 hover:-translate-y-1"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {cert.name}
              </h3>
              <p className="text-sm text-indigo-500 font-medium mb-2">
                {cert.authority}
              </p>
              <p className="text-sm text-gray-700 mb-1">
                {cert.startedOn && `📅 Started: ${cert.startedOn}`}{" "}
                {cert.finishedOn && `• ⏳ Expires: ${cert.finishedOn}`}
              </p>
              {cert.licenseNumber && (
                <p className="text-sm text-gray-500 mt-1 break-all">
                  🔑 License: {cert.licenseNumber}
                </p>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
