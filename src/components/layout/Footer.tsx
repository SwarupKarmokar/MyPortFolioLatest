import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 dark:bg-slate-900 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="font-bold text-xl tracking-tight mb-2">
              <span className="text-slate-800 dark:text-white">Swarup</span>
              <span className="text-teal-500">.</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm max-w-md">
              Software Developer Engineer at Exact Space, passionate about creating efficient and elegant solutions.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-500 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-500 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-500 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="mailto:contact@example.com" 
              className="text-slate-600 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-500 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-slate-200 dark:border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 dark:text-slate-500 text-sm mb-4 md:mb-0">
            © {currentYear} Swarup Karmokar. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-500 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;