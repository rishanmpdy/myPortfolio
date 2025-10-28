import React from 'react';
import { GithubIcon, LinkedinIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-bg border-t border-border-color py-8">
      <div className="container mx-auto px-6 text-center text-medium-text">
        <p>&copy; {new Date().getFullYear()} Muhammed Rishan K. All Rights Reserved.</p>
        <div className="flex items-center justify-center space-x-6 mt-4">
           <a href="https://www.linkedin.com/in/muhammed-rishan-k/" target="_blank" rel="noopener noreferrer" className="text-medium-text hover:text-primary transition-colors"><LinkedinIcon className="w-6 h-6"/></a>
           <a href="https://github.com/muhammedrishan" target="_blank" rel="noopener noreferrer" className="text-medium-text hover:text-primary transition-colors"><GithubIcon className="w-6 h-6"/></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;