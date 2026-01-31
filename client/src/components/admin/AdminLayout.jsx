import { useState } from "react";
import Sidebar from "./Sidebare"; // Make sure the filename matches (Sidebare or Sidebar)
import AdminHeader from "./AdminHeader";
import AdminFooter from "./AdminFooter";

const AdminLayout = ({ children }) => {
  // open: Mobile menu toggle | collapsed: Desktop sidebar width toggle
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#F8FAFC] font-sans antialiased selection:bg-indigo-100 selection:text-indigo-700">
      
      {/* Overlay for Mobile Sidebar */}
      {open && (
        <div 
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Sidebar - Passing both state toggles */}
      <Sidebar 
        open={open} 
        setOpen={setOpen} 
        collapsed={collapsed} 
        setCollapsed={setCollapsed} 
      />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 min-w-0 transition-all duration-300">
        
        {/* Header */}
        <AdminHeader setOpen={setOpen} />

        {/* Main Viewport */}
        <main className="flex-1 p-6 md:p-10 lg:p-12 max-w-[1600px] w-full mx-auto">
          {/* Page Transition Wrapper */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            {children}
          </div>
        </main>

        {/* Footer */}
        <AdminFooter />
      </div>

    </div>
  );
};

export default AdminLayout;