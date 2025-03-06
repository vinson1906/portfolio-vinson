import React from 'react';
import {
  Braces,
  Code2,
  Database,
  FileJson,
  Layout,
  Palette,
  Server,
  Terminal,
  Figma
} from 'lucide-react';



const SkillIcon = ({ name, className = "" }) => {
  const iconMap= {
    'React.js': <Code2 className={`${className} animate-pulse`} />,
    'JavaScript': <FileJson className={`${className} animate-bounce`} />,
    'Tailwind CSS': <Layout className={`${className} animate-pulse`} />,
    'Next.js': <Terminal className={`${className} animate-pulse`} />,
    'Node.js': <Server className={`${className} animate-bounce`} />,
    'Express.js': <Braces className={`${className} animate-pulse`} />,
    'MongoDB': <Database className={`${className} animate-bounce`} />,
    'Figma': <Figma className={`${className} animate-pulse`} />,
    'Git & GitHub': <Terminal className={`${className} animate-bounce`} />,
  };

  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-royal-600 to-royal-400 rounded-full opacity-75 group-hover:opacity-100 transition-opacity duration-300 blur" />
      <div className="relative bg-black rounded-full p-2">
        {iconMap[name] || <Palette className={className} />}
      </div>
    </div>
  );
};

export default SkillIcon;