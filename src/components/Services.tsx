'use client';

import { services } from '@/data/siteData';

export default function Services() {
  return (
    <section className="py-20 mt-5">
      <div className="flex flex-col gap-8">
        {/* First row - Right to Left */}
        <div className="bg-black border-t border-b border-white/20">
          <div className="marquee-container h-[80px] flex items-center">
            <div className="marquee-right-to-left whitespace-nowrap">
              {[...services.row1, ...services.row1, ...services.row1].map((service, index) => (
                <span key={index} className="font-bebas text-white text-[60px] leading-none mx-8 font-normal inline-block">
                  {service}
                  <span className="text-white/40 mx-8">-</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Second row - Left to Right */}
        <div className="bg-black border-t border-b border-white/20">
          <div className="marquee-container h-[80px] flex items-center">
            <div className="marquee-left-to-right whitespace-nowrap">
              {[...services.row2, ...services.row2, ...services.row2].map((service, index) => (
                <span key={index} className="font-bebas text-white text-[60px] leading-none mx-8 font-normal inline-block">
                  {service}
                  <span className="text-white/40 mx-8">-</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}