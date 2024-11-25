'use client';

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import IntroLoader from "@/components/IntroLoader";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Delay showing content until curtain animation starts
    setTimeout(() => setShowContent(true), 200);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <IntroLoader onLoadingComplete={handleLoadingComplete} />}
      </AnimatePresence>

      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Header />
          <main className="min-h-screen">
            <Hero />
            <Projects />
            <Services />
          </main>
        </motion.div>
      )}

      <motion.div 
        className="fixed inset-y-0 left-0 w-1/2 bg-black z-[9999]"
        initial={{ x: 0 }}
        animate={{ x: isLoading ? 0 : '-100%' }}
        transition={{ duration: 1.2, ease: [0.83, 0, 0.17, 1], delay: 0.2 }}
      />
      <motion.div 
        className="fixed inset-y-0 right-0 w-1/2 bg-black z-[9999]"
        initial={{ x: 0 }}
        animate={{ x: isLoading ? 0 : '100%' }}
        transition={{ duration: 1.2, ease: [0.83, 0, 0.17, 1], delay: 0.2 }}
      />
    </>
  );
}
