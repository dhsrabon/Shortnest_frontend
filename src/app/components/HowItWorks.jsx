import { FiSearch, FiCalendar, FiPlayCircle } from "react-icons/fi";

const HowItWorks = () => {
  const steps = [
    { 
      icon: <FiSearch className="text-4xl text-[#3b82f6] group-hover:scale-110 transition-transform duration-500" />, 
      title: "Find Facility", 
      desc: "Search for your preferred sports facility near your location effortlessly.",
      stepNum: "01",
      gradientClass: "from-blue-500 to-cyan-400",
      bgSoft: "bg-blue-50/50",
      glowClass: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]",
      borderHover: "group-hover:border-blue-200"
    },
    { 
      icon: <FiCalendar className="text-4xl text-[#10b981] group-hover:scale-110 transition-transform duration-500" />, 
      title: "Book a Slot", 
      desc: "Choose an available date and time slot that perfectly fits your schedule.",
      stepNum: "02",
      gradientClass: "from-emerald-500 to-teal-400",
      bgSoft: "bg-emerald-50/50",
      glowClass: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]",
      borderHover: "group-hover:border-emerald-200"
    },
    { 
      icon: <FiPlayCircle className="text-4xl text-[#f97316] group-hover:scale-110 transition-transform duration-500" />, 
      title: "Go and Play", 
      desc: "Arrive at the venue, show your booking confirmation, and enjoy the game.",
      stepNum: "03",
      gradientClass: "from-orange-500 to-red-400",
      bgSoft: "bg-orange-50/50",
      glowClass: "group-hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]",
      borderHover: "group-hover:border-orange-200"
    },
  ];

  return (
    <section className="py-24 bg-[#f8fafc] font-sans relative overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-center">
          <span className="text-sm font-bold tracking-widest text-[#2563eb] uppercase bg-blue-100 px-4 py-1.5 rounded-full mb-4 inline-block">
            Simple Process
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0f172a] mb-5 tracking-tight mt-3">
            How It Works
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Booking your favorite sports venue is now easier than ever. Just follow these three simple steps and get ready to play.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
          
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 -translate-y-1/2 z-0"></div>

          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`group relative flex flex-col items-center p-10 bg-white border border-gray-100 rounded-[2.5rem] shadow-lg transition-all duration-500 hover:-translate-y-3 z-10 ${step.glowClass} ${step.borderHover}`}
            >
              {/* Top Gradient Line on Hover */}
              <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-0 h-1.5 bg-gradient-to-r ${step.gradientClass} rounded-t-full transition-all duration-500 group-hover:w-1/2`}></div>

              {/* Icon Container */}
              <div className={`relative w-24 h-24 rounded-full flex items-center justify-center mb-8 ${step.bgSoft} border border-white shadow-inner transition-all duration-500 group-hover:bg-white`}>
                {step.icon}
                
                {/* Step Number Badge */}
                <div className={`absolute -bottom-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center font-black text-white text-sm bg-gradient-to-br ${step.gradientClass} border-4 border-white shadow-md`}>
                  {step.stepNum}
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-2xl font-extrabold text-[#0f172a] mb-4 group-hover:text-gray-800 transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-center font-medium">
                {step.desc}
              </p>
              
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default HowItWorks;