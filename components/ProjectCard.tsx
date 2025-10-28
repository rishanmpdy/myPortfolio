import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-glass-card rounded-xl overflow-hidden group transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full border border-border-color hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20"
         style={{ backdropFilter: 'blur(10px)' }}>
      <div className="overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-light-text mb-2">{project.title}</h3>
        <p className="text-medium-text mb-4 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex space-x-4">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-primary to-secondary text-white font-bold px-5 py-2 rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105">
              View Live
            </a>
          )}
          {project.caseStudyUrl && (
             <a href={project.caseStudyUrl} target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-primary text-primary font-semibold px-5 py-2 rounded-lg hover:bg-primary/20 transition-colors duration-300">
              View Prototype
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;