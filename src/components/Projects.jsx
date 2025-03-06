import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import Aos from 'aos';


const Projects = () => {
  const projects = [
    {
      title: 'Nikavi Tronics',
      description: 'An e-commerce platform for electronic products with modern UI and seamless shopping experience.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
      tech: ['Next.js', 'MySQL', 'Tailwind CSS'],
      liveUrl: 'nikavitronics.in',
    
    },
    {
      title: 'The Color Wardrobe',
      description: 'An e-commerce platform for electronic products with modern UI and seamless shopping experience.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ9JbPooRu1OXFi6vA-NP4Ph5hYjVoinzEQA&s',
      tech: ['Next.js', 'MySQL', 'Tailwind CSS','Node.js','express','Typescript'],
      liveUrl: '',
    
    },
    {
      title: 'Vanalikaa',
      description: 'A comprehensive web application with advanced features and intuitive user interface.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      tech: ['Next.js', 'Tailwind CSS'],
      liveUrl: 'https://www.vanalikaahomeopathy.in/',
     
    },
    {
      title: 'DrPiles',
      description: 'Healthcare platform featuring appointment scheduling and patient management system.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'Mantine UI'],
      liveUrl: 'https://www.drpiles.in/',
    
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-royal-500">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div data-aos="flip-left" key={project.title} className="bg-black/40 rounded-lg overflow-hidden border border-royal-500/20">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-royal-500/10 text-royal-400 px-3 py-1 rounded-full text-sm border border-royal-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Link
                    to={project.liveUrl}
                    className="flex items-center gap-2 text-royal-400 hover:text-royal-300"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </Link>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;