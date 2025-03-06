import React from 'react';
import { Code2, Palette, Database } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-royal-500">About Me</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-black/40 p-6 rounded-lg border border-royal-500/20 hover:border-royal-500/40 transition-colors">
            <Code2 className="w-12 h-12 text-royal-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">Frontend Development</h3>
            <p className="text-gray-400">
              Experienced in building responsive web applications using React.js, Next.js,
              and modern CSS frameworks like Tailwind CSS.
            </p>
          </div>
          <div className="bg-black/40 p-6 rounded-lg border border-royal-500/20 hover:border-royal-500/40 transition-colors">
            <Database className="w-12 h-12 text-royal-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">Backend Development</h3>
            <p className="text-gray-400">
              Proficient in Node.js and Express.js for building scalable 
              applications and RESTful APIs with MySQL Sequelize integration.
            </p>
          </div>
          <div className="bg-black/40 p-6 rounded-lg border border-royal-500/20 hover:border-royal-500/40 transition-colors">
            <Palette className="w-12 h-12 text-royal-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">UI/UX Design</h3>
            <p className="text-gray-400">
              Skilled in creating user-centered designs using Figma, focusing on
              intuitive interfaces and seamless user experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;