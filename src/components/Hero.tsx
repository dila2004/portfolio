import React from "react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white px-6 text-center overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-2xl animate-pulse"></div>
        <div className="absolute top-2/3 right-1/3 w-80 h-80 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mix-blend-multiply filter blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full mix-blend-multiply filter blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Particles Grid */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${10 + (i % 5) * 20}%`,
              top: `${10 + Math.floor(i / 5) * 25}%`,
              animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Geometric Decorative Elements */}
      <div className="absolute top-20 left-16 w-16 h-16 border-2 border-purple-400/30 rounded-lg rotate-45 animate-spin-slow"></div>
      <div className="absolute top-32 right-20 w-12 h-12 bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm rounded-full animate-float"></div>
      <div className="absolute bottom-24 left-12 w-8 h-8 bg-cyan-400/30 rounded-full animate-bounce delay-700"></div>
      <div className="absolute bottom-40 right-16 w-6 h-6 border border-white/20 rounded-full backdrop-blur-sm animate-pulse"></div>

      {/* Main Hero Content */}
      <div className="z-20 space-y-10 max-w-5xl mx-auto">
        
        {/* Greeting Badge */}
        <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 text-sm font-medium shadow-2xl animate-fade-in">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            Available for opportunities
          </span>
        </div>

        {/* Main Title */}
        <div className="space-y-6">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent leading-tight tracking-tight animate-title">
            Hi, I'm
            <br />
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Sachintha
            </span>
          </h1>
          
          {/* Animated Underline */}
          <div className="flex justify-center">
            <div className="h-2 w-32 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full animate-expand"></div>
          </div>
        </div>

        {/* Role Description */}
        <div className="space-y-4">
          <p className="text-xl md:text-2xl lg:text-3xl font-light text-gray-200 leading-relaxed animate-fade-up">
            Crafting digital experiences through
          </p>
          
          {/* Animated Role Tags */}
          <div className="flex flex-wrap justify-center gap-4 text-lg">
            {[
              { text: "Software Engineering", delay: "0ms", color: "from-purple-400 to-pink-400" },
              { text: "QA Automation", delay: "200ms", color: "from-cyan-400 to-blue-400" },
              { text: "Frontend Development", delay: "400ms", color: "from-yellow-400 to-red-400" }
            ].map((role, index) => (
              <span
                key={role.text}
                className={`px-6 py-3 bg-gradient-to-r ${role.color} bg-clip-text text-transparent font-semibold backdrop-blur-sm border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-default animate-role-tag`}
                style={{ animationDelay: role.delay }}
              >
                {role.text}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light animate-fade-up-delayed">
          Passionate about building robust, scalable applications and ensuring quality through comprehensive test automation. 
          Let's create something amazing together.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
          <a
            href="#projects"
            className="group relative px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-bold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-110 border border-purple-400/50 animate-cta-1"
          >
            <span className="relative z-10 flex items-center gap-3">
              See My Work
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          
          <a
            href="#contact"
            className="group px-10 py-4 bg-transparent border-2 border-white/20 rounded-full text-white font-semibold text-lg hover:bg-white/5 hover:border-white/40 transition-all duration-300 hover:scale-105 backdrop-blur-sm animate-cta-2"
          >
            <span className="flex items-center gap-3">
              Get In Touch
              <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-sm font-medium">Scroll to explore</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div> */}

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes spin-slow {
          0% { transform: rotate(45deg); }
          100% { transform: rotate(405deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(180deg); }
        }
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes title {
          0% { opacity: 0; transform: translateY(50px) scale(0.9); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes expand {
          0% { width: 0; }
          100% { width: 8rem; }
        }
        @keyframes fade-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-up-delayed {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes role-tag {
          0% { opacity: 0; transform: translateY(20px) scale(0.8); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes cta-1 {
          0% { opacity: 0; transform: translateY(30px) scale(0.9); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes cta-2 {
          0% { opacity: 0; transform: translateY(30px) scale(0.9); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-10px); }
        }
        
        .animate-spin-slow { animation: spin-slow 12s linear infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in 1s ease-out 0.5s both; }
        .animate-title { animation: title 1.2s ease-out 0.3s both; }
        .animate-expand { animation: expand 1.5s ease-out 1.5s both; }
        .animate-fade-up { animation: fade-up 1s ease-out 1.8s both; }
        .animate-fade-up-delayed { animation: fade-up-delayed 1s ease-out 2.2s both; }
        .animate-role-tag { animation: role-tag 0.8s ease-out both; }
        .animate-cta-1 { animation: cta-1 1s ease-out 2.8s both; }
        .animate-cta-2 { animation: cta-2 1s ease-out 3s both; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
      `}</style>
    </section>
  );
}