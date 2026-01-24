import React from "react";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  ArrowRight,
  Globe
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20">
      <div className="max-w-[1440px] mx-auto px-8 pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* 1. Brand Identity */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <span className="text-2xl font-black tracking-tighter uppercase">
              Edu<span className="text-indigo-400">Track</span>
            </span>
          </div>
          <p className="text-slate-400 text-lg font-medium leading-relaxed">
            PNINFOSYS is a leader in educational IT solutions. Empowering students 
            with real-time result tracking and academic management since 2026.
          </p>
          <div className="flex space-x-4">
            {[
              { icon: <Facebook />, color: "hover:bg-blue-600" },
              { icon: <Twitter />, color: "hover:bg-sky-500" },
              { icon: <Instagram />, color: "hover:bg-pink-600" },
              { icon: <Youtube />, color: "hover:bg-red-600" },
            ].map((social, i) => (
              <a 
                key={i} 
                href="#" 
                className={`w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center transition-all duration-300 ${social.color} hover:-translate-y-2`}
              >
                {React.cloneElement(social.icon, { size: 20 })}
              </a>
            ))}
          </div>
        </div>

        {/* 2. Quick Navigation */}
        <div>
          <h3 className="text-xl font-black mb-8 uppercase tracking-widest text-indigo-400">Quick Links</h3>
          <ul className="space-y-4">
            {[
              { name: "Home", path: "/" },
              { name: "Student Portal", path: "/student-login" },
              { name: "Admin Dashboard", path: "/admin-login" },
              { name: "Support Center", path: "/contact" },
            ].map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path} 
                  className="group flex items-center text-slate-400 hover:text-white font-bold text-lg transition-colors"
                >
                  <ArrowRight className="w-5 h-5 mr-3 text-indigo-500 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                  <span>{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Contact Details */}
        <div>
          <h3 className="text-xl font-black mb-8 uppercase tracking-widest text-indigo-400">Get In Touch</h3>
          <ul className="space-y-6">
            <li className="flex items-start space-x-4 group">
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <MapPin size={24} />
              </div>
              <div>
                <p className="font-bold text-slate-200">Headquarters</p>
                <p className="text-slate-400">Gwalior, Madhya Pradesh</p>
              </div>
            </li>
            <li className="flex items-start space-x-4 group">
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <Phone size={24} />
              </div>
              <div>
                <p className="font-bold text-slate-200">Phone Support</p>
                <p className="text-slate-400">+91 7000846823</p>
              </div>
            </li>
          </ul>
        </div>

        {/* 4. Newsletter/Mission */}
        <div className="bg-indigo-600/10 p-8 rounded-[2rem] border border-indigo-500/20">
          <h3 className="text-xl font-black mb-4 flex items-center space-x-2">
            <Globe className="text-indigo-400" />
            <span>PNINFOSYS</span>
          </h3>
          <p className="text-slate-300 font-bold mb-6">
            Connecting students with their potential through digital innovation.
          </p>
          <div className="relative">
             <input 
               type="email" 
               placeholder="Your Email" 
               className="w-full bg-slate-800 border-none rounded-xl py-4 px-5 text-white focus:ring-2 focus:ring-indigo-500 outline-none"
             />
             <button className="absolute right-2 top-2 bottom-2 bg-indigo-600 px-4 rounded-lg hover:bg-indigo-500 transition-colors">
               <ArrowRight size={20} />
             </button>
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="border-t border-slate-800 py-10 bg-slate-950">
        <div className="max-w-[1440px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-slate-500 font-bold">
          <p>© {new Date().getFullYear()} PNINFOSYS | Student Result System</p>
          <div className="flex space-x-8 text-sm uppercase tracking-widest">
            <a href="#" className="hover:text-indigo-400">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-400">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;