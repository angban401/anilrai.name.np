import Link from "next/link";

const programs = [
  { title: "BBA", description: "Bachelor of Business Administration. Management, Finance, and Marketing.", color: "from-amber-500 to-orange-500", href: null },
  { title: "BITM", description: "Bachelor of Information Technology and Management. Bridging tech and business.", color: "from-blue-500 to-indigo-500", href: "/undergraduate/bitm" },
  { title: "CSIT", description: "Computer Science and Information Technology. Core computing and software engineering.", color: "from-emerald-500 to-teal-500", href: "/undergraduate/csit" },
  { title: "BCA", description: "Bachelor of Computer Applications. Programming, databases, and web development.", color: "from-purple-500 to-violet-500", href: null },
];

export default function UndergraduatePage() {
  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-slate-100 mb-4">Undergraduate Resources</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Excel in your degree with our specialized course materials, past papers, and project guides.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {programs.map((program) => {
          const cardContent = (
            <>
              <div className={`h-2 bg-gradient-to-r ${program.color}`} />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3">{program.title}</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm h-16">{program.description}</p>
                <div className={`w-full py-2.5 px-4 text-center text-white font-medium rounded-lg transition-colors ${
                  program.href
                    ? "bg-blue-600 group-hover:bg-blue-700"
                    : "bg-slate-300 dark:bg-slate-700 cursor-not-allowed text-slate-500 dark:text-slate-400"
                }`}>
                  {program.href ? `Explore ${program.title}` : "Coming Soon"}
                </div>
              </div>
            </>
          );

          return program.href ? (
            <Link
              key={program.title}
              href={program.href}
              className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800 hover:-translate-y-1 hover:shadow-xl hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 block"
            >
              {cardContent}
            </Link>
          ) : (
            <div
              key={program.title}
              className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800 opacity-60"
            >
              {cardContent}
            </div>
          );
        })}
      </div>
    </div>
  );
}

