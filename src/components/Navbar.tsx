import { useState } from "react";
import { motion } from "framer-motion";

const navItems = ["Home", "Work", "About", "Contact"];

const Navbar = () => {
  const [active, setActive] = useState("Home");

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-1 rounded-full border border-border bg-card/80 backdrop-blur-xl px-2 py-2">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setActive(item)}
            className={`relative px-5 py-2 text-sm font-medium rounded-full transition-colors ${
              active === item
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {active === item && (
              <motion.span
                layoutId="nav-active"
                className="absolute inset-0 rounded-full bg-secondary"
                transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
              />
            )}
            <span className="relative z-10">{item}</span>
          </a>
        ))}
        <div className="w-px h-5 bg-border mx-2" />
        <span className="flex items-center gap-2 px-3 text-sm text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Good Day
        </span>
      </div>
    </motion.nav>
  );
};

export default Navbar;
