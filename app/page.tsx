'use client';

import React, { useState, useEffect } from 'react';
import { 
  Search, Users, BookOpen, CheckCircle2, 
  ArrowRight, Terminal, FileText, Menu, X, UserCheck, ChevronLeft, ChevronRight, 
  Send 
} from 'lucide-react';

export default function ExampurTestPrep() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "SSC Typing Test 2024-25 CGL",
      subtitle: "500+ Tests & FREE DEMO",
      bgGradient: "from-amber-600 via-yellow-600 to-red-600",
      tag: "SSC Special",
      imagePlaceholder: "💻"
    },
    {
      title: "INVITE YOUR FRIEND & Win Rewards",
      subtitle: "Share the power of smart exam preparation",
      bgGradient: "from-blue-600 via-indigo-700 to-amber-600",
      tag: "Referral Program",
      imagePlaceholder: "🤝"
    },
    {
      title: "TYPING COURSE TO BOOST CHSL SPEED",
      subtitle: "Master your keyboard accuracy with expert guidance",
      bgGradient: "from-orange-500 via-red-600 to-amber-600",
      tag: "Best Seller",
      imagePlaceholder: "⚡"
    },
    {
      title: "Connect With Us & Follow Now",
      subtitle: "We are active on all social networks for daily updates",
      bgGradient: "from-slate-800 via-amber-900 to-slate-900",
      tag: "Community",
      imagePlaceholder: "🌐"
    },
    {
      title: "Improve Your Typing Skills Now",
      subtitle: "Affordable Courses | Free Trial Available | 500+ Tests per course",
      bgGradient: "from-red-700 via-orange-600 to-amber-600",
      tag: "Skill Booster",
      imagePlaceholder: "🎯"
    },
    {
      title: "Detailed Test Analysis",
      subtitle: "Helps to improve your performance with deep insights",
      bgGradient: "from-blue-900 via-indigo-900 to-slate-900",
      tag: "Analytics",
      imagePlaceholder: "📊"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

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

  const filteredCourses = courses.filter(course => course.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="min-h-screen bg-[#fdfbf7] font-sans text-slate-800">
      
      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 bg-[#fdfbf7]/95 backdrop-blur-md border-b border-amber-200/60 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-amber-500 shadow-md bg-white flex items-center justify-center">
              <img src="/exampur logo 2.jpg" alt="Exampur Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 flex items-center gap-1.5">
                Exampur <span className="text-amber-600">TestPrep</span>
              </h1>
              <p className="text-[11px] text-slate-500 font-bold tracking-widest uppercase">Official Typing & Skill Test Portal</p>
            </div>
          </div>

          {/* Social Icons with WhatsApp underline hover effect */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="relative group flex items-center gap-1.5 text-slate-700 hover:text-red-600 font-bold text-sm transition">
              <div className="w-9 h-9 rounded-full bg-red-100 flex items-center justify-center text-red-600 shadow-sm group-hover:scale-110 transition">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </div>
              <span>YouTube</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a href="https://telegram.org" target="_blank" rel="noreferrer" className="relative group flex items-center gap-1.5 text-slate-700 hover:text-sky-600 font-bold text-sm transition">
              <div className="w-9 h-9 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 shadow-sm group-hover:scale-110 transition">
                <Send className="w-4 h-4" />
              </div>
              <span>Telegram</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-600 transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="relative group flex items-center gap-1.5 text-slate-700 hover:text-pink-600 font-bold text-sm transition">
              <div className="w-9 h-9 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 shadow-sm group-hover:scale-110 transition">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </div>
              <span>Instagram</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="relative group flex items-center gap-1.5 text-slate-700 hover:text-blue-600 font-bold text-sm transition">
              <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shadow-sm group-hover:scale-110 transition">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
              </div>
              <span>Facebook</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* Right Auth Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button className="relative group px-5 py-2.5 rounded-xl border-2 border-amber-500 text-amber-700 font-extrabold text-sm hover:bg-amber-500 hover:text-white transition shadow-sm overflow-hidden">
              <span className="relative z-10">Login</span>
              <span className="absolute bottom-0 left-0 w-full h-0 bg-amber-500 transition-all duration-300 group-hover:h-full -z-0"></span>
            </button>
            <button className="relative group px-6 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-extrabold text-sm shadow-lg shadow-amber-600/20 transition transform hover:-translate-y-0.5">
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
          <div className="md:hidden bg-[#fdfbf7] border-b border-amber-200 px-4 pt-3 pb-6 space-y-3">
            <div className="pt-2 flex flex-col gap-2">
              <button className="w-full py-2.5 rounded-xl border-2 border-amber-500 text-amber-700 font-bold text-sm">Login</button>
              <button className="w-full py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold text-sm shadow-md">Create Free Account</button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Banner Slider Section */}
      <section className="py-6 sm:py-8 bg-[#fdfbf7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900">
            
            <div className={`relative w-full h-[320px] sm:h-[400px] bg-gradient-to-r ${heroSlides[currentSlide].bgGradient} flex items-center justify-between px-8 sm:px-16 text-white transition-opacity duration-500`}>
              <div className="z-10 max-w-xl">
                <span className="inline-block bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider border border-white/30">
                  {heroSlides[currentSlide].tag}
                </span>
                <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-3 drop-shadow-md">
                  {heroSlides[currentSlide].title}
                </h2>
                <p className="text-base sm:text-lg text-amber-100 font-medium drop-shadow">
                  {heroSlides[currentSlide].subtitle}
                </p>
              </div>

              <div className="hidden md:flex items-center justify-center text-8xl opacity-30 select-none">
                {heroSlides[currentSlide].imagePlaceholder}
              </div>

              <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-slate-800 flex items-center justify-center shadow-lg transition z-20">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-slate-800 flex items-center justify-center shadow-lg transition z-20">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
              {heroSlides.map((_, idx) => (
                <button key={idx} onClick={() => setCurrentSlide(idx)} className={`w-2.5 h-2.5 rounded-full transition-all ${currentSlide === idx ? 'bg-amber-400 w-6' : 'bg-white/50'}`} />
              ))}
            </div>

          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6 bg-white p-6 rounded-3xl shadow-sm border border-amber-200/60 items-center">
            <div className="flex items-center gap-3 md:border-r border-amber-100 pr-4">
              <div className="w-12 h-12 rounded-2xl overflow-hidden border border-amber-400 shadow-inner bg-white flex items-center justify-center">
                <img src="/exampur logo 2.jpg" alt="Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base">Exampur TestPrep</h4>
                <p className="text-xs text-slate-500 font-medium">Trusted typing exam practice for serious aspirants.</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-amber-50/50 p-4 rounded-2xl border border-amber-100">
              <div className="p-3 bg-amber-100 text-amber-700 rounded-xl"><FileText className="w-5 h-5"/></div>
              <div>
                <div className="text-xl font-black text-slate-900">30,00,000+</div>
                <div className="text-xs text-slate-500 font-semibold">typing tests taken</div>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-amber-50/50 p-4 rounded-2xl border border-amber-100">
              <div className="p-3 bg-red-100 text-red-700 rounded-xl"><BookOpen className="w-5 h-5"/></div>
              <div>
                <div className="text-xl font-black text-slate-900">50+</div>
                <div className="text-xs text-slate-500 font-semibold">exam-focused courses</div>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-amber-50/50 p-4 rounded-2xl border border-amber-100">
              <div className="p-3 bg-blue-100 text-blue-700 rounded-xl"><UserCheck className="w-5 h-5"/></div>
              <div>
                <div className="text-xl font-black text-slate-900">75,000+</div>
                <div className="text-xs text-slate-500 font-semibold">verified happy users</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto mb-12 bg-white p-2 rounded-2xl shadow-md border border-amber-200 flex items-center gap-2">
          <div className="pl-3 text-amber-600"><Search className="w-5 h-5" /></div>
          <input 
            type="text" 
            placeholder="Search exam typing test (e.g., SSC CGL, UP Police, Steno, High Court)..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-2.5 px-2 text-slate-800 placeholder-slate-400 bg-transparent text-sm sm:text-base focus:outline-none font-medium"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">All Courses</h2>
            <p className="text-sm text-slate-500 font-medium">Select your target exam and start practicing right away</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
                  selectedCategory === cat 
                    ? 'bg-amber-600 text-white shadow-md shadow-amber-600/20' 
                    : 'bg-white text-slate-600 border border-amber-200 hover:bg-amber-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-amber-200/60 shadow-sm hover:shadow-xl hover:border-amber-400 transition duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-2xl shadow-inner">
                    {course.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-amber-50 text-amber-800">{course.time}</span>
                    <span className="text-[11px] font-extrabold px-2.5 py-1 rounded-lg bg-red-50 text-red-700">{course.tag}</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-600 transition mb-3 line-clamp-2">
                  {course.title}
                </h3>

                <div className="space-y-2 mb-6 text-xs text-slate-600 font-medium border-t border-amber-100 pt-3">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-slate-500"><FileText className="w-3.5 h-3.5 text-amber-600"/> Total Tests:</span>
                    <span className="font-bold text-slate-800">{course.tests}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-slate-500"><Terminal className="w-3.5 h-3.5 text-amber-600"/> Interface:</span>
                    <span className="font-bold text-slate-800">Real Exam UI</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-slate-500"><Users className="w-3.5 h-3.5 text-amber-600"/> Enrolled Aspirants:</span>
                    <span className="font-bold text-slate-800">{course.users}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-amber-100 flex items-center gap-3">
                <button onClick={() => alert(`Opening free demo for ${course.title}`)} className="flex-1 py-2.5 px-3 rounded-xl border border-amber-300 text-slate-700 font-bold text-xs hover:bg-amber-50 transition">
                  {course.freePrice}
                </button>
                <button onClick={() => alert(`Redirecting to checkout for ${course.title} at ${course.price}`)} className="flex-1 py-2.5 px-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-md transition flex items-center justify-center gap-1">
                  BUY @ {course.price} <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Yearly Pass Section */}
      <section id="passes" className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-red-700 via-amber-600 to-yellow-600 rounded-3xl p-8 sm:p-12 text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 border border-amber-400/30">
          <div>
            <div className="inline-block bg-yellow-300 text-slate-900 text-xs font-black uppercase px-3 py-1 rounded-full mb-3 tracking-wider">
              Best Yearly Value
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight mb-3">
              One Exampur Pass for Serious Typing Preparation
            </h2>
            <p className="text-amber-100 max-w-xl text-sm sm:text-base font-normal">
              Unlock all eligible premium typing courses for a full year. Keep your results, analytics, and speed history in one unified dashboard.
            </p>
            <div className="flex flex-wrap gap-4 mt-6 text-xs sm:text-sm font-semibold">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-yellow-300"/> 50+ Premium Courses</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-yellow-300"/> 365 Days Full Validity</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-yellow-300"/> Speed Booster Included</span>
            </div>
          </div>
          <div className="bg-white text-slate-900 p-8 rounded-2xl shadow-xl text-center shrink-0 w-full sm:w-80 border-2 border-amber-400">
            <span className="text-xs uppercase font-extrabold text-slate-400 tracking-wider">Starts at</span>
            <div className="text-4xl sm:text-5xl font-black text-amber-600 my-1">₹179</div>
            <span className="text-xs text-slate-500 font-medium block mb-6">Valid upto 365 Days (All Exams Included)</span>
            <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3.5 rounded-xl shadow-lg transition">
              Explore All Passes
            </button>
            <span className="text-[11px] text-slate-400 mt-3 block">First pass purchase gets extra 15% off</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 border-t border-amber-500/30 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg overflow-hidden border border-amber-400 bg-white flex items-center justify-center">
                <img src="/exampur logo 2.jpg" alt="Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-lg font-bold">Exampur TestPrep</span>
            </div>
            <p className="text-xs text-slate-400">The ultimate destination for government exam typing practice & skill tests.</p>
          </div>
          <div className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Exampur Edtech Pvt Ltd. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}