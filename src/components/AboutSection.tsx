import { motion } from "framer-motion";
import { Download } from "lucide-react";

const experiences = [
  { role: "Cyber Security Intern", company: "The Red Users", period: "Mar 2025 - May 2025" },
  { role: "Contributor", company: "GirlScript Summer of Code", period: "Oct 2024 - Dec 2024" },
  { role: "Senior Moderator", company: "Brainly", period: "Feb 2020 - Jan 2022" },
];

const AboutSection = () => {
  return (
    <section id="about" className="px-6 py-24 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl font-bold text-foreground mb-6">About Me</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            I am a Bachelor of Technology student at the Institute of Technical Education and Research (SOA), Odisha, with a CGPA of 8.9.
            I am passionate about <strong className="text-foreground">Web Design and Development</strong> and <strong className="text-foreground">Cyber Security</strong>.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            My technical curiosity has led me to work on various projects including a neurodiverse support platform and automated bots. I actively participate in hackathons and technical communities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-display text-xl font-semibold text-foreground mb-6">Experience</h3>
          <div className="space-y-6">
            {experiences.map((exp) => (
              <div key={exp.role} className="flex items-start justify-between border-b border-border pb-4 last:border-0">
                <div>
                  <p className="text-foreground font-medium text-sm">{exp.role}</p>
                  <p className="text-muted-foreground text-sm">{exp.company}</p>
                </div>
                <span className="text-muted-foreground text-xs whitespace-nowrap ml-4">{exp.period}</span>
              </div>
            ))}
          </div>
          <button className="mt-8 inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors">
            <Download className="w-4 h-4" /> Download Resume
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
