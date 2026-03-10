import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  BarChart3,
  Bot,
  Brain,
  Cloud,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Globe,
  Layers,
  Palette,
  Server,
  Terminal,
  Wrench,
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    color: "from-cyan-500 to-blue-500",
    skills: [
      { name: "Python", level: 95 },
      { name: "C++", level: 80 },
      { name: "JavaScript", level: 84 },
      { name: "TypeScript", level: 76 },
      { name: "SQL", level: 88 },
      { name: "Java", level: 68 },
    ],
  },
  {
    title: "AI, ML & Deep Learning",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "TensorFlow", level: 90 },
      { name: "PyTorch", level: 82 },
      { name: "scikit-learn", level: 92 },
      { name: "OpenCV", level: 86 },
      { name: "Deep Learning", level: 88 },
      { name: "NLP", level: 84 },
    ],
  },
  {
    title: "GenAI & LLM Engineering",
    icon: Bot,
    color: "from-fuchsia-500 to-rose-500",
    skills: [
      { name: "LLM Applications", level: 85 },
      { name: "RAG Pipelines", level: 84 },
      { name: "Prompt Engineering", level: 90 },
      { name: "Hugging Face", level: 80 },
      { name: "LangChain", level: 78 },
      { name: "Vector Databases", level: 76 },
    ],
  },
  {
    title: "Data Science & Analytics",
    icon: BarChart3,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Pandas", level: 95 },
      { name: "NumPy", level: 92 },
      { name: "Matplotlib", level: 88 },
      { name: "Seaborn", level: 84 },
      { name: "Tableau", level: 85 },
      { name: "Power BI", level: 85 },
    ],
  },
  {
    title: "Web & API Development",
    icon: Globe,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Django", level: 90 },
      { name: "Flask", level: 85 },
      { name: "React", level: 76 },
      { name: "FastAPI", level: 80 },
      { name: "HTML/CSS", level: 92 },
      { name: "REST APIs", level: 88 },
    ],
  },
  {
    title: "Cloud, DevOps & Deployment",
    icon: Cloud,
    color: "from-yellow-500 to-orange-500",
    skills: [
      { name: "AWS", level: 78 },
      { name: "Azure", level: 85 },
      { name: "Docker", level: 74 },
      { name: "Git/GitHub", level: 92 },
      { name: "Linux", level: 80 },
      { name: "CI/CD", level: 76 },
    ],
  },
  {
    title: "Databases & Data Platforms",
    icon: Database,
    color: "from-indigo-500 to-purple-500",
    skills: [
      { name: "MySQL", level: 90 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 80 },
      { name: "SQLite", level: 88 },
      { name: "Oracle", level: 75 },
      { name: "Firebase", level: 72 },
    ],
  },
];

const expertiseAreas = [
  {
    icon: Brain,
    title: "ML Engineering",
    desc: "Model building, training, tuning, and evaluation",
  },
  {
    icon: Bot,
    title: "GenAI Systems",
    desc: "LLMs, RAG workflows, and prompt-driven apps",
  },
  {
    icon: Cpu,
    title: "Computer Vision",
    desc: "Image pipelines, detection, recognition, and automation",
  },
  {
    icon: Server,
    title: "Backend & APIs",
    desc: "Scalable services, REST APIs, and business logic",
  },
  {
    icon: Palette,
    title: "UI/UX & Design",
    desc: "Responsive interfaces, flows, and polished user journeys",
  },
  {
    icon: Layers,
    title: "Full Stack Delivery",
    desc: "From idea to deployed product with clean execution",
  },
];

const toolGroups = [
  {
    title: "Development Tools",
    tools: ["VS Code", "Git", "GitHub", "Postman", "Jupyter", "Google Colab"],
  },
  {
    title: "AI Workflow",
    tools: [
      "Hugging Face",
      "LangChain",
      "RAG",
      "Prompt Engineering",
      "Model Evaluation",
      "Vector Search",
    ],
  },
  {
    title: "Design & Delivery",
    tools: ["Figma", "Canva", "Notion", "Docker", "Vercel", "Netlify"],
  },
];

const softSkills = [
  "Problem Solving",
  "Analytical Thinking",
  "Team Collaboration",
  "Communication",
  "Leadership",
  "Adaptability",
  "Time Management",
  "Agile Workflow",
  "Attention to Detail",
  "Ownership Mindset",
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Skills</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            My <span className="text-gradient">Tech Stack</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
            From programming fundamentals and data systems to GenAI, RAG, design tools, and
            deployment workflows, this is the stack I use to build complete solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16"
        >
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 + index * 0.05 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="p-4 rounded-2xl glass-card text-center group cursor-pointer hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 group-hover:glow-primary transition-all">
                <area.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                {area.title}
              </h4>
              <p className="text-xs text-muted-foreground mt-1">{area.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.08 }}
              className="relative p-6 rounded-2xl glass-card overflow-hidden group hover:border-primary/30 transition-all"
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color}`} />

              <div className="flex items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-10`}>
                    <category.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                </div>
                <span className="text-xs font-mono text-primary">{category.skills.length} skills</span>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center gap-3 mb-1.5">
                      <span className="text-sm font-medium text-foreground flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary/70" />
                        {skill.name}
                      </span>
                      <span className="text-xs font-mono text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-secondary/50 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1.1,
                          delay: categoryIndex * 0.08 + skillIndex * 0.06,
                          ease: "easeOut",
                        }}
                        className={`h-full rounded-full bg-gradient-to-r ${category.color} relative`}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          animate={{ x: ["-100%", "100%"] }}
                          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1.2 }}
                        />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mb-16 p-8 rounded-3xl glass-card"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <Wrench className="w-5 h-5 text-accent" />
            <h3 className="text-xl font-semibold">Tools & Workflow</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {toolGroups.map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.08 }}
                className="rounded-2xl border border-border/60 bg-background/30 p-5"
              >
                <div className="flex items-center gap-2 mb-4">
                  <GitBranch className="w-4 h-4 text-primary" />
                  <h4 className="font-semibold text-foreground">{group.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm text-foreground"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Terminal className="w-5 h-5 text-accent" />
            <h3 className="text-xl font-semibold">Soft Skills & Methodologies</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {softSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.03 }}
                whileHover={{ scale: 1.08, y: -3 }}
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-sm font-medium text-foreground hover:border-primary/50 hover:text-primary cursor-default transition-all"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
