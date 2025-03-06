import {
  Database,
  FileCode2,
  Github,
  Globe,
  Layout,
  Layers,
  Palette,
  Server,
  Shapes,
  Terminal,
  Wind,
} from "lucide-react"

const skills = [
  {
    name: "HTML",
    icon: <Globe className="h-8 w-8" />,
    color: "group-hover:text-[#E34F26]",
  },
  {
    name: "CSS",
    icon: <Palette className="h-8 w-8" />,
    color: "group-hover:text-[#1572B6]",
  },
  {
    name: "JavaScript",
    icon: <FileCode2 className="h-8 w-8" />,
    color: "group-hover:text-[#F7DF1E]",
  },
  {
    name: "React.js",
    icon: <Shapes className="h-8 w-8" />,
    color: "group-hover:text-[#61DAFB]",
  },
  {
    name: "Next.js",
    icon: <Layout className="h-8 w-8" />,
    color: "group-hover:text-white",
  },
  {
    name: "Node.js",
    icon: <Server className="h-8 w-8" />,
    color: "group-hover:text-[#339933]",
  },
  {
    name: "Express.js",
    icon: <Wind className="h-8 w-8" />,
    color: "group-hover:text-[#000000]",
  },
  {
    name: "MongoDB",
    icon: <Database className="h-8 w-8" />,
    color: "group-hover:text-[#47A248]",
  },
  {
    name: "MySQL",
    icon: <Database className="h-8 w-8" />,
    color: "group-hover:text-[#4479A1]",
  },
  {
    name: "Git",
    icon: <Terminal className="h-8 w-8" />,
    color: "group-hover:text-[#F05032]",
  },
  {
    name: "GitHub",
    icon: <Github className="h-8 w-8" />,
    color: "group-hover:text-white",
  },
  {
    name: "Tailwind CSS",
    icon: <Layers className="h-8 w-8" />,
    color: "group-hover:text-[#38B2AC]",
  },
]

export default function Skills() {
  return (
    <section id="skills" className="w-full bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div   className="text-center mb-12 ">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my technical skills and areas of expertise in web development and software engineering.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group relative bg-zinc-900 rounded-xl p-6 hover:bg-zinc-800 transition-all duration-300 ease-in-out hover:scale-105"
            >
              <div className="flex flex-col items-center justify-center space-y-2">
                <div className={`transition-colors duration-300 ${skill.color}`}>{skill.icon}</div>
                <h3 className="text-sm font-medium text-gray-300 group-hover:text-white">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

