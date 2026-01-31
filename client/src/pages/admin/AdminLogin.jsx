import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Mail, 
  Lock, 
  LogIn, 
  GraduationCap, 
  ArrowRight,
  ShieldCheck 
} from "lucide-react";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Backend logic
    } catch (error) {
      alert("Login failed.");
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-4 py-12 relative overflow-hidden">
      
      {/* Background Decorative Blurs - Smaller */}
      <div className="absolute top-0 -left-10 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 -right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50"></div>

      <div className="bg-white border border-slate-100 shadow-[0_15px_40px_-12px_rgba(0,0,0,0.08)] rounded-[2rem] w-full max-w-md p-8 md:p-10 relative z-10">
        
        {/* Branding/Icon - Scaled Down */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl shadow-indigo-100 rotate-3 transition-transform">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">
            Admin <span className="text-indigo-600">Login</span>
          </h2>
          <p className="text-slate-500 font-bold text-sm mt-1">
            Access your academic portal
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          
          {/* Email Field */}
          <div className="space-y-1.5">
            <label className="text-xs font-black text-slate-600 uppercase tracking-widest ml-1">
              Email Address
            </label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="name@university.com"
                className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border-2 border-transparent rounded-xl text-base font-bold text-slate-900 focus:bg-white focus:border-indigo-600 focus:outline-none transition-all"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-1.5">
            <label className="text-xs font-black text-slate-600 uppercase tracking-widest ml-1">
              Password
            </label>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border-2 border-transparent rounded-xl text-base font-bold text-slate-900 focus:bg-white focus:border-indigo-600 focus:outline-none transition-all"
              />
            </div>
          </div>

          {/* Forgot Password Link */}
          <div className="flex justify-end">
            <a href="#" className="text-xs font-bold text-indigo-600 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="group w-full bg-slate-900 text-white font-black text-lg py-4 rounded-xl shadow-lg shadow-slate-200 hover:bg-indigo-600 hover:shadow-indigo-200 transition-all duration-300 flex items-center justify-center space-x-2 active:scale-95"
          >
            <span>Sign In</span>
            <LogIn className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        {/* Footer Links - More Compact */}
        <div className="mt-8 pt-6 border-t border-slate-50 flex flex-col items-center space-y-3">
          <Link to="/admin/login" className="flex items-center space-x-1.5 text-slate-400 hover:text-slate-900 font-black uppercase text-[10px] tracking-widest transition-colors">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Switch to Student Access</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link> 
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;