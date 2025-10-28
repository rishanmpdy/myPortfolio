import React from 'react';
import { FigmaIcon, PaletteIcon, BrainCircuitIcon, BriefcaseIcon, FileTextIcon, CpuIcon } from './icons';

const skills = [
  { name: 'UI/UX (Figma)', icon: <FigmaIcon className="w-8 h-8 text-primary" /> },
  { name: 'Graphic Designing (Photoshop & Illustrator)', icon: <PaletteIcon className="w-8 h-8 text-primary" /> },
  { name: 'Software Project Management & Planning', icon: <BriefcaseIcon className="w-8 h-8 text-primary" /> },
  { name: 'Project Documentation & Reporting', icon: <FileTextIcon className="w-8 h-8 text-primary" /> },
  { name: 'Technical Problem Solving', icon: <CpuIcon className="w-8 h-8 text-primary" /> },
  { name: 'Data Analysis & MS Office Suite', icon: <BrainCircuitIcon className="w-8 h-8 text-primary" /> },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-3">About Me</h2>
          <p className="text-lg text-medium-text">A brief summary of my professional background and skills.</p>
        </div>
        <div className="grid md:grid-cols-5 gap-16 items-start">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold text-white mb-6">Professional Summary</h3>
            <p className="text-medium-text mb-6 leading-relaxed">
              Project Manager with 9+ years of experience in software projects, technical operations, and team leadership. Expertise in project planning, documentation, and administration across technology and educational institutions. Skilled in delivering user-centered UI/UX designs, managing software development lifecycles, optimizing project workflows, and allocating and managing staff work to ensure efficient team performance and project delivery.
            </p>
          </div>
          <div className="md:col-span-3">
             <h3 className="text-3xl font-bold text-white mb-6">Key Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {skills.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center text-center p-4 bg-glass-card backdrop-blur-sm border border-border-color rounded-lg transition-transform duration-300 hover:scale-105 hover:border-primary">
                  <div className="flex-shrink-0 bg-primary/10 p-4 rounded-full mb-3">{skill.icon}</div>
                  <h4 className="font-semibold text-light-text text-md">{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;