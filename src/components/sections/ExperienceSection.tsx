import React, { useState } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

const ExperienceSection: React.FC = () => {
  const [experiences] = useState<Experience[]>([
    {
      id: 1,
      title: "Software Developer Engineer",
      company: "Exact Space",
      location: "Bangalore, India / Remote",
      period: "Feb 2024 - Present",
      description: [
        "Developed innovative solutions for data analysis and visualization platforms.",
        "Collaborated with cross-functional teams to design and implement new features.",
        "Optimized application performance and infrastructure, resulting in 40% faster page load times.",
        "Implemented automated testing processes that improved code quality and reduced bugs by 30%."
      ]
    },
    {
      id: 2,
      title: "Web Developer Intern",
      company: "Exact Space",
      location: "Bangalore, India",
      period: "Aug 2023 - Feb 2024",
      description: [
        "Assisted in the development of web applications using JavaScript and React.",
        "Implemented UI components based on design specifications.",
        "Fixed bugs and improved application performance.",
        "Participated in daily stand-up meetings and sprint planning."
      ]
    },
    {
      id: 3,
      title: "Data Science Intern",
      company: "Brainalyst",
      location: "Delhi, India",
      period: "Sep 2021 - Dec 2021",
      description: [
        "Created various machine learning model (classification, regression)",
        "Build image processing deep learning model",
      ]
    },
  ]);

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Work Experience
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            My professional journey and the roles that have shaped my career in software development.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative space-y-8">
            <div className="absolute left-8 top-0 h-full w-0.5 bg-slate-200 dark:bg-slate-700"></div>

            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative flex items-start group">
                <div className="absolute left-8 w-4 h-4 bg-white dark:bg-slate-900 border-2 border-teal-500 rounded-full transform -translate-x-1/2 mt-1.5">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>

                <div className="ml-12 flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-white">
                      {exp.title}
                    </h3>
                    <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm mt-1 md:mt-0">
                      <Calendar size={14} className="mr-1" />
                      {exp.period}
                    </div>
                  </div>

                  <div className="flex items-center text-teal-600 dark:text-teal-400 mb-4">
                    <Briefcase size={16} className="mr-2" />
                    <span>{exp.company}, {exp.location}</span>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-6">
                    <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;