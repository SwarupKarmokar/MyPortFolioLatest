import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  liveLink?: string;
}

const ProjectsSection: React.FC = () => {
  // Sample projects - you can replace with your own later
  const [projects] = useState<Project[]>([
    {
      id: 1,
      title: "Portfolio Site",
      description: "A comprehensive showcase of my skills, experience, and projects. Features modern design, smooth animations, and responsive layout to present my professional journey effectively.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      github: "https://github.com",
      liveLink: "https://example.com",
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with product catalog, shopping cart, user authentication, and payment integration. Features responsive design and performance optimization.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["React", "Redux", "Tailwind CSS", "Vite"], // Fixed typo: "Twilwind" -> "Tailwind"
      github: "https://github.com/SwarupKarmokar/BongoMartEcommerceSite",
      liveLink: "https://bongo-mart-ecommerce-site.vercel.app/",
    },
    {
      id: 3,
      title: "Pizzoto App",
      description: "A beautiful and intuitive pizza ordering application with customizable menu, real-time order tracking, and seamless user experience. Perfect for food delivery services.",
      image: "https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Next.js", "Tailwind CSS", "Redux"], // Improved tags
      github: "https://github.com/SwarupKarmokar/pizzoto-app",
      liveLink: "https://pizzoto-app.vercel.app/",
    },
    {
      id: 4,
      title: "Movie Discovery App",
      description: "A comprehensive movie database application similar to IMDb, featuring movie search, detailed information, ratings, reviews, and personalized recommendations.",
      image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["React", "Tailwind CSS", "Redux Toolkit", "OMDb API"], // More specific tags
      github: "https://github.com/SwarupKarmokar/movieAppReduxToolkit",
      liveLink: "https://search-reduxtoolkit-movieapp.netlify.app/",
    },
    {
      id: 5,
      title: "Ed-Tech Learning Platform",
      description: "A comprehensive online learning platform similar to Udemy, featuring course management, video streaming, progress tracking, and interactive learning experiences.",
      image: "https://images.pexels.com/photos/5427674/pexels-photo-5427674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["React", "Tailwind CSS", "Redux"], // More descriptive tags
      github: "https://github.com/SwarupKarmokar/EdTech",
      liveLink: "https://ed-tech-delta-ochre.vercel.app/",
    }
  ]);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            My Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Here are some of my recent projects. These showcase my skills and experience in
            building modern web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-50 dark:bg-slate-800/50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                      aria-label="View GitHub repository"
                    >
                      <Github size={20} />
                    </a>
                  )}

                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                      aria-label="View live project"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 dark:text-slate-400 italic">
            More projects coming soon...
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;