import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-royal-500/20 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-royal-500">Vinson.js</h3>
            <p className="text-gray-400 mt-2">Building digital experiences that matter.</p>
          </div>
          <div className="flex gap-6">
            <a href="https://github.com/vinson1906" className="text-gray-400 hover:text-royal-500 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/joseph-vinson-samuel-m-5638bb316" className="text-gray-400 hover:text-royal-500 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:vinson2217@gmail.com" className="text-gray-400 hover:text-royal-500 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="border-t border-royal-500/20 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Vinson.js. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;