export default function SecondaryPage() {
  const subjects = [
    { title: "Mathematics", description: "Algebra, Geometry, Trigonometry, and Calculus fundamentals.", color: "from-blue-500 to-cyan-500" },
    { title: "Science", description: "Physics, Chemistry, and Biology essentials for secondary level.", color: "from-green-500 to-emerald-500" },
    { title: "Optional Math", description: "Advanced mathematical concepts for specialized learning.", color: "from-purple-500 to-pink-500" },
  ];

  return (
    <div className="py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Secondary Level Resources</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Master your core subjects with our comprehensive guides, practice papers, and detailed explanations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {subjects.map((subject) => (
          <div key={subject.title} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-lg transition-shadow duration-300">
            <div className={`h-2 bg-gradient-to-r ${subject.color}`}></div>
            <div className="p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">{subject.title}</h2>
              <p className="text-slate-600 mb-6">{subject.description}</p>
              <button className="w-full py-2.5 px-4 bg-slate-50 hover:bg-slate-100 text-slate-800 font-medium rounded-lg border border-slate-200 transition-colors">
                View Materials
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
