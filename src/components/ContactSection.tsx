import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="px-6 py-24 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-2xl border border-border bg-card p-10 sm:p-16 text-center"
      >
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">Let's work together</h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          Have a project in mind? Let's connect and create something amazing together.
        </p>
        <a
          href="mailto:hello@example.com"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Get in Touch <ArrowUpRight className="w-4 h-4" />
        </a>
      </motion.div>

      <footer className="mt-16 flex flex-col sm:flex-row items-center justify-between text-sm text-muted-foreground">
        <p>© 2025 Kaushal. All rights reserved.</p>
        <p className="mt-2 sm:mt-0">Designed & Built with ❤️</p>
      </footer>
    </section>
  );
};

export default ContactSection;
