import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const scrollPosition = window.scrollY;
      const sectionTop = sectionRef.current.offsetTop;
      const opacity = Math.max(0, 1 - scrollPosition / (sectionTop + 400));
      
      if (sectionRef.current) {
        sectionRef.current.style.opacity = opacity.toString();
        sectionRef.current.style.transform = `translateY(${scrollPosition * 0.2}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      window.scrollTo({
        top: projectsSection.offsetTop - 100,
        behavior: 'smooth',
      });
    }
  };
  
  return (
    <section 
      id="home" 
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative pt-20 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-teal-50/30 to-transparent dark:from-teal-900/10 dark:to-transparent"></div>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="mb-6 flex items-center gap-2 opacity-90">
            <div className="w-8 h-[1px] bg-slate-400 dark:bg-slate-500"></div>
            <p className="text-slate-600 dark:text-slate-400 font-medium">Software Developer Engineer</p>
            <div className="w-8 h-[1px] bg-slate-400 dark:bg-slate-500"></div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-white mb-6 tracking-tight">
            Hi, I'm <span className="text-teal-500">Swarup Karmokar</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed max-w-2xl">
            Building innovative solutions at <span className="font-semibold text-slate-700 dark:text-white">Exact Space</span>.
            Passionate about creating efficient, elegant, and user-friendly digital experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button 
              onClick={scrollToProjects}
              className="px-8 py-3 rounded-lg bg-teal-500 hover:bg-teal-600 text-white font-medium transition-colors duration-300"
            >
              View Projects
            </button>
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-lg border border-slate-300 dark:border-slate-700 hover:border-teal-500 dark:hover:border-teal-500 text-slate-800 dark:text-white font-medium transition-colors duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-slate-500 dark:text-slate-400 mb-2">Scroll Down</span>
        <ArrowDown className="text-slate-500 dark:text-slate-400" size={20} />
      </div>
    </section>
  );
};

export default HeroSection;