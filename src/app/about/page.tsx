'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import PageWrapper from '@/components/PageWrapper';

export default function AboutPage() {
  return (
    <>
      <Header />
      <PageWrapper>
        <main className="min-h-screen pt-32">
          <div className="px-8">
            <div className="max-w-7xl mx-auto mb-40">
              <h1 className="font-bebas text-[128px] leading-[0.9] tracking-[-0.02em] mb-32">
                About
              </h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
                {/* Left Column - Bio */}
                <div className="space-y-8">
                  <p className="text-xl leading-relaxed">
                    Hi, I&apos;m Athena! My journey into design started as a hobby, and I quickly fell in love with the process. Growing up, I had dreams of going to art school because I loved sketching and painting—but life had other plans. Through web and graphic design, I found my way back to creativity and never looked back.
                  </p>
                  
                  <p className="text-xl leading-relaxed">
                    I&apos;m self-taught and constantly learning to sharpen my skills. I enjoy projects that challenge me and push my creativity to new levels. Fun fact: I&apos;ve redesigned my mom&apos;s business website four times—it&apos;s my personal creative playground! My design style is usually minimal yet meaningful, but I love adapting to whatever each project needs. Thanks for stopping by!
                  </p>
                </div>

                {/* Right Column - Experience & Skills */}
                <div className="space-y-16">
                  <div className="border-b border-black pb-8">
                    <h2 className="font-bebas text-3xl mb-8">Experience</h2>
                    <ul className="space-y-8">
                      <li>
                        <h3 className="font-bebas text-xl">UI/UX DESIGNER & DEVELOPER</h3>
                        <p className="text-gray-600">HotelRev • 2021-2024</p>
                      </li>
                      <li>
                        <h3 className="font-bebas text-xl">A MIX OF EVERYTHING!</h3>
                        <p className="text-gray-600">Freelance • 2018-2021</p>
                      </li>
                    </ul>
                  </div>

                  <div className="border-b border-black pb-8">
                    <h2 className="font-bebas text-3xl mb-8">Skills</h2>
                    <ul className="grid grid-cols-2 gap-8">
                      <li className="font-bebas text-xl">UI/UX Design</li>
                      <li className="font-bebas text-xl">Graphic design</li>
                      <li className="font-bebas text-xl">Brand Identity</li>
                      <li className="font-bebas text-xl">Front-end web development</li>
                      <li className="font-bebas text-xl">CMS Knowledge</li>
                      <li className="font-bebas text-xl">Responsive Design</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="font-bebas text-3xl mb-8">Contact</h2>
                    <ul className="space-y-4">
                      <li>
                        <a href="mailto:hello@athenabikaki.com" className="text-xl hover:opacity-70 transition-opacity">
                          hello@athenabikaki.com
                        </a>
                      </li>
                      <li>
                        <a href="https://instagram.com/_digitalalchemist" target="_blank" rel="noopener noreferrer" className="text-xl hover:opacity-70 transition-opacity">
                          Instagram
                        </a>
                      </li>
                      <li>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:opacity-70 transition-opacity">
                          Facebook
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </PageWrapper>
      <Footer />
    </>
  );
}
