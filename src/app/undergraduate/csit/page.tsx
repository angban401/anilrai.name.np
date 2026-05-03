import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CSIT Resources | anilrai.name.np",
  description: "Important questions and resources for Computer Science and Information Technology (CSIT).",
};

export default function CSITPage() {
  return (
    <div className="flex-1 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      {/* Page Header */}
      <div className="mb-8 text-center">
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-4 py-1.5 rounded-full text-sm font-medium mb-4 border border-emerald-500/20">
          Undergraduate &rsaquo; CSIT
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-slate-100 mb-3">
          CSIT Resources
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Important questions and study materials for Computer Science and Information Technology. Study smart, score well.
        </p>
      </div>

      {/* Chapter 7 Embed */}
      <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl bg-white dark:bg-slate-900 mb-10">
        <div className="h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500" />
        <div className="px-6 pt-5 pb-1">
          <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-200">Chapter 7</h2>
        </div>
        <div className="p-1">
          <iframe
            src="https://bright-gram-0c8.notion.site/ebd//353c932e716f8045853afb5b77eebc29"
            width="100%"
            height="600"
            frameBorder="0"
            allowFullScreen
            title="CSIT Chapter 7"
            className="w-full"
          />
        </div>
      </div>

      {/* Back link */}
      <div className="text-center">
        <a
          href="/undergraduate"
          className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 text-sm font-medium transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Undergraduate
        </a>
      </div>
    </div>
  );
}
