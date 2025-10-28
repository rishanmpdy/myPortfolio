import React from 'react';
import { GithubIcon, LinkedinIcon } from './icons';

const Hero: React.FC = () => {
  return (
    <section id="home" className="container mx-auto px-6 py-24 md:py-32 flex flex-col items-center justify-center text-center animate-fade-in-up">
      <div className="relative mb-8">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur-xl opacity-60 animate-pulse"></div>
        <img 
            src="https://avatars.githubusercontent.com/u/234443453?v=4&size=2000" 
            alt="Muhammed Rishan K Portrait" 
            className="relative w-48 h-48 md:w-56 md:h-56 object-cover rounded-full border-4 border-black shadow-2xl"
        />
      </div>
      
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4">
        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Muhammed Rishan K</span>
      </h1>
      <p className="text-xl md:text-2xl font-semibold text-medium-text mb-6 max-w-3xl mx-auto">
        UI/UX Designer & Project Manager
      </p>
      <p className="text-lg text-medium-text/80 mb-8 max-w-2xl mx-auto">
        I design and build user-centered digital experiences that are intuitive, engaging, and effective.
      </p>

      <div className="flex justify-center items-center space-x-6 mb-8">
        <a href="https://www.linkedin.com/in/muhammed-rishan-k/" target="_blank" rel="noopener noreferrer" className="text-medium-text hover:text-primary transition-colors duration-300 transform hover:scale-110">
          <LinkedinIcon className="w-8 h-8"/>
        </a>
        <a href="https://github.com/muhammedrishan" target="_blank" rel="noopener noreferrer" className="text-medium-text hover:text-primary transition-colors duration-300 transform hover:scale-110">
          <GithubIcon className="w-8 h-8"/>
        </a>
      </div>

      <a
        href="#projects"
        className="bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary/40"
      >
        Explore My Work
      </a>
    </section>
  );
};

export default Hero;