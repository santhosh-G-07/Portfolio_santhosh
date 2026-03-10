import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Briefcase,
  Calendar,
  ChevronDown,
  ChevronUp,
  GraduationCap,
  MapPin,
  Rocket,
} from "lucide-react";

type ExperienceItem = {
  type: "work" | "freelance" | "entrepreneurship" | "education";
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  gradient: string;
  fullRow?: boolean;
};

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const experiences: ExperienceItem[] = [
    {
      type: "entrepreneurship",
      title: "Founder & Tech Consultant",
      company: "SpydX",
      location: "India",
      period: "Dec 2024 - Present",
      description: [
        "Developed software applications, web platforms, and machine learning solutions for diverse client needs",
    "Provided career branding services including ATS-optimized resumes, LinkedIn profile optimization, and portfolio development",
    "Successfully delivered 100+ client projects across development, design, and consulting",
    "Designed professional logos, personal portfolios, and digital identities for individuals and businesses"
      ],
      gradient: "from-green-500 to-emerald-500",
      fullRow: true,
    },
    {
      type: "work",
      title: "Python Full Stack Developer Trainee",
      company: "QSPIDERS / Campus Connect",
      location: "Bengaluru, India",
      period: "Feb 2025 - Jul 2025",
      description: [
        "Developed and deployed full-stack web applications using Python, Flask, HTML, CSS, and JavaScript",
        "Integrated backend logic with frontend interfaces to create responsive and scalable solutions",
        "Collaborated in an Agile team to build and test real-time modules for client-based projects",
        "Extensive knowledge in SQL queries, CRUD operations, joins, sub-queries, and functions",
      ],
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      type: "work",
      title: "Machine Learning Intern",
      company: "VCodez",
      location: "Chennai, India",
      period: "Feb 2025 - May 2025",
      description: [
        "Engineered and optimized ML models for predictive analytics, boosting efficiency by 20%",
        "Implemented linear regression, decision trees, and neural networks with 90% accuracy",
        "Handled data preprocessing, feature engineering, and model deployment on AWS and Azure",
      ],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      type: "work",
      title: "Microsoft Azure AI Services",
      company: "ICT Academy",
      location: "India",
      period: "Oct 2024 - Nov 2024",
      description: [
        "Developed expertise in Azure Cognitive Services including Computer Vision and LUIS",
        "Hands-on experience designing and deploying scalable AI solutions on cloud",
        "Built AI-driven applications covering NLP, data extraction, and model deployment",
      ],
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      type: "work",
      title: "Business Development Executive Intern",
      company: "Maiyyam",
      location: "Coimbatore, India",
      period: "Sep 2024 - Oct 2024",
      description: [
        "Learned data analysis, project creation, and business analysis",
        "Contributed to business strategy and development initiatives",
      ],
      gradient: "from-orange-500 to-amber-500",
    },
    {
      type: "work",
      title: "IoT Intern",
      company: "Extazee Software Solutions",
      location: "Trichy, India",
      period: "Jul 2024 - Aug 2024",
      description: [
        "Hands-on experience with IoT frameworks and technologies",
        "Contributed to innovative smart technology projects",
        "Followed best practices in IoT development and deployment",
      ],
      gradient: "from-teal-500 to-cyan-500",
    },
    {
      type: "work",
      title: "Machine Learning Bootcamp",
      company: "Atharvo",
      location: "Bengaluru, India",
      period: "Jun 2024 - Jul 2024",
      description: [
        "Completed an intensive machine learning internship bootcamp program",
        "Deepened understanding of machine learning and its applications",
        "Built hands-on projects using real datasets",
      ],
      gradient: "from-violet-500 to-purple-500",
    },
    {
      type: "work",
      title: "Python Developer Intern",
      company: "Coregenic Solutions",
      location: "India",
      period: "Feb 2024 - Jul 2024",
      description: [
        "Built strong proficiency in Python programming, data structures, and OOP principles",
        "Developed 20+ scripts for complex data processing tasks",
        "Improved execution speed by 30% in real-world applications",
      ],
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      type: "work",
      title: "Data Science Intern",
      company: "Techvolt Software",
      location: "Coimbatore, India",
      period: "Jul 2023 - Aug 2023",
      description: [
        "Completed training in AI with Industrial 4.0",
        "Worked on machine learning, neural networks, data analytics, and automation",
        "Improved data accuracy by 20%",
      ],
      gradient: "from-red-500 to-pink-500",
    },
    {
      type: "education",
      title: "B.Tech in AI & Data Science",
      company: "Dhanalakshmi Srinivasan College of Engineering",
      location: "Coimbatore, Tamil Nadu",
      period: "Nov 2021 - Jul 2025",
      description: [
        "Specialized in Machine Learning, Deep Learning, and Data Analytics",
        "Actively participated in technical events and hackathons",
      ],
      gradient: "from-accent to-yellow-500",
    },
    {
      type: "education",
      title: "Higher Secondary Education",
      company: "ACS Matriculation Higher Secondary School",
      location: "Tiruvannamalai, Tamil Nadu",
      period: "Jul 2019 - Oct 2021",
      description: ["Bio-Mathematics Stream", "Percentage: 81%"],
      gradient: "from-accent to-orange-500",
    },
  ];

  const founderExperience = experiences.find((exp) => exp.fullRow);
  const otherExperiences = experiences.filter((exp) => !exp.fullRow);

  return (
    <section id="experience" className="section-padding bg-card/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Experience & <span className="text-gradient">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A timeline of my professional journey, internships, and academic milestones.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-6 md:gap-12 mb-16"
        >
          {[
            { value: "8+", label: "Internships" },
            { value: "100+", label: "Projects" },
            { value: "3+", label: "Years Learning" },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <motion.span
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.2 + index * 0.1, type: "spring" }}
                className="text-3xl md:text-4xl font-bold text-gradient block"
              >
                {stat.value}
              </motion.span>
              <span className="text-sm text-muted-foreground font-mono">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {founderExperience && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mb-6"
          >
            <motion.div
              whileHover={{ y: -5, scale: 1.01 }}
              className="group relative min-h-[220px] w-full overflow-hidden rounded-2xl glass-card border border-border/50 p-6 transition-all duration-300 hover:border-primary/50"
            >
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${founderExperience.gradient}`}
              />

              <div className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.45fr)] lg:items-center">
                <div>
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-border/60 bg-background/70 p-2">
                    <img
                      src="/logo.png"
                      alt="SpydX logo"
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {founderExperience.period}
                    </span>
                  </div>

                  <p className="mb-2 text-xs font-mono uppercase tracking-[0.28em] text-primary/80">
                    Founder/Developer
                  </p>
                  <h3
                    className="mb-2 font-mono text-3xl font-black uppercase tracking-[0.22em]"
                    style={{ textShadow: "0 0 18px rgba(127, 208, 216, 0.22)" }}
                  >
                    <span className="text-[#1CBED4]">Spyd</span>
                    <span className="text-[#54CE53]">X</span>
                  </h3>
                  <p className="mb-3 text-lg font-semibold text-muted-foreground">
                    {founderExperience.title}
                  </p>

                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    {founderExperience.location}
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {founderExperience.description.map((item, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-border/60 bg-background/20 px-4 py-3 text-sm text-muted-foreground"
                    >
                      <span className="mr-2 text-primary">-</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${founderExperience.gradient} pointer-events-none rounded-2xl transition-opacity duration-300`}
              />
            </motion.div>
          </motion.div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherExperiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              layout
              className="group"
            >
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative h-full min-h-[220px] w-full overflow-hidden rounded-2xl glass-card border border-border/50 p-6 transition-all duration-300 hover:border-primary/50 cursor-pointer"
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${exp.gradient}`} />

                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${exp.gradient} mb-4`}>
                  {exp.type === "education" ? (
                    <GraduationCap className="w-6 h-6 text-white" />
                  ) : exp.type === "freelance" ? (
                    <Rocket className="w-6 h-6 text-white" />
                  ) : (
                    <Briefcase className="w-6 h-6 text-white" />
                  )}
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {exp.title}
                </h3>
                <p className="text-sm font-medium text-muted-foreground mb-2">{exp.company}</p>

                <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4">
                  <MapPin className="w-3.5 h-3.5" />
                  {exp.location}
                </div>

                <motion.div
                  initial={false}
                  animate={{ height: expandedIndex === index ? "auto" : 0 }}
                  className="overflow-hidden"
                >
                  <ul className="space-y-2 pt-4 border-t border-border/50">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                        <span className="shrink-0 text-primary">-</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <div className="mt-4 flex items-center justify-center text-muted-foreground transition-colors group-hover:text-primary">
                  {expandedIndex === index ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>

                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${exp.gradient} pointer-events-none rounded-2xl transition-opacity duration-300`}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

