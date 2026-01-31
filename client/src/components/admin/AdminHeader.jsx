import { Menu, LogOut, Bell, UserCircle, LayoutDashboard } from "lucide-react";

const AdminHeader = ({ setOpen }) => {
  return (
    <header className="flex items-center justify-between bg-white px-6 md:px-10 py-5 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] border-b border-slate-100 sticky top-0 z-40">
      
      {/* Left Side: Toggle & Title */}
      <div className="flex items-center gap-6">
        <button 
          onClick={() => setOpen(true)} 
          className="md:hidden p-2.5 bg-slate-50 text-slate-600 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 transition-all active:scale-95"
        >
          <Menu size={24} />
        </button>

        <div className="hidden md:flex items-center space-x-3 text-indigo-600">
          <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center">
            <LayoutDashboard size={20} className="stroke-[2.5]" />
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl font-black text-slate-900 leading-none tracking-tight">
              Control <span className="text-indigo-600">Center</span>
            </h2>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
              Admin Management
            </p>
          </div>
        </div>
      </div>

      {/* Right Side: Actions */}
      <div className="flex items-center space-x-4 md:space-x-6">
        
        {/* Notification Icon (Added for depth) */}
        <button className="relative p-2.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all">
          <Bell size={22} />
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-rose-500 border-2 border-white rounded-full"></span>
        </button>

        {/* User Profile (Visual only) */}
        <div className="hidden sm:flex items-center space-x-3 pr-4 border-r border-slate-100">
          <div className="text-right">
            <p className="text-sm font-black text-slate-900">Administrator</p>
            <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-tighter">System Active</p>
          </div>
          <UserCircle size={32} className="text-slate-300" />
        </div>

        {/* Enhanced Logout Button */}
        <button
          className="group flex items-center space-x-2 bg-slate-900 text-white px-5 py-2.5 rounded-xl font-black text-sm hover:bg-rose-600 hover:shadow-lg hover:shadow-rose-100 transition-all duration-300 active:scale-95"
        >
          <span>Logout</span>
          <LogOut size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </header>
  );
};

export default AdminHeader;