import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { GraduationCap } from "lucide-react";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Student Portal | anilrai.name.np",
  description: "Upload your assignments and manage your coursework.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 selection:bg-blue-500/30">
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 backdrop-blur-xl">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-xl tracking-tight hover:opacity-80 transition-opacity">
              <GraduationCap className="w-6 h-6" />
              <span>anilrai.name.np</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              <Link href="/undergraduate" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Undergraduate
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-grow flex flex-col relative">
          {children}
        </main>
      </body>
    </html>
  );
}
