'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function StorePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-7xl md:text-9xl font-bebas mb-4">Store</h1>
          <p className="text-2xl font-bebas tracking-wide">Coming Soon...</p>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
