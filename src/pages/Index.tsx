import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WorkSection from "@/components/WorkSection";
import SkillsMarquee from "@/components/SkillsMarquee";
import BlogSection from "@/components/BlogSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WorkSection />
      <SkillsMarquee />
      <BlogSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Index;
