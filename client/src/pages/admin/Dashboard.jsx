import { Users, BookOpen, School, FileCheck, ArrowUpRight, TrendingUp } from "lucide-react";

const Dashboard = () => {
  const stats = [
    { 
      label: "Regd Users", 
      value: "6", 
      icon: <Users size={28} />, 
      color: "from-blue-600 to-indigo-600", 
      shadow: "shadow-indigo-200",
      trend: "+12% this month"
    },
    { 
      label: "Subjects Listed", 
      value: "7", 
      icon: <BookOpen size={28} />, 
      color: "from-rose-500 to-orange-500", 
      shadow: "shadow-rose-200",
      trend: "All active"
    },
    { 
      label: "Total Classes", 
      value: "8", 
      icon: <School size={28} />, 
      color: "from-amber-500 to-yellow-500", 
      shadow: "shadow-amber-200",
      trend: "4 Departments"
    },
    { 
      label: "Results Declared", 
      value: "5", 
      icon: <FileCheck size={28} />, 
      color: "from-emerald-500 to-teal-500", 
      shadow: "shadow-emerald-200",
      trend: "Live on portal"
    },
  ];

  return (
    <div className="space-y-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">System <span className="text-indigo-600">Overview</span></h1>
          <p className="text-slate-500 font-bold mt-1 uppercase text-xs tracking-widest">Real-time academic statistics</p>
        </div>
        <button className="flex items-center space-x-2 bg-white border-2 border-slate-100 px-6 py-3 rounded-2xl font-black text-slate-700 hover:border-indigo-600 hover:text-indigo-600 transition-all shadow-sm">
          <span>Generate Report</span>
          <ArrowUpRight size={18} />
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="group relative bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:scale-[1.03] transition-all duration-500 cursor-pointer overflow-hidden"
          >
            {/* Background Decorative Pattern */}
            <div className={`absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br ${stat.color} opacity-5 rounded-full group-hover:scale-150 transition-transform duration-700`}></div>

            <div className="relative z-10 space-y-6">
              <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-[1.25rem] flex items-center justify-center text-white shadow-lg ${stat.shadow}`}>
                {stat.icon}
              </div>

              <div>
                <p className="text-slate-400 font-black uppercase text-xs tracking-[0.15em] mb-1">
                  {stat.label}
                </p>
                <div className="flex items-baseline space-x-2">
                  <h3 className="text-5xl font-black text-slate-900 tracking-tighter">
                    {stat.value}
                  </h3>
                  <div className="flex items-center text-emerald-500 font-bold text-xs">
                    <TrendingUp size={14} className="mr-1" />
                    <span>{stat.trend}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Placeholder for future Charts/Recent Activity */}
      <div className="bg-slate-900 rounded-[3rem] p-12 text-center border-4 border-white shadow-2xl">
         <h2 className="text-2xl font-black text-white mb-2">Ready for deeper insights?</h2>
         <p className="text-slate-400 font-bold mb-6">More detailed analytics and activity logs will appear here as the system grows.</p>
         <div className="h-2 w-24 bg-indigo-500 mx-auto rounded-full"></div>
      </div>
    </div>
  );
};

export default Dashboard;