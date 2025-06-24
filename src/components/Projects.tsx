import React from "react";

const projects = [
    {
        title: "Portfolio Website",
        description:
            "A modern personal portfolio built with React, Vite, and Tailwind CSS to showcase my work.",
        image: "https://files.selar.co/product-images/2024/products/Viclabulary/project-management-selar.co-65f60d5694847.jpg",
        demoLink: "https://yourportfolio.com",
        githubLink: "https://github.com/yourusername/portfolio",
        tech: ["React", "Vite", "Tailwind CSS"],
        status: "Live"
    },
    {
        title: "QA Automation Suite",
        description:
            "End-to-end test automation using Playwright and Cypress to ensure quality and performance.",
        image: "https://www.thirdstage-consulting.com/wp-content/uploads/2022/02/Introduction-to-Project-Management-and-Project-Manager-Roles.png",
        demoLink: "https://testdemo.com",
        githubLink: "https://github.com/yourusername/qa-suite",
        tech: ["Playwright", "Cypress", "TypeScript"],
        status: "Featured"
    },
    {
        title: "UI Component Library",
        description:
            "Reusable and accessible components built using React, Tailwind CSS, and Storybook.",
        image: "https://www.prioritymanagement.com.au/wp-content/uploads/2023/04/what-is-it-project-manager.jpg",
        demoLink: "https://uilibrarydemo.com",
        githubLink: "https://github.com/yourusername/ui-library",
        tech: ["React", "Storybook", "Tailwind"],
        status: "Open Source"
    },
];

const Projects = () => {
    return (
        <section id="projects" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-24 px-6 sm:px-10 lg:px-32 text-white overflow-hidden">
            
            {/* Animated Background Elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-1/6 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-2xl animate-pulse"></div>
                <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mix-blend-multiply filter blur-2xl animate-pulse delay-1000"></div>
                <div className="absolute top-2/3 left-1/2 w-72 h-72 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full mix-blend-multiply filter blur-2xl animate-pulse delay-500"></div>
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-white/30 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 2}s`
                        }}
                    />
                ))}
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-20 left-16 w-20 h-20 border border-purple-400/20 rounded-lg rotate-45 animate-spin-slow"></div>
            <div className="absolute bottom-32 right-20 w-16 h-16 bg-gradient-to-r from-pink-500/10 to-purple-500/10 backdrop-blur-sm rounded-full animate-bounce"></div>

            <div className="relative max-w-7xl mx-auto z-10">
                
                {/* Section Header */}
                <div className="text-center mb-20 space-y-6">
                    <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 text-sm font-medium shadow-2xl">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                        <span className="text-purple-300">Featured Work</span>
                    </div>
                    
                    <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent leading-tight">
                        Projects
                    </h2>
                    
                    <div className="h-1 w-24 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mx-auto"></div>
                    
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        A collection of projects showcasing my expertise in frontend development, 
                        test automation, and modern web technologies.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-purple-500/25"
                            style={{
                                animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both`
                            }}
                        >
                            {/* Status Badge */}
                            <div className="absolute top-4 right-4 z-20">
                                <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm border ${
                                    project.status === 'Live' ? 'bg-green-500/20 border-green-400/30 text-green-300' :
                                    project.status === 'Featured' ? 'bg-purple-500/20 border-purple-400/30 text-purple-300' :
                                    'bg-blue-500/20 border-blue-400/30 text-blue-300'
                                }`}>
                                    {project.status}
                                </span>
                            </div>

                            {/* Project Image */}
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="flex gap-3">
                                        <a
                                            href={project.demoLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="p-8 space-y-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full text-xs text-purple-200 font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-4 pt-4">
                                    <a
                                        href={project.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-center font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                                    >
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 border-2 border-white/20 hover:border-purple-400/50 hover:bg-white/5 text-white text-center font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                                    >
                                        Code
                                    </a>
                                </div>
                            </div>

                            {/* Glow Effect */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        </div>
                    ))}
                </div>

                {/* View More Section */}
                <div className="text-center mt-16">
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-8 py-4 text-white font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105 shadow-2xl"
                    >
                        <span>View All Projects</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.7; }
                    50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
                }
                @keyframes spin-slow {
                    0% { transform: rotate(45deg); }
                    100% { transform: rotate(405deg); }
                }
                @keyframes fadeInUp {
                    0% { opacity: 0; transform: translateY(60px) scale(0.9); }
                    100% { opacity: 1; transform: translateY(0) scale(1); }
                }
                .animate-spin-slow {
                    animation: spin-slow 15s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default Projects;