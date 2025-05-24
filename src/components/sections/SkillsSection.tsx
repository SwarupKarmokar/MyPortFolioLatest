import React from 'react';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

const SkillsSection: React.FC = () => {
  const skills: Skill[] = [
    // Frontend
    { name: 'React', level: 90, category: 'frontend' },
    { name: 'TypeScript', level: 85, category: 'frontend' },
    { name: 'JavaScript', level: 95, category: 'frontend' },
    { name: 'HTML & CSS', level: 90, category: 'frontend' },
    { name: 'Redux Tookit', level: 80, category: 'frontend' },
    { name: 'Next.js', level: 75, category: 'frontend' },
    
    // // Backend
    // { name: 'Node.js', level: 85, category: 'backend' },
    // { name: 'Express', level: 80, category: 'backend' },
    // { name: 'Python', level: 75, category: 'backend' },
    // { name: 'MongoDB', level: 70, category: 'backend' },
    // { name: 'PostgreSQL', level: 65, category: 'backend' },
    
    // Tools
    { name: 'Git', level: 90, category: 'tools' },
    { name: 'Asana', level: 90, category: 'tools' },
    // { name: 'Docker', level: 75, category: 'tools' },
    // { name: 'CI/CD', level: 70, category: 'tools' },
    
    // Other
    { name: 'Problem Solving', level: 95, category: 'other' },
    { name: 'Agile Methodology', level: 85, category: 'other' },
    // { name: 'Testing', level: 80, category: 'other' },
  ];

  const categories = [
    { id: 'frontend', name: 'Frontend' },
    // { id: 'backend', name: 'Backend' },
    { id: 'tools', name: 'Tools' },
    { id: 'other', name: 'Other' },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            As a full-stack developer, I've cultivated a diverse set of skills across
            various technologies, frameworks, and methodologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {categories.map((category) => (
            <div key={category.id} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-6 flex items-center">
                <span 
                  className="w-2 h-2 bg-teal-500 rounded-full mr-2"
                  aria-hidden="true"
                ></span>
                {category.name}
              </h3>
              
              <div className="space-y-5">
                {skills
                  .filter((skill) => skill.category === category.id)
                  .map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-slate-700 dark:text-slate-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-slate-500 dark:text-slate-400 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-teal-500 rounded-full transform transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`, 
                            animation: `growWidth 1.5s ease-out ${index * 0.1}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;