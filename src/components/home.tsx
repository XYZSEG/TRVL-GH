import React from "react";
import Navbar from "./navigation/Navbar";
import HeroCarousel from "./hero/HeroCarousel";
import DestinationsGrid from "./destinations/DestinationsGrid";
import NewsletterSection from "./newsletter/NewsletterSection";
import { motion } from "framer-motion";

const Home = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar
        isOpen={isMobileMenuOpen}
        onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />

      <main>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <HeroCarousel />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <DestinationsGrid />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <NewsletterSection />
        </motion.section>
      </main>

      <footer className="bg-background border-t py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} Travel Ghana. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
