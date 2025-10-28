import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from './icons';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-bg/80 backdrop-blur-lg border-b border-border-color' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-white tracking-wider flex items-center gap-2">
          <span className="bg-gradient-to-r from-primary to-secondary text-dark-bg text-xl font-bold w-9 h-9 flex items-center justify-center rounded-full">R</span>
          <span className="hidden sm:inline">Muhammed Rishan K</span>
        </a>
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-medium-text hover:text-light-text transition-colors duration-300 font-medium"
            >
              {link.label}
            </a>
          ))}
           <a
            href="#contact"
            className="bg-gradient-to-r from-primary to-secondary text-white font-bold px-5 py-2 rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary/30"
          >
            Hire Me
          </a>
        </nav>
        <button className="md:hidden text-light-text focus:outline-none z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-full bg-dark-bg/90 backdrop-blur-lg transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navLinks.map((link) => (
                <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="text-2xl text-light-text hover:text-primary transition-colors duration-300 font-semibold"
                >
                {link.label}
                </a>
            ))}
            <a
                href="#contact"
                onClick={handleLinkClick}
                className="bg-gradient-to-r from-primary to-secondary text-white font-bold px-8 py-3 rounded-lg text-xl"
            >
                Hire Me
            </a>
        </div>
      </div>
    </header>
  );
};

export default Header;