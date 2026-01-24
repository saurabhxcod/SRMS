import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// Note: Ensure you have lucide-react installed: npm install lucide-react
import { 
  GraduationCap, 
  Home, 
  UserCircle, 
  ShieldCheck, 
  ChevronRight,
  Menu,
  X 
} from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/", icon: <Home className="w-5 h-5" /> },
    { name: "Student Portal", path: "/login", icon: <UserCircle className="w-5 h-5" /> },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
        ? "bg-white/95 shadow-xl py-4 backdrop-blur-md border-b border-slate-200" 
        : "bg-transparent py-8" // Increased from py-5
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-8 flex justify-between items-center">
        
        {/* Brand Identity - Enlarged Font */}
        <Link to="/" className="group flex items-center space-x-4">
          <div className="relative">
            <div className="w-14 h-14 bg-gradient-to-tr from-indigo-600 to-violet-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-indigo-200 group-hover:rotate-6 transition-transform duration-300">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-black tracking-tighter text-slate-900 leading-none uppercase">
              Edu<span className="text-indigo-600">Track</span>
            </span>
            <span className="text-[11px] font-bold text-slate-400 tracking-[0.3em] uppercase mt-1">
              Result Management
            </span>
          </div>
        </Link>

        {/* Desktop Navigation - Increased Text Size (text-lg) */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path} 
              className="relative group flex items-center space-x-2 text-lg font-bold text-slate-600 hover:text-indigo-600 transition-colors"
            >
              <span className="text-indigo-500 group-hover:scale-110 transition-transform">
                {link.icon}
              </span>
              <span>{link.name}</span>
              {/* Thicker Indicator Line */}
              <span className={`absolute -bottom-2 left-0 h-1 bg-indigo-600 transition-all duration-300 rounded-full ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          ))}
          
          {/* Larger Admin Button */}
          <Link 
            to="/admin-login" 
            className="group flex items-center space-x-3 px-8 py-4 bg-slate-900 text-white text-lg font-bold rounded-2xl hover:bg-indigo-600 hover:shadow-2xl hover:shadow-indigo-200 transition-all duration-300 active:scale-95"
          >
            <ShieldCheck className="w-6 h-6" />
            <span>Admin Access</span>
            <ChevronRight className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </Link>
        </nav>

        {/* Mobile Toggle - Enlarged */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-3 rounded-2xl bg-slate-100 text-slate-900 border border-slate-200"
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      <div className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[-1] transition-opacity md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsOpen(false)}></div>
      
      {/* Mobile Menu - Increased Spacing & Text */}
      <div className={`absolute top-full left-0 w-full bg-white border-b-4 border-indigo-600 p-8 flex flex-col space-y-4 md:hidden transform transition-all duration-300 origin-top ${isOpen ? 'scale-y-100 opacity-100 shadow-2xl' : 'scale-y-0 opacity-0'}`}>
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            to={link.path} 
            className="flex items-center space-x-4 p-5 rounded-2xl bg-slate-50 text-xl font-extrabold text-slate-800 active:bg-indigo-50 transition-colors" 
            onClick={() => setIsOpen(false)}
          >
            <span className="text-indigo-600">{link.icon}</span>
            <span>{link.name}</span>
          </Link>
        ))}
        <Link 
          to="/admin-login" 
          className="flex items-center justify-center space-x-3 w-full py-6 bg-indigo-600 text-white text-center rounded-2xl text-xl font-bold shadow-xl" 
          onClick={() => setIsOpen(false)}
        >
          <ShieldCheck className="w-6 h-6" />
          <span>Admin Access</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;