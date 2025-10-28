import React from 'react';
import { Project } from '../types';
import ProjectCard from './ProjectCard';

const projectsData: Project[] = [
  {
    id: 1,
    title: 'Ariv: Educational App',
    category: 'UI/UX Design',
    description: 'A comprehensive UI/UX design for a mobile educational application, focusing on intuitive learning and user engagement.',
    imageUrl: 'https://images.unsplash.com/photo-1600132806332-2693e8ba34f3?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600&h=400',
    tags: ['UI/UX', 'Figma', 'Mobile App', 'EdTech'],
    caseStudyUrl: 'https://www.figma.com/proto/ZjUYg1x12532QUwCSmlmP3/Ariv?node-id=183-2490&t=fGtTY2FssnCPsgIZ-1',
  },
  {
    id: 2,
    title: 'Slip: Billing Software',
    category: 'UI/UX Design',
    description: 'A clean and efficient interface for a billing software, designed to streamline invoicing and financial tracking for businesses.',
    imageUrl: 'https://images.unsplash.com/photo-1603992087227-312c5b351752?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600&h=400',
    tags: ['UI/UX', 'Figma', 'Web App', 'Billing Software'],
    caseStudyUrl: 'https://www.figma.com/proto/QBdcOrpNMaTb5IPAs3HwkY/Slip?node-id=432-782&t=99tFDsLUczw6aUvM-1',
  },
   {
    id: 3,
    title: 'Ariv: App Onboarding',
    category: 'UI/UX Design',
    description: 'Specialized prototype for the "Ariv" app\'s onboarding flow, ensuring a smooth and welcoming user introduction.',
    imageUrl: 'https://images.unsplash.com/photo-1589149024922-3288a7f6c6b3?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600&h=400',
    tags: ['UI/UX', 'Figma', 'Mobile App', 'Onboarding'],
    caseStudyUrl: 'https://www.figma.com/proto/ZjUYg1x12532QUwCSmlmP3/Ariv?node-id=730-423&t=fGtTY2FssnCPsgIZ-1',
  },
  {
    id: 4,
    title: 'Uturn: Used Car Website',
    category: 'UI/UX Design',
    description: 'Front-page and selling-page designs for a used car vehicle website, focusing on a strong visual appeal and clear calls-to-action.',
    imageUrl: 'https://cdn.dribbble.com/userupload/12398616/file/original-b7746433383038a8e3f364505b8a011a.png?resize=1024x768',
    tags: ['UI/UX', 'Figma', 'Web Design', 'Automotive'],
    caseStudyUrl: 'https://www.figma.com/proto/V63obHYL7oxtcI4zQjYrRu/Overall?page-id=0%3A1&node-id=1025-194&viewport=151%2C117%2C0.5&t=DzwUsTc8Thtyrywa-1&scaling=scale-down&content-scaling=fixed',
  },
  {
    id: 5,
    title: 'Uturn: Dealership Management App',
    category: 'UI/UX Design',
    description: 'A mobile application designed for car dealerships to manage inventory, sales, and customer relations efficiently.',
    imageUrl: 'https://images.unsplash.com/photo-1633464196723-5c3702588825?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600&h=400',
    tags: ['UI/UX', 'Figma', 'Mobile App', 'Dealership Software'],
    caseStudyUrl: 'https://www.figma.com/proto/0T15gVJ71eGoWSjJ43JHWx/Uturn?node-id=1222-484&t=dY8CqGX1JWHJkmrZ-1',
  },
    {
    id: 6,
    title: 'Uturn: Used Cars Public App',
    category: 'UI/UX Design',
    description: 'The public-facing mobile app for the "Uturn" platform, allowing users to browse, search, and inquire about used cars.',
    imageUrl: 'https://images.unsplash.com/photo-1593348083895-77b9415f33c3?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600&h=400',
    tags: ['UI/UX', 'Figma', 'Mobile App', 'Automotive'],
    caseStudyUrl: 'https://www.figma.com/proto/0T15gVJ71eGoWSjJ43JHWx/Uturn?node-id=2236-315&t=dY8CqGX1JWHJkmrZ-1',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-3">My Portfolio</h2>
          <p className="text-lg text-medium-text">A selection of my recent UI/UX design projects.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project) => (
             <div key={project.id}>
                <ProjectCard project={project} />
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;