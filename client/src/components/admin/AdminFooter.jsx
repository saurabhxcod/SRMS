import { ShieldCheck, ExternalLink } from "lucide-react";

const AdminFooter = () => {
  return (
    <footer className="bg-white border-t border-slate-100 py-6 px-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left Side: Copyright & Brand */}
        <div className="flex items-center space-x-2 text-slate-400 font-bold text-sm">
          <ShieldCheck size={16} className="text-indigo-500" />
          <span>
            © {new Date().getFullYear()}{" "}
            <span className="text-slate-900">SRMS</span> 
            <span className="mx-2 text-slate-200">|</span> 
            <span className="text-indigo-600 hover:underline cursor-pointer transition-all">SAURABH</span>
          </span>
        </div>

        {/* Right Side: Status/Version */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              System Secure
            </span>
          </div>
          
          <a 
            href="https://pninfosys.com" 
            target="_blank" 
            rel="noreferrer"
            className="group flex items-center space-x-1 text-slate-400 hover:text-indigo-600 transition-colors"
          >
            <span className="text-xs font-bold tracking-tight">Support</span>
            <ExternalLink size={12} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default AdminFooter;