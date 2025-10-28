import React from 'react';
import { GithubIcon, LinkedinIcon, AtSignIcon, PhoneIcon } from './icons';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-dark-bg scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-3">Let's Connect</h2>
          <p className="text-lg text-medium-text max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach out.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center bg-glass-card border border-border-color p-8 md:p-12 rounded-2xl" style={{ backdropFilter: 'blur(10px)' }}>
            <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold text-white mb-4">Get in Touch</h3>
                <p className="text-medium-text mb-8">I'm currently available for freelance projects and full-time opportunities. Let's build something amazing together.</p>
                
                <div className="space-y-4 text-medium-text">
                   <div className="flex items-center justify-center md:justify-start space-x-4">
                        <AtSignIcon className="w-6 h-6 text-primary"/>
                        <a href="mailto:rishanmpdy@gmail.com" className="hover:text-primary transition-colors">rishanmpdy@gmail.com</a>
                   </div>
                    <div className="flex items-center justify-center md:justify-start space-x-4">
                        <PhoneIcon className="w-6 h-6 text-primary"/>
                        <span>+91 9656148703</span>
                   </div>
                </div>
            </div>
            <div className="w-full text-center">
                <p className="text-light-text mb-4 font-semibold">Find me on social media:</p>
                <div className="flex items-center justify-center space-x-6">
                   <a href="https://www.linkedin.com/in/muhammed-rishan-k/" target="_blank" rel="noopener noreferrer" className="text-medium-text hover:text-primary transition-colors duration-300 transform hover:scale-110"><LinkedinIcon className="w-10 h-10"/></a>
                   <a href="https://github.com/muhammedrishan" target="_blank" rel="noopener noreferrer" className="text-medium-text hover:text-primary transition-colors duration-300 transform hover:scale-110"><GithubIcon className="w-10 h-10"/></a>
                </div>
                 <a href="mailto:rishanmpdy@gmail.com" className="mt-8 inline-block w-full max-w-xs bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg shadow-primary/40 hover:scale-105">
                    Email Me
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;