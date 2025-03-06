import React from 'react';
import { Github, Mail, Linkedin } from 'lucide-react';
import Typewriter from 'typewriter-effect';
import vinson from '../assets/vinson.png'
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white max-md:text-center">
              Hi, I'm{' '}
              <span className="text-royal-500">
                <Typewriter
                  options={{
                    strings: ['Joseph Vinson Samuel', 'a Fullstack Developer', 'a Designer'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-400 mb-6">
              Fullstack Developer & UI/UX Designer
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              I craft beautiful, user-friendly applications with modern technologies.
              in React , Node.js, and responsive design.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className="bg-royal-600 text-white px-6 py-3 rounded-lg hover:bg-violet-700 transition-colors border border-1 border-indigo-400"
              >
                Get in Touch
              </a>
              <div className="flex gap-4">
                <Link to="https://github.com/vinson1906" className="text-gray-400 hover:text-violet-500 transition-colors">
                  <Github size={24} />
                </Link>
                <Link to="https://www.linkedin.com/in/joseph-vinson-samuel-m-5638bb316" className="text-gray-400 hover:text-violet-500 transition-colors">
                  <Linkedin size={24} />
                </Link>
                <Link to="mailto:vinson2217@gmail.com" className="text-gray-400 hover:text-violet-500 transition-colors">
                  <Mail size={24} />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <Link to='https://www.linkedin.com/in/joseph-vinson-samuel-m-5638bb316'>
              <img
                src={vinson}
                alt="Developer"
                className="rounded-full w-64 h-64 md:w-96 md:h-96 object-cover shadow-lg ring-2 ring-violet-500/50 hover:ring-white bg-black transition-colors  from-black to-violet-700  hover:bg-violet-700 hover:cursor-pointer "
              />
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;