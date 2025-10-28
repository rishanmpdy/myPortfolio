import React from 'react';

const experienceData = [
  {
    company: 'Infotura Technologies Pvt Ltd',
    location: 'Kochi, Kerala (Software Company)',
    role: 'Project Manager | UI/UX Designer | Project Planner',
    duration: 'Dec 2024 – Present',
    responsibilities: [
      'Lead software project planning and execution, ensuring timely delivery of milestones.',
      'Designed UI/UX for web and mobile applications with user-centered approach.',
      'Coordinated cross-functional teams to streamline design and implementation processes.',
    ],
  },
  {
    company: 'ACE Institutions',
    location: 'Manjeri, Kerala (Educational Institution)',
    role: 'Software Manager | Technical Head | Course Coordinator | Exam Evaluator | Project Manager',
    duration: 'Jan 2016 – Nov 2024',
    responsibilities: [
      'Directed technical operations, project evaluation, and online platform management.',
      'Managed student & staff software systems, class scheduling, and e-learning platforms.',
      'Supervised exam evaluation software to ensure accuracy and efficiency.',
      'Led institute-level projects including documentation, planning, and delivery.',
      'Designed graphics and handled digital promotions across social media channels.',
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-3">Professional Experience</h2>
        </div>
        
        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent"></div>
          
          <div className="space-y-12">
            {experienceData.map((job, index) => (
              <div key={index} className="relative flex items-start md:items-center w-full">
                {/* Desktop: Alternating layout */}
                <div className={`hidden md:flex w-1/2 ${index % 2 === 0 ? 'justify-end pr-8' : 'justify-start pl-8 order-2'}`}>
                  <div 
                    className="bg-glass-card p-6 rounded-lg border border-border-color transition-all duration-300 hover:border-primary/70 shadow-lg hover:shadow-primary/20 backdrop-blur-md w-full"
                    style={{ backdropFilter: 'blur(10px)' }}
                  >
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-semibold">{job.duration}</p>
                    <h3 className="text-2xl font-bold text-light-text mt-1">{job.company}</h3>
                    <p className="text-medium-text text-sm mb-4">{job.location}</p>
                    <h4 className="font-semibold text-light-text mb-2">{job.role}</h4>
                    <ul className="space-y-2 text-medium-text list-disc list-inside pl-2">
                      {job.responsibilities.map((task, i) => (
                        <li key={i}>{task}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Mobile: Single column layout */}
                <div className="md:hidden w-full pl-12">
                   <div 
                    className="bg-glass-card p-6 rounded-lg border border-border-color transition-all duration-300 hover:border-primary/70 shadow-lg hover:shadow-primary/20 backdrop-blur-md"
                    style={{ backdropFilter: 'blur(10px)' }}
                  >
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-semibold">{job.duration}</p>
                    <h3 className="text-2xl font-bold text-light-text mt-1">{job.company}</h3>
                    <p className="text-medium-text text-sm mb-4">{job.location}</p>
                    <h4 className="font-semibold text-light-text mb-2">{job.role}</h4>
                    <ul className="space-y-2 text-medium-text list-disc list-inside pl-2">
                      {job.responsibilities.map((task, i) => (
                        <li key={i}>{task}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute top-0 left-4 md:left-1/2 -translate-x-1/2 w-6 h-6 bg-dark-bg rounded-full z-10 border-2 border-primary flex items-center justify-center">
                      <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full shadow-[0_0_15px_theme(colors.primary)]"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;