import React from "react";
import { 
  Bell, 
  Calendar, 
  ChevronRight, 
  Info, 
  Megaphone, 
  Star, 
  GraduationCap,
  ArrowUpRight,
  Download,
  Search,
  CheckCircle2
} from "lucide-react";

const Home = () => {
  const notices = [
    { title: "Semester 1–6 Result Declared", date: "15 Jan 2026", color: "border-indigo-500", bg: "bg-indigo-50/50" },
    { title: "MBA Semester 2 Exam Timetable Released", date: "10 Jan 2026", color: "border-emerald-500", bg: "bg-emerald-50/50" },
    { title: "Revaluation Form Last Date Extended", date: "08 Jan 2026", color: "border-rose-500", bg: "bg-rose-50/50" },
  ];

  const marqueeItems = [
    { icon: <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />, text: "Semester 5 Result Published" },
    { icon: <Calendar className="w-5 h-5 text-indigo-400" />, text: "Exam Form Submission Till 20 Feb 2026" },
    { icon: <Info className="w-5 h-5 text-rose-400" />, text: "Revaluation Open for BTECH & BCA" },
    { icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" />, text: "Final Year Viva Schedule Updated" }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-40 space-y-12">
        
        {/* ===== Hero Banner Section ===== */}
        <div className="relative group overflow-hidden rounded-[3rem] shadow-2xl shadow-indigo-100/50 border-4 border-white">
          <img
            src="https://www.softwaresuggest.com/blog/wp-content/uploads/2020/04/12-Benefits-of-Student-Database-Management-System.jpg"
            className="w-full h-[350px] md:h-[550px] object-cover transition-transform duration-1000 group-hover:scale-110"
            alt="College Banner"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent flex items-end p-8 md:p-20">
            <div className="text-white space-y-6 max-w-3xl transform transition-transform duration-500 group-hover:-translate-y-2">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase">
                Future-Ready <br />
                <span className="text-indigo-400">Excellence.</span>
              </h2>
              <p className="text-xl text-slate-200 font-bold leading-relaxed opacity-90">
                Experience the next generation of academic management. Secure, fast, 
                and designed for the modern student.
              </p>
            </div>
          </div>
        </div>

        {/* ===== Infinite Smooth Marquee ===== */}
        <div className="flex items-center bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-300 border-2 border-slate-800 relative">
          <div className="relative z-10 bg-indigo-600 px-10 py-6 flex items-center space-x-3 text-white shadow-[15px_0_35px_rgba(0,0,0,0.4)]">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
            </div>
            <span className="font-black text-xl tracking-widest uppercase italic">Live</span>
          </div>

          <div className="flex-1 overflow-hidden py-6">
            <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused] cursor-pointer">
              {/* Loop Twice for Seamless Infinite Effect */}
              {[1, 2].map((loop) => (
                <div key={loop} className="flex items-center space-x-16 px-8">
                  {marqueeItems.map((item, index) => (
                    <span key={index} className="text-xl font-bold text-white flex items-center space-x-4">
                      {item.icon}
                      <span className="tracking-wide">{item.text}</span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== Content Grid ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-4">

          {/* Notice Board */}
          <div className="lg:col-span-2 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.04)] rounded-[2.5rem] p-10 md:p-14 border border-slate-100">
            <div className="flex items-center justify-between border-b-4 border-slate-50 pb-10 mb-10">
              <div className="flex items-center space-x-5">
                <div className="p-5 bg-indigo-600 rounded-[1.5rem] text-white shadow-xl shadow-indigo-100 rotate-3 group-hover:rotate-0 transition-transform">
                  <Bell className="w-8 h-8" />
                </div>
                <h2 className="text-4xl font-black text-slate-900 tracking-tight">Notice Board</h2>
              </div>
              <button className="flex items-center space-x-2 text-indigo-600 font-black text-lg group">
                <span>View All</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>

            <div className="space-y-8">
              {notices.map((notice, index) => (
                <div key={index} className={`group flex items-center p-8 rounded-[2rem] border-l-[10px] ${notice.color} ${notice.bg} hover:scale-[1.02] transition-all cursor-pointer shadow-sm`}>
                  <div className="flex-1">
                    <p className="text-2xl font-black text-slate-800 mb-2 group-hover:text-indigo-700 transition-colors">{notice.title}</p>
                    <span className="flex items-center text-slate-500 font-bold text-base">
                      <Calendar className="w-5 h-5 mr-3 text-indigo-400" />
                      {notice.date}
                    </span>
                  </div>
                  <ChevronRight className="w-8 h-8 text-slate-300 group-hover:text-indigo-600 group-hover:translate-x-2 transition-all" />
                </div>
              ))}
            </div>
          </div>

          {/* Student Portal Quick Links */}
          <div className="space-y-10">
            <div className="bg-slate-900 rounded-[2.5rem] p-12 text-white shadow-2xl relative overflow-hidden min-h-[500px] flex flex-col justify-center">
              <div className="absolute -top-10 -right-10 opacity-10 rotate-12">
                 <GraduationCap className="w-64 h-64" />
              </div>
              
              <h2 className="text-4xl font-black mb-10 relative z-10 leading-tight">Student <br /><span className="text-indigo-400 font-light">Services</span></h2>

              <ul className="space-y-8 relative z-10">
                {[
                  { text: "Check Results", icon: <Search /> },
                  { text: "Download Marksheet", icon: <Download /> },
                  { text: "Apply for Revaluation", icon: <ArrowUpRight /> }
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-5 group cursor-pointer">
                    <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:border-indigo-500 transition-all duration-300">
                      {React.cloneElement(item.icon, { className: "w-6 h-6" })}
                    </div>
                    <span className="text-xl font-bold text-slate-300 group-hover:text-white transition-colors">{item.text}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full mt-14 py-6 bg-indigo-600 rounded-2xl font-black text-xl hover:bg-indigo-500 transition-all shadow-2xl shadow-indigo-900/50 active:scale-95">
                Enter Portal
              </button>
            </div>

            {/* Support Widget */}
            <div className="bg-indigo-50 rounded-[2rem] p-8 border-2 border-indigo-100 flex items-center space-x-6">
               <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-indigo-600">
                  <Info className="w-8 h-8" />
               </div>
               <div>
                  <h4 className="font-black text-slate-900 text-lg">Need Help?</h4>
                  <p className="text-slate-600 font-bold">IT Support is online</p>
               </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 18s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;