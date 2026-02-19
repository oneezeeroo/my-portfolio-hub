import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const articles = [
  {
    date: "Mar 15, 2025",
    readTime: "5 min read",
    title: "Zero Trust Architecture: Beyond the Buzzword",
    description: "Why traditional perimeter-based security is failing and how identity-centric security models are shaping the future.",
    tags: ["Security", "Architecture"],
  },
  {
    date: "Feb 28, 2025",
    readTime: "8 min read",
    title: "Securing Modern React Applications",
    description: "A deep dive into XSS prevention, Content Security Policies, and secure authentication patterns in React ecosystems.",
    tags: ["React", "AppSec"],
  },
  {
    date: "Jan 10, 2025",
    readTime: "6 min read",
    title: "The State of Supply Chain Security",
    description: "Analyzing recent npm malware incidents and strategies to audit and lock down your dependency tree.",
    tags: ["DevSecOps", "Node.js"],
  },
];

const BlogSection = () => {
  return (
    <section className="px-6 py-24 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-12">
        <h2 className="font-display text-3xl font-bold text-foreground">Security Insights</h2>
        <button className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
          Read all articles <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article, i) => (
          <motion.article
            key={article.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="rounded-2xl border border-border bg-card p-6 hover:border-muted-foreground/30 transition-colors cursor-pointer group"
          >
            <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
              <span>{article.date}</span>
              <span>·</span>
              <span>{article.readTime}</span>
            </div>
            <h3 className="font-display text-foreground font-semibold mb-3 leading-snug group-hover:text-primary transition-colors">
              {article.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{article.description}</p>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
