import React from 'react';
import { motion } from 'motion/react';

const TAGS = [
  "BRAND NARRATIVE", "GTM STRATEGY", "PRODUCT MARKETING", "ECOSYSTEM DEVELOPMENT", 
  "CONTENT MARKETING", "GLOBAL CAMPAIGN", "STRATEGIC PARTNERSHIP", "MEDIA RELATIONS", 
  "COMMUNITY GROWTH", "EVENT PRODUCTION"
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-8 mb-16 md:mb-24">
          <div className="col-span-12 lg:col-start-1 lg:col-span-11">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="mb-12">
                <span className="text-sunset uppercase tracking-[0.3em] text-[10px] font-bold block mb-4">
                  About
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight max-w-[20ch]">
                  Between Technology and Market.
                </h2>
              </div>
              <div className="space-y-6 md:space-y-8 text-base md:text-lg leading-relaxed text-charcoal/80 font-sans max-w-[80ch]">
                <p>
                  I work across AI, blockchain, and emerging technologies, focusing on how products are positioned, communicated, and brought to market. Over the past 6 years, I’ve led brand, content, ecosystem, and go-to-market initiatives for B2B technology companies operating across both Asian and global markets.
                </p>
                <p>
                  Graduated from King’s College London, my work focuses on helping technical products become more accessible, credible, and market-ready through branding, communication, and ecosystem building. I work closely with founders, developers, media, and global teams to turn complex technologies into products people can understand, trust, and adopt.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Capability Wall: Infinite Scroll Pills */}
        <div className="relative overflow-hidden py-12 -mx-6 md:-mx-12">
          <div className="flex flex-col gap-4 md:gap-6">
            {/* Row 1: Left */}
            <div className="flex overflow-hidden group">
              <div className="flex animate-scroll-left whitespace-nowrap gap-4 pr-4">
                {[...TAGS, ...TAGS].map((tag, i) => (
                  <span 
                    key={i} 
                    className="px-6 py-3 md:px-8 md:py-4 rounded-full border border-charcoal/10 text-[10px] md:text-sm uppercase tracking-widest font-medium bg-oatmeal hover:bg-sunset hover:text-white hover:border-sunset transition-all cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Row 2: Right */}
            <div className="flex overflow-hidden group">
              <div className="flex animate-scroll-right whitespace-nowrap gap-4 pr-4">
                {[...TAGS, ...TAGS].reverse().map((tag, i) => (
                  <span 
                    key={i} 
                    className="px-6 py-3 md:px-8 md:py-4 rounded-full border border-charcoal/10 text-[10px] md:text-sm uppercase tracking-widest font-medium bg-oatmeal hover:bg-sunset hover:text-white hover:border-sunset transition-all cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Fades */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default About;
