import React from 'react';
import { motion } from 'motion/react';
import heroPortrait from '../assets/images/evie_hero_portrait_new.jpg';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen pt-32 pb-16 md:pt-24 md:pb-0 px-6 md:px-12 flex items-center relative overflow-hidden bg-oatmeal">
      <div className="max-w-7xl mx-auto magazine-grid w-full items-center">
        <div className="col-span-12 md:col-span-7 xl:col-span-6 flex flex-col justify-center mb-12 md:mb-0">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <span className="text-sunset uppercase tracking-[0.3em] text-[10px] font-bold block mb-4">
              Evie Xu
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-[70px] font-bold leading-[1.1] md:leading-[1.1] tracking-tighter mb-6">
              Marketing &<br className="hidden sm:block" />
              Branding Comm.
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-normal text-charcoal/80 mb-10 max-w-[40ch]">
              Building Global Visibility for B2B Tech Companies in AI, Blockchain, and Emerging Systems.
            </p>
            <a 
              href="mailto:eviexyw@outlook.com" 
              className="inline-block px-8 py-4 bg-sunset text-white rounded-full text-xs uppercase tracking-widest font-bold hover:bg-charcoal transition-all shadow-lg shadow-sunset/20"
            >
              Contact me
            </a>
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
          className="col-span-12 md:col-span-5 xl:col-start-8 xl:col-span-4 relative z-10 flex justify-center md:justify-end"
        >
          <div className="aspect-[3/4] w-full max-w-[240px] sm:max-w-[280px] md:max-w-[320px] relative">
            <div className="absolute inset-0 bg-charcoal/5 rounded-[48%_52%_45%_55%_/_55%_45%_52%_48%] overflow-hidden shadow-2xl">
              <img src={heroPortrait} alt="Evie Xu" className="w-full h-full object-cover grayscale brightness-110 contrast-102 hover:grayscale-0 transition-all duration-1000 hover:scale-110" />
            </div>
            <div className="absolute -inset-4 border-[0.5px] border-sunset/20 rounded-full -z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
