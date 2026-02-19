import { motion } from "framer-motion";
import { ArrowUpRight, Copy } from "lucide-react";
import { toast } from "sonner";

const HeroSection = () => {
  const copyEmail = () => {
    navigator.clipboard.writeText("hello@example.com");
    toast.success("Email copied to clipboard!");
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center px-6 pt-32 pb-16 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex gap-3 mb-8">
          <span className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
            Available for hire
          </span>
          <span className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
            Based in India
          </span>
        </div>

        <h1 className="font-display text-5xl sm:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
          <span className="text-foreground">Hello, I'm Kaushal.</span>
          <br />
          <span className="text-muted-foreground">Full Stack Developer.</span>
        </h1>

        <p className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
          I build <strong className="text-foreground">accessible</strong>,{" "}
          <strong className="text-foreground">pixel-perfect</strong>, and{" "}
          <strong className="text-foreground">scalable web apps</strong>.
          Specializing in React, Next.js, and modern UI/UX architecture.
        </p>

        <div className="flex gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-foreground px-6 py-3 text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-colors"
          >
            Connect now <ArrowUpRight className="w-4 h-4" />
          </a>
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
          >
            <Copy className="w-4 h-4" /> Copy Email
          </button>
        </div>
      </motion.div>

      {/* Info Cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-20"
      >
        <div className="col-span-1 rounded-2xl border border-border bg-card p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground">🌐</div>
            <span className="w-2.5 h-2.5 rounded-full bg-primary" />
          </div>
          <h3 className="text-foreground font-semibold text-lg">Open to Work</h3>
          <p className="text-muted-foreground text-sm">Available for Hire</p>
        </div>

        <div className="col-span-1 sm:col-span-2 grid grid-cols-2 gap-4">
          {[
            { icon: "⌨️", title: "GitHub", sub: "@Kaushall44", href: "https://github.com/Kaushall44" },
            { icon: "𝕏", title: "Twitter/X", sub: "@Kaushall44", href: "https://twitter.com/Kaushall44" },
            { icon: "in", title: "LinkedIn", sub: "/in/kaushalrajgupta", href: "https://linkedin.com/in/kaushalrajgupta" },
            { icon: "📍", title: "Odisha, India", sub: "Remote Available", href: "#" },
          ].map((item) => (
            <a
              key={item.title}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 hover:border-muted-foreground/30 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground text-sm font-bold">
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-foreground text-sm font-medium">{item.title}</p>
                <p className="text-muted-foreground text-xs truncate">{item.sub}</p>
              </div>
              {item.href.startsWith("http") && (
                <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
