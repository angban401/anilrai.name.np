"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { UploadCloud, CheckCircle2, AlertCircle, Loader2, ArrowLeft } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";

function UploadForm() {
  const searchParams = useSearchParams();
  const initialCourse = searchParams.get("course") || "BITM";

  const [course, setCourse] = useState(initialCourse);
  const [subject, setSubject] = useState(
    initialCourse === "CSIT" ? "Digital Logic (CSC116)" : "Business Management (MGT 231)"
  );
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [file, setFile] = useState<File | null>(null);
  
  const [isUploading, setIsUploading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      if (selectedFile.size > 20 * 1024 * 1024) {
        setStatus("error");
        setErrorMessage("File size should not exceed 20MB.");
        setFile(null);
        e.target.value = ""; // reset input
        return;
      }
      setFile(selectedFile);
      setStatus("idle");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !name || !rollNo) return;

    if (file.type !== "application/pdf") {
      setStatus("error");
      setErrorMessage("Please upload a PDF file.");
      return;
    }

    if (file.size > 20 * 1024 * 1024) {
      setStatus("error");
      setErrorMessage("File size should not exceed 20MB.");
      return;
    }

    setIsUploading(true);
    setStatus("idle");

    try {
      // Format file name: RollNo_Name_Subject_Timestamp
      const cleanSubject = subject.replace(/\s+/g, '_').replace(/[()]/g, '');
      const cleanName = name.trim().replace(/\s+/g, '_');
      const timestamp = new Date().getTime();
      const filePath = `${rollNo}_${cleanName}_${cleanSubject}_${timestamp}.pdf`;

      // Upload to Supabase bucket
      const { error } = await supabase.storage
        .from("Assignment")
        .upload(filePath, file, {
          cacheControl: "3600",
          upsert: false,
        });

      if (error) {
        throw error;
      }

      setStatus("success");
      setFile(null);
      setRollNo("");
      setName("");
      // Resetting the file input visually
      const fileInput = document.getElementById('file') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
    } catch (err: unknown) {
      console.error("Upload error:", err);
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "An error occurred during upload.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-xl mx-auto"
    >
      <div className="mb-6">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Courses
        </Link>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden">
        {/* Subtle decorative gradient */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Upload Assignment</h1>
          <p className="text-slate-500 dark:text-slate-400">
            Submit your PDF assignment for grading.
          </p>
        </div>

        {status === "success" && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl flex items-start gap-3 text-green-800 dark:text-green-300"
          >
            <CheckCircle2 className="w-6 h-6 shrink-0" />
            <div>
              <h3 className="font-semibold">Upload Successful!</h3>
              <p className="text-sm opacity-90 mt-1">Your assignment has been securely uploaded to the portal.</p>
            </div>
          </motion.div>
        )}

        {status === "error" && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl flex items-start gap-3 text-red-800 dark:text-red-300"
          >
            <AlertCircle className="w-6 h-6 shrink-0" />
            <div>
              <h3 className="font-semibold">Upload Failed</h3>
              <p className="text-sm opacity-90 mt-1">{errorMessage}</p>
            </div>
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="semester" className="text-sm font-medium">Semester</label>
              <select
                id="semester"
                value={course}
                disabled
                className="w-full h-12 px-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:ring-2 focus:ring-blue-500 outline-none transition-all disabled:opacity-75"
              >
                {course === "BITM" ? (
                  <option value="BITM">BITM 1st Sem</option>
                ) : (
                  <option value="CSIT">CSIT 1st Sem</option>
                )}
              </select>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">Subject</label>
              <select
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full h-12 px-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              >
                {course === "BITM" ? (
                  <option value="Business Management (MGT 231)">Business Management (MGT 231)</option>
                ) : (
                  <option value="Digital Logic (CSC116)">Digital Logic (CSC116)</option>
                )}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="rollNo" className="text-sm font-medium">Roll No.</label>
              <input
                id="rollNo"
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                required
                value={rollNo}
                onChange={(e) => setRollNo(e.target.value.replace(/\D/g, ''))}
                placeholder="e.g. 12"
                className="w-full h-12 px-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">Full Name</label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ram Thapa"
                className="w-full h-12 px-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>
          </div>

          <div className="space-y-2 pt-2">
            <label className="text-sm font-medium">Assignment File (PDF only, max 20MB)</label>
            <div className="relative">
              <input
                type="file"
                id="file"
                accept=".pdf,application/pdf"
                required
                onChange={handleFileChange}
                className="hidden"
              />
              <label
                htmlFor="file"
                className={`flex flex-col items-center justify-center w-full h-32 px-4 transition border-2 border-dashed rounded-2xl appearance-none cursor-pointer hover:border-blue-500 focus:outline-none
                  ${file ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/10' : 'border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950'}`}
              >
                <span className="flex flex-col items-center space-y-2 text-center">
                  <UploadCloud className={`w-6 h-6 ${file ? 'text-blue-500' : 'text-slate-400'}`} />
                  <span className={`font-medium ${file ? 'text-blue-600 dark:text-blue-400' : 'text-slate-500'}`}>
                    {file ? file.name : "Click to select or drop PDF here"}
                  </span>
                  {!file && (
                     <span className="text-xs text-slate-400">Maximum file size: 20MB</span>
                  )}
                </span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            disabled={isUploading || !file || !name || !rollNo}
            className="w-full h-12 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-500/30"
          >
            {isUploading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Uploading...
              </>
            ) : (
              "Submit Assignment"
            )}
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default function UploadPage() {
  return (
    <div className="flex-1 p-6 flex items-center justify-center">
      <Suspense fallback={<div className="w-full max-w-xl mx-auto p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl h-96 flex items-center justify-center"><Loader2 className="w-8 h-8 animate-spin text-blue-500" /></div>}>
        <UploadForm />
      </Suspense>
    </div>
  );
}
