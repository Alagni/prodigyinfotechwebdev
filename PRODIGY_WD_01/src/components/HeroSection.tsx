
import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/10 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 3 + 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Interactive
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Navigation
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-in" style={{animationDelay: '0.3s'}}>
          Experience smooth scroll effects and beautiful hover animations
        </p>
        <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold text-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl animate-fade-in" style={{animationDelay: '0.6s'}}>
          Scroll to Explore
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
