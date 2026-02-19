const skills = [
  "C/C++", "Python", "Java", "JavaScript", "React.js", "Node.js", "MongoDB",
  "System Design", "Firebase", "MySQL", "HTML/CSS", "Git", "GitHub",
  "Data Structures", "OOPs", "Web Design",
];

const SkillsMarquee = () => {
  return (
    <section className="py-20 overflow-hidden">
      <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
        The Secret Sauce
      </h2>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex animate-marquee whitespace-nowrap">
          {[...skills, ...skills, ...skills, ...skills].map((skill, i) => (
            <span
              key={`${skill}-${i}`}
              className="mx-3 inline-flex items-center rounded-full border border-border bg-card px-5 py-2.5 text-sm text-muted-foreground font-medium hover:text-foreground hover:border-muted-foreground/40 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsMarquee;
