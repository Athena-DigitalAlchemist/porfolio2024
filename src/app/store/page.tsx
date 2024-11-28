'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageWrapper from '@/components/PageWrapper';

export default function StorePage() {
  return (
    <>
      <Header />
      <PageWrapper>
        <main className="min-h-screen pt-32">
          <div className="px-8">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="font-bebas text-[128px] leading-[0.9] tracking-[-0.02em] mb-4">
                Store
              </h1>
              <p className="font-bebas text-[32px] tracking-wide">Coming Soon...</p>
            </div>
          </div>
        </main>
      </PageWrapper>
      <Footer />
    </>
  );
}
