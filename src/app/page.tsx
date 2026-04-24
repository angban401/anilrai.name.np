"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BookOpen, Laptop, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 dark:bg-blue-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/10 dark:bg-purple-600/10 blur-[80px] rounded-full pointer-events-none -z-10" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
          Student Assignment Portal
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400">
          Select your course below to upload your latest assignments securely.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl">
        {/* BITM Card */}
        <Link href="/upload?course=BITM" className="block group">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="h-full relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all duration-300 p-8"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <BookOpen className="w-32 h-32 text-blue-500" />
            </div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mb-6">
                <BookOpen className="w-7 h-7 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-3xl font-bold mb-2">BITM</h2>
              <p className="text-slate-500 dark:text-slate-400 mb-8 flex-1">
                Bachelors in Information Technology Management. Upload your internal assessments and practicals here.
              </p>
              <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:translate-x-2 transition-transform">
                Proceed to Upload <ArrowRight className="ml-2 w-5 h-5" />
              </div>
            </div>
          </motion.div>
        </Link>

        {/* CSIT Card */}
        <Link href="/upload?course=CSIT" className="block group">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="h-full relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all duration-300 p-8"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Laptop className="w-32 h-32 text-purple-500" />
            </div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mb-6">
                <Laptop className="w-7 h-7 text-purple-600 dark:text-purple-400" />
              </div>
              <h2 className="text-3xl font-bold mb-2">CSIT</h2>
              <p className="text-slate-500 dark:text-slate-400 mb-8 flex-1">
                Computer Science and Information Technology. Submit your assignments and project works here.
              </p>
              <div className="flex items-center text-purple-600 dark:text-purple-400 font-medium group-hover:translate-x-2 transition-transform">
                Proceed to Upload <ArrowRight className="ml-2 w-5 h-5" />
              </div>
            </div>
          </motion.div>
        </Link>
      </div>
    </div>
  );
}
