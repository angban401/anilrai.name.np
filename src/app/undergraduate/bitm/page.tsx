import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BITM Important Questions | anilrai.name.np",
  description: "Curated important questions for Bachelor of Information Technology and Management (BITM).",
};

export default function BITMPage() {
  return (
    <div className="flex-1 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      {/* Page Header */}
      <div className="mb-8 text-center">
        <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-600 dark:text-blue-400 px-4 py-1.5 rounded-full text-sm font-medium mb-4 border border-blue-500/20">
          Undergraduate &rsaquo; BITM
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-slate-100 mb-3">
          BITM Important Questions
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Curated important questions for Bachelor of Information Technology and Management. Study smart, score well.
        </p>
      </div>

      {/* Notion Embed */}
      <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl bg-white dark:bg-slate-900 mb-10">
        <div className="h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500" />
        <div className="p-1">
          <iframe
            src="https://bright-gram-0c8.notion.site/ebd//352c932e716f809da2a1f9eeda1cae83"
            width="100%"
            height="700"
            frameBorder="0"
            allowFullScreen
            title="BITM Important Questions"
            className="w-full"
          />
        </div>
      </div>

      {/* Back link */}
      <div className="text-center">
        <a
          href="/undergraduate"
          className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium transition-colors"
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
