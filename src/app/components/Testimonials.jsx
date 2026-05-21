import { FiMessageSquare } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  const reviews = [
    { 
      name: "Rahim Uddin", 
      role: "Football Enthusiast", 
      text: "SportNest made finding a turf for our weekend matches incredibly easy. The real-time availability feature is a game changer. Highly recommended platform!",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5
    },
    { 
      name: "Sara Islam", 
      role: "Amateur Swimmer", 
      text: "I love how I can see real-time availability. Booking a swimming lane has never been this smooth. The user interface is just gorgeous!",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5
    },
    { 
      name: "Tariq Hasan", 
      role: "Cricket Captain", 
      text: "Finding a proper pitch for our local tournament used to be a nightmare. Thanks to SportNest, we booked our venue in under two minutes.",
      image: "https://randomuser.me/api/portraits/men/86.jpg",
      rating: 4
    },
  ];

  return (
    <section className="py-24 bg-[#ffffff] font-sans relative overflow-hidden">
      
      {/* Background Decorative Gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-sm font-bold tracking-widest text-[#3b82f6] uppercase flex items-center gap-2 justify-center md:justify-start mb-4">
              <FiMessageSquare className="text-lg" />
              Community Reviews
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              What Our Athletes Say
            </h2>
          </div>
          <div className="text-gray-400 hidden md:block">
            Trusted by <span className="text-white font-bold">10,000+</span> sports lovers.
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="group bg-[#1e293b] border border-gray-800 rounded-3xl p-8 hover:bg-[#1e293b]/80 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(59,130,246,0.1)] flex flex-col"
            >
              
              {/* Top Section: Quote Icon & Rating */}
              <div className="flex justify-between items-start mb-6">
                <svg className="w-10 h-10 bg-cyan-50 group-hover:text-blue-500/20 transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                
                {/* 5-Star Rating */}
                <div className="flex gap-1 text-[#f59e0b]">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < review.rating ? "text-[#f59e0b]" : "text-gray-600"} />
                  ))}
                </div>
              </div>

              {/* Review Text */}
              <p className="text-gray-300 leading-relaxed mb-8 flex-grow text-lg">
                "{review.text}"
              </p>

              {/* Bottom Section: User Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-700/50">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-transparent group-hover:border-blue-500 transition-all duration-300"
                />
                <div>
                  <h4 className="font-bold text-white text-lg">{review.name}</h4>
                  <p className="text-sm text-blue-400 font-medium">{review.role}</p>
                </div>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;