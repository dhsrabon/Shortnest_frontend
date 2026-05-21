"use client";

import Link from "next/link";
import { motion } from "framer-motion"; 

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-[70vh] lg:min-h-[75vh] bg-white w-full overflow-hidden max-w-[1600px] mx-auto">
      
      {/* 🟢 Left Side: Content Area */}
      <div className="w-full lg:w-[45%] flex flex-col justify-center px-8 sm:px-14 lg:pl-24 py-12 lg:py-0 z-10">
        
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="mb-5 inline-flex items-center"
        >
          <span className="w-8 h-[2px] bg-blue-600 mr-3"></span>
          <span className="text-blue-600 font-bold tracking-widest uppercase text-xs sm:text-sm">
            SportNest Platform
          </span>
        </motion.div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.15] mb-5 tracking-tight">
          
          <motion.span 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.2 }}
            className="block"
          >
            Find Your
          </motion.span>
          
          <motion.span 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.4 }}
            className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 pb-1"
          >
            Perfect Game
          </motion.span>
        </h1>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-base sm:text-lg text-gray-600 mb-8 max-w-[90%] lg:max-w-md leading-relaxed"
        >
          Discover top-rated football turfs, badminton courts, and swimming pools near you. Skip the hassle of offline calls and secure your spot instantly.
        </motion.p>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link 
            href="/facilities" 
            className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 w-fit"
          >
            Explore Facilities
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </Link>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-10 flex items-center gap-3 text-xs sm:text-sm text-gray-500 font-medium"
        >
          <div className="flex -space-x-2">
            <img className="w-7 h-7 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=1" alt="User" />
            <img className="w-7 h-7 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=2" alt="User" />
            <img className="w-7 h-7 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=3" alt="User" />
          </div>
          <p>Join 10,000+ players today</p>
        </motion.div>
      </div>

      {/* 🟢 Right Side: Image Area */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-[55%] relative min-h-[350px] lg:min-h-full bg-gray-100 overflow-hidden rounded-bl-[40px] lg:rounded-bl-[80px]"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1500&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent hidden lg:block"></div>
        </div>
        
        {/* Floating Badge */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 1.2 }}
          className="absolute bottom-6 right-6 lg:bottom-10 lg:right-10 bg-white/95 backdrop-blur-sm p-3.5 rounded-xl shadow-2xl border border-white/50 hidden md:flex items-center gap-3 animate-bounce hover:animate-none cursor-default transition-all duration-300"
        >
          <div className="bg-green-100 p-2.5 rounded-full text-xl">🏆</div>
          <div>
            <p className="text-gray-900 font-extrabold text-sm">Premium Turfs</p>
            <p className="text-gray-500 text-xs">Available Now</p>
          </div>
        </motion.div>
      </motion.div>

    </div>
  );
};

export default Banner;