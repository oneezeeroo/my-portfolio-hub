import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Connect",
    status: "Completed",
    description: "A full-stack app for real-time team collaboration with chat, file sharing, attendance, and task management features.",
    tags: ["React", "Tailwind CSS", "Responsive Design", "UI/UX"],
  },
  {
    title: "Kaushal ITER",
    status: "Completed",
    description: "A backend service that generates tailored coding interview questions and solutions using AI.",
    tags: ["React", "Express", "Code Generation", "AI"],
  },
  {
    title: "VSCode Theme Portfolio",
    status: "Completed",
    description: "A personal portfolio website inspired by VSCode's design, showcasing projects and skills with a focus on responsiveness.",
    tags: ["React", "Tailwind CSS", "Responsive Design", "UI/UX"],
  },
];

const WorkSection = () => {
  return (
    <section id="work" className="px-6 py-24 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-12">
        <h2 className="font-display text-3xl font-bold text-foreground flex items-center gap-3">
          <span className="text-primary">✦</span> Selected Work
        </h2>
        <button className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
          View all projects <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="space-y-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="rounded-2xl border border-border bg-card p-6 sm:p-8 hover:border-muted-foreground/30 transition-colors group cursor-pointer"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground">{project.title}</h3>
                <span className="text-xs text-primary font-medium">{project.status}</span>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-muted-foreground text-sm mb-5 max-w-2xl leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkSection;
