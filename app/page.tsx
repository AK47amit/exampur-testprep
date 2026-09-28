'use client';

import React, { useState } from 'react';
import { 
  Search, ShieldCheck, Award, Users, BookOpen, Clock, CheckCircle2, 
  ArrowRight, Play, Terminal, Zap, FileText, ChevronRight, Menu, X, Sparkles, UserCheck 
} from 'lucide-react';

export default function ExampurTestPrep() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const categories = ['All', 'DSSSB', 'UPSSSC', 'SSC', 'HCM', 'Delhi', 'UP', 'Court'];

  const courses = [
    { title: "KVS JSA Typing Practice Test Series", tests: "800+ Tests", time: "70 Days", price: "₹159", freePrice: "₹79", tag: "Popular", icon: "🏫", users: "14,809" },
    { title: "Subordinate Courts Punjab & Haryana (S.S.S.C.) Clerk Typing", tests: "900+ Tests", time: "70 Days", price: "₹159", freePrice: "₹89", tag: "High Demand", icon: "⚖️", users: "6,730" },
    { title: "DSSSB Junior Assistant / LDC / DASS IV Typing Tests", tests: "700+ Tests", time: "70 Days", price: "₹159", freePrice: "Free Demo", tag: "Exam Oriented", icon: "🏛️", users: "17,430" },
    { title: "UPSSSC Junior Assistant Typing Skill Test Series", tests: "900+ Tests", time: "30 Days", price: "₹79", freePrice: "Free Demo", tag: "Bilingual", icon: "📜", users: "69,577" },
    { title: "SSC CGL Typing Course Test Series", tests: "1000+ Tests", time: "30 Days", price: "₹79", freePrice: "Free", tag: "TCS Interface", icon: "📊", users: "10,563" },
    { title: "SSC CHSL 2024 Typing Test Series", tests: "900+ Tests", time: "100 Days", price: "₹239", freePrice: "Free", tag: "Best Seller", icon: "💻", users: "2,797" },
    { title: "Delhi High Court Junior Judicial Assistant (JJA)", tests: "900+ Tests", time: "30 Days", price: "₹79", freePrice: "Free", tag: "Court Special", icon: "⚖️", users: "5,896" },
    { title: "UP Police (UPPRPB) SI, ASI, Computer Operator", tests: "300+ Tests", time: "20 Days", price: "₹59", freePrice: "Free Tests", tag: "Police Dept", icon: "🛡️", users: "4,120" },
    { title: "ALLAHABAD High Court JA & Paid Apprentices & Steno", tests: "1000+ Tests", time: "60 Days", price: "₹159", freePrice: "Free Demo", tag: "Legal Passage", icon: "⚖️", users: "387" },
    { title: "Supreme Court Junior Court Assistant (JCA)", tests: "900+ Tests", time: "30 Days", price: "₹79", freePrice: "Free Demo", tag: "NTA Interface", icon: "🏛️", users: "342" },
    { title: "BSF Head Constable (Ministerial) Typing Tests", tests: "270+ Tests", time: "15 Days", price: "₹59", freePrice: "Free", tag: "Defence", icon: "🎖️", users: "7,648" },
    { title: "EPFO Social Security Assistant (SSA) Typing Course", tests: "500+ Tests", time: "30 Days", price: "₹99", freePrice: "Free", tag: "Banking", icon: "🏦", users: "5,133" },
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* Top Notification Bar */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white text-xs sm:text-sm py-2 px-4 text-center font-medium flex items-center justify-center gap-2">
        <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
        <span>Exampur Maha Bachat Offer: Get All-Exam Pro Pass starting at just ₹179 / Year! Use Code: <strong>EXAM15</strong></span>
      </div>

      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white font-black text-xl shadow-md shadow-blue-500/20">
              EX
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 flex items-center gap-1.5">
                Exampur <span className="text-blue-600">TestPrep</span>
              </h1>
              <p className="text-xs text-slate-500 font-semibold tracking-wider uppercase">Official Typing & Skill Test Portal</p>
            </div>
          </div>

          {/* Desktop Nav Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#courses" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition">All Courses</a>
            <a href="#passes" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition">Pro Passes</a>
            <a href="#features" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition">Features</a>
            <button className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-bold text-sm hover:bg-slate-100 transition">
              Login
            </button>
            <button className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-600/25 transition">
              Create Free Account
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-slate-700">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
            <a href="#courses" className="block py-2 text-base font-semibold text-slate-700">All Courses</a>
            <a href="#passes" className="block py-2 text-base font-semibold text-slate-700">Pro Passes</a>
            <a href="#features" className="block py-2 text-base font-semibold text-slate-700">Features</a>
            <div className="pt-2 flex flex-col gap-2">
              <button className="w-full py-2.5 rounded-xl border border-slate-300 text-slate-700 font-bold text-sm">Login</button>
              <button className="w-full py-2.5 rounded-xl bg-blue-600 text-white font-bold text-sm shadow-md">Create Free Account</button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-900 via-indigo-900 to-slate-900 text-white py-16 sm:py-24">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-semibold mb-6">
            <Zap className="w-4 h-4 text-yellow-400" /> Trusted by 75,000+ Serious Government Aspirants
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight max-w-4xl mx-auto leading-tight mb-6">
            Master Your Government Exam <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-yellow-300">Typing & Skill Tests</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 font-normal">
            Practice with exact TCS, NTA & Court exam-style interfaces, Hindi/English legal passages, real-time error calculation, and advanced speed analytics.
          </p>

          {/* Search Box */}
          <div className="max-w-2xl mx-auto bg-white p-2 rounded-2xl shadow-2xl flex items-center gap-2">
            <div className="pl-3 text-slate-400">
              <Search className="w-6 h-6" />
            </div>
            <input 
              type="text" 
              placeholder="Search exam typing test (e.g., SSC CGL, UP Police, Steno, High Court)..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-3 px-2 text-slate-800 placeholder-slate-400 bg-transparent text-sm sm:text-base focus:outline-none font-medium"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold text-sm sm:text-base transition shrink-0 shadow-md">
              Search Test
            </button>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 pt-12 border-t border-slate-800 text-left">
            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl backdrop-blur border border-white/10">
              <div className="p-3 bg-blue-500/20 text-blue-400 rounded-xl"><FileText className="w-6 h-6"/></div>
              <div>
                <div className="text-2xl font-black">30 Lakhs+</div>
                <div className="text-xs text-slate-400 font-medium">Typing Tests Served</div>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl backdrop-blur border border-white/10">
              <div className="p-3 bg-yellow-500/20 text-yellow-400 rounded-xl"><BookOpen className="w-6 h-6"/></div>
              <div>
                <div className="text-2xl font-black">50+ Courses</div>
                <div className="text-xs text-slate-400 font-medium">Exam-Focused Modules</div>
              </div>
            </div>
            <div className="col-span-2 md:col-span-1 flex items-center gap-4 bg-white/5 p-4 rounded-2xl backdrop-blur border border-white/10">
              <div className="p-3 bg-teal-500/20 text-teal-400 rounded-xl"><UserCheck className="w-6 h-6"/></div>
              <div>
                <div className="text-2xl font-black">75,000+</div>
                <div className="text-xs text-slate-400 font-medium">Verified Aspirants</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Yearly Pass Promo Section */}
      <section id="passes" className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 rounded-3xl p-8 sm:p-12 text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 border border-blue-400/20">
          <div>
            <div className="inline-block bg-yellow-400 text-slate-900 text-xs font-black uppercase px-3 py-1 rounded-full mb-3 tracking-wider">
              Best Yearly Value
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight mb-3">
              One Exampur Pass for Serious Typing Preparation
            </h2>
            <p className="text-blue-100 max-w-xl text-sm sm:text-base font-normal">
              Unlock all eligible premium typing courses for a full year. Keep your results, analytics, and speed history in one unified dashboard.
            </p>
            <div className="flex flex-wrap gap-4 mt-6 text-xs sm:text-sm font-semibold">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-yellow-300"/> 50+ Premium Courses</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-yellow-300"/> 365 Days Full Validity</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-yellow-300"/> Speed Booster Included</span>
            </div>
          </div>
          <div className="bg-white text-slate-900 p-8 rounded-2xl shadow-xl text-center shrink-0 w-full sm:w-80">
            <span className="text-xs uppercase font-extrabold text-slate-400 tracking-wider">Starts at</span>
            <div className="text-4xl sm:text-5xl font-black text-blue-600 my-1">₹179</div>
            <span className="text-xs text-slate-500 font-medium block mb-6">Valid upto 365 Days (All Exams Included)</span>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl shadow-lg transition">
              Explore All Passes
            </button>
            <span className="text-[11px] text-slate-400 mt-3 block">First pass purchase gets extra 15% off</span>
          </div>
        </div>
      </section>

      {/* All Courses Section */}
      <section id="courses" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">All Exam Typing Courses</h2>
            <p className="text-sm text-slate-500 font-medium">Select your target exam and start practicing right away</p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
                  selectedCategory === cat 
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20' 
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300 transition duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-2xl shadow-inner">
                    {course.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700">
                      {course.time}
                    </span>
                    <span className="text-[11px] font-extrabold px-2.5 py-1 rounded-lg bg-amber-50 text-amber-700">
                      {course.tag}
                    </span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition mb-3 line-clamp-2">
                  {course.title}
                </h3>

                <div className="space-y-2 mb-6 text-xs text-slate-600 font-medium border-t border-slate-100 pt-3">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-slate-500"><FileText className="w-3.5 h-3.5 text-blue-600"/> Total Tests:</span>
                    <span className="font-bold text-slate-800">{course.tests}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-slate-500"><Terminal className="w-3.5 h-3.5 text-blue-600"/> Interface:</span>
                    <span className="font-bold text-slate-800">Real Exam UI</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-slate-500"><Users className="w-3.5 h-3.5 text-blue-600"/> Enrolled Aspirants:</span>
                    <span className="font-bold text-slate-800">{course.users}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <button 
                  onClick={() => alert(`Opening free demo for ${course.title}`)}
                  className="flex-1 py-2.5 px-3 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-50 transition"
                >
                  {course.freePrice}
                </button>
                <button 
                  onClick={() => alert(`Redirecting to checkout for ${course.title} at ${course.price}`)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-600/20 transition flex items-center justify-center gap-1"
                >
                  BUY @ {course.price} <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Highlight Section */}
      <section id="features" className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-3">Why Aspirants Choose Exampur TestPrep</h2>
            <p className="text-sm text-slate-500 font-medium">Engineered specifically to beat exam anxiety and eliminate typing mistakes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold text-lg mb-6 shadow-md shadow-blue-600/30">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Exam-Wise Passages</h3>
              <p className="text-sm text-slate-600 font-normal leading-relaxed">
                Practice with exact paragraphs mapped to popular government exams including official legal formatting and numeric data sets.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-bold text-lg mb-6 shadow-md shadow-indigo-600/30">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Bilingual Font Support</h3>
              <p className="text-sm text-slate-600 font-normal leading-relaxed">
                Complete language and font settings that match real test needs including Mangal Font with Unicode Inscript keyboard layout.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="w-12 h-12 bg-teal-600 text-white rounded-xl flex items-center justify-center font-bold text-lg mb-6 shadow-md shadow-teal-600/30">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Deep Analytics & History</h3>
              <p className="text-sm text-slate-600 font-normal leading-relaxed">
                Get detailed result breakdown, gross WPM, net WPM, accuracy percentage, and word-by-word error analysis after every test.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-sm">
                EX
              </div>
              <span className="text-lg font-bold">Exampur TestPrep</span>
            </div>
            <p className="text-xs text-slate-400">The ultimate destination for government exam typing practice & skill tests.</p>
          </div>
          <div className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Exampur Edtech Pvt Ltd. All rights reserved. Built with World-Class Tech Stack.
          </div>
        </div>
      </footer>

    </div>
  );
}