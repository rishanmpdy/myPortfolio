import React from 'react';

const educationData = [
    {
        degree: 'B.Com - Computer Application',
        year: '2016 – 2018',
    },
    {
        degree: 'Certificate in Word Processing & Data Entry (CWPDE)',
        institution: 'Kerala State Rutronix',
        year: '2017',
    },
    {
        degree: 'Advanced Diploma in Graphic & Information Technology',
        year: '2012',
    }
]

const languages = ['English', 'Malayalam', 'Tamil'];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-3">Education & Languages</h2>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
                <h3 className="text-3xl font-bold text-white mb-6 text-center md:text-left">Education</h3>
                <div className="space-y-6">
                    {educationData.map((edu, index) => (
                        <div key={index} className="bg-glass-card p-6 rounded-xl border border-border-color transition-all duration-300 hover:border-primary/50" style={{ backdropFilter: 'blur(10px)' }}>
                            <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-semibold">{edu.year}</p>
                            <h4 className="text-xl font-bold text-light-text mt-1">{edu.degree}</h4>
                            {edu.institution && <p className="text-medium-text text-sm mt-1">{edu.institution}</p>}
                        </div>
                    ))}
                </div>
            </div>
             <div>
                <h3 className="text-3xl font-bold text-white mb-6 text-center md:text-left">Languages</h3>
                <div className="bg-glass-card p-6 rounded-xl border border-border-color" style={{ backdropFilter: 'blur(10px)' }}>
                    <ul className="space-y-4">
                        {languages.map(lang => (
                             <li key={lang} className="text-light-text font-medium text-lg flex items-center">
                                <span className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full mr-4 shadow-[0_0_10px_theme(colors.primary)]"></span>
                                {lang}
                             </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Education;