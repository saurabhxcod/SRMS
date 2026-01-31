import { NavLink } from "react-router-dom";
import { useState } from "react";
import { 
  ChevronRight, 
  ChevronsLeft, 
  LayoutDashboard, 
  School, 
  BookOpen, 
  Users, 
  FileText, 
  Bell, 
  PlusCircle, 
  Layers,
  GraduationCap
} from "lucide-react";

const Sidebar = ({ open, setOpen, collapsed, setCollapsed }) => {
  const [classOpen, setClassOpen] = useState(false);
  const [subjectOpen, setSubjectOpen] = useState(false);

  const closeSidebar = () => {
    if (window.innerWidth < 768) setOpen(false);
  };

  const navItemClass = ({ isActive }) => `
    group flex items-center px-4 py-3.5 rounded-xl transition-all duration-300 mb-1
    ${isActive 
      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-900/40" 
      : "text-slate-400 hover:bg-white/5 hover:text-white"}
  `;

  const dropdownItemClass = "flex items-center w-full px-4 py-3.5 text-slate-400 hover:bg-white/5 hover:text-white rounded-xl transition-all mb-1";

  return (
    <aside
      className={`
        fixed md:static top-0 left-0 z-50
        h-screen bg-slate-950 border-r border-white/5
        text-white transition-all duration-500 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0
        ${collapsed ? "w-24" : "w-72"}
      `}
    >
      {/* Logo Section */}
      <div className="flex items-center justify-between px-6 py-8 border-b border-white/5">
        {!collapsed && (
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <GraduationCap size={24} />
            </div>
            <span className="font-black text-xl tracking-tighter uppercase">
              Edu<span className="text-indigo-400">Track</span>
            </span>
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 hover:bg-white/5 rounded-lg transition-colors text-slate-400 hidden md:block"
        >
          <ChevronsLeft className={`transition-transform duration-500 ${collapsed ? "rotate-180" : ""}`} />
        </button>
      </div>

      <nav className="p-4 overflow-y-auto h-[calc(100vh-100px)] custom-scrollbar">
        
        {/* Dashboard Link */}
        <NavLink onClick={closeSidebar} to="/admin/dashboard" className={navItemClass}>
          <LayoutDashboard size={22} className={collapsed ? "mx-auto" : "mr-4"} />
          {!collapsed && <span className="font-bold tracking-wide">Dashboard</span>}
        </NavLink>

        {/* ===== Student Classes Dropdown ===== */}
        <div className="py-2">
          <button
            onClick={() => setClassOpen(!classOpen)}
            className={`${dropdownItemClass} ${classOpen && !collapsed ? "text-indigo-400" : ""}`}
          >
            <School size={22} className={collapsed ? "mx-auto" : "mr-4"} />
            {!collapsed && (
              <>
                <span className="flex-1 text-left font-bold tracking-wide">Classes</span>
                <ChevronRight size={18} className={`transition-transform duration-300 ${classOpen ? "rotate-90" : ""}`} />
              </>
            )}
          </button>

          {classOpen && !collapsed && (
            <div className="ml-4 pl-4 border-l-2 border-white/5 space-y-1 mt-1 animate-in slide-in-from-top-2 duration-300">
              <NavLink onClick={closeSidebar} to="/admin/classes/add" className={navItemClass}>
                <PlusCircle size={18} className="mr-3" />
                <span className="text-sm font-semibold">Create Class</span>
              </NavLink>
              <NavLink onClick={closeSidebar} to="/admin/classes/manage" className={navItemClass}>
                <Layers size={18} className="mr-3" />
                <span className="text-sm font-semibold">Manage Classes</span>
              </NavLink>
            </div>
          )}
        </div>

        {/* ===== Subject Dropdown ===== */}
        <div className="py-2">
          <button
            onClick={() => setSubjectOpen(!subjectOpen)}
            className={`${dropdownItemClass} ${subjectOpen && !collapsed ? "text-indigo-400" : ""}`}
          >
            <BookOpen size={22} className={collapsed ? "mx-auto" : "mr-4"} />
            {!collapsed && (
              <>
                <span className="flex-1 text-left font-bold tracking-wide">Subjects</span>
                <ChevronRight size={18} className={`transition-transform duration-300 ${subjectOpen ? "rotate-90" : ""}`} />
              </>
            )}
          </button>

          {subjectOpen && !collapsed && (
            <div className="ml-4 pl-4 border-l-2 border-white/5 space-y-1 mt-1 animate-in slide-in-from-top-2 duration-300">
              <NavLink onClick={closeSidebar} to="/admin/subjects/create" className={navItemClass}>
                <PlusCircle size={18} className="mr-3" />
                <span className="text-sm font-semibold">Add Subject</span>
              </NavLink>
              <NavLink onClick={closeSidebar} to="/admin/subjects/manage" className={navItemClass}>
                <Layers size={18} className="mr-3" />
                <span className="text-sm font-semibold">Manage Subjects</span>
              </NavLink>
            </div>
          )}
        </div>

        {/* Other Links */}
        <NavLink onClick={closeSidebar} to="/admin/students" className={navItemClass}>
          <Users size={22} className={collapsed ? "mx-auto" : "mr-4"} />
          {!collapsed && <span className="font-bold tracking-wide">Students</span>}
        </NavLink>

        <NavLink onClick={closeSidebar} to="/admin/results" className={navItemClass}>
          <FileText size={22} className={collapsed ? "mx-auto" : "mr-4"} />
          {!collapsed && <span className="font-bold tracking-wide">Results</span>}
        </NavLink>

        <NavLink onClick={closeSidebar} to="/admin/notices" className={navItemClass}>
          <Bell size={22} className={collapsed ? "mx-auto" : "mr-4"} />
          {!collapsed && <span className="font-bold tracking-wide">Notices</span>}
        </NavLink>

      </nav>
    </aside>
  );
};

export default Sidebar;