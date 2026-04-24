export default function UndergraduatePage() {
  const programs = [
    { title: "BBA", description: "Bachelor of Business Administration. Management, Finance, and Marketing.", color: "from-amber-500 to-orange-500" },
    { title: "BITM", description: "Bachelor of Information Technology and Management. Bridging tech and business.", color: "from-blue-500 to-indigo-500" },
    { title: "CSIT", description: "Computer Science and Information Technology. Core computing and software engineering.", color: "from-emerald-500 to-teal-500" },
    { title: "BCA", description: "Bachelor of Computer Applications. Programming, databases, and web development.", color: "from-purple-500 to-violet-500" },
  ];

  return (
    <div className="py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Undergraduate Resources</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Excel in your degree with our specialized course materials, past papers, and project guides.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {programs.map((program) => (
          <div key={program.title} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
            <div className={`h-2 bg-gradient-to-r ${program.color}`}></div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">{program.title}</h2>
              <p className="text-slate-600 mb-6 text-sm h-16">{program.description}</p>
              <button className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg transition-colors">
                Explore {program.title}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
