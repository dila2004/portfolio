import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-6 sm:px-10 lg:px-32 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center z-10">
        {/* Profile Image Section */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative group">
            {/* Glowing Ring */}
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
            
            {/* Image Container */}
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden backdrop-blur-sm bg-white/10 border border-white/20 shadow-2xl group-hover:scale-105 transition-transform duration-500">
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQE2fbV_Vdgmtg/profile-displayphoto-shrink_800_800/B56Za45bFxGUAg-/0/1746858791284?e=1755734400&v=beta&t=7ROIV4jr6oW81c-jdyQdrIneKdn-BnIIP6eJIVfofpM"
                alt="Sachintha"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
            </div>

            {/* Floating Status Badge */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm border border-white/20 animate-bounce">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                Available for hire
              </span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-8 text-center lg:text-left">
          {/* Title with Gradient Text */}
          <div className="space-y-4">
            <h2 className="text-5xl lg:text-7xl font-black bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent leading-tight">
              About Me
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mx-auto lg:mx-0"></div>
          </div>

          {/* Glass Card for Content */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl hover:bg-white/10 transition-all duration-500 group">
            <div className="space-y-6">
              <p className="text-xl lg:text-2xl leading-relaxed text-gray-100 font-light">
                I'm <span className="font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Sachintha Dilshan</span>, 
                a passionate Software Engineer with a strong focus on 
                <span className="font-semibold text-cyan-300"> QA Automation</span> and 
                <span className="font-semibold text-purple-300"> Frontend Development</span>.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                I love building clean, accessible web experiences and ensuring quality through test automation. 
                My mission is to create digital solutions that not only look amazing but work flawlessly.
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-3 pt-4">
                {['React', 'TypeScript', 'Tailwind CSS', 'Playwright', 'Cypress', 'Selenium'].map((tech, index) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full text-sm text-purple-200 hover:scale-110 transition-transform duration-300 cursor-default"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          
          </div>

          {/* CTA Button */}
          <div className="pt-6">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold text-lg shadow-xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 border border-purple-400/50">
              <span className="relative z-10">Let's Connect</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-purple-400/30 rounded-lg rotate-45 animate-spin-slow"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full backdrop-blur-sm animate-bounce delay-1000"></div>
      <div className="absolute top-1/2 left-20 w-3 h-3 bg-pink-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default About;