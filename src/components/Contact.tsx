import React from 'react';
import { motion } from 'motion/react';
import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="pt-12 pb-24 md:pt-20 md:pb-32 px-6 md:px-12 bg-white relative">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="w-full flex flex-col items-center"
        >
          <span className="text-sunset uppercase tracking-[0.3em] text-[10px] font-bold block mb-4">
            Let's connect
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-[39px] font-medium tracking-tight leading-[1.2] mb-6 max-w-[24ch]">
            Open to new collaborations, interesting conversations, or a coffee chat in Shanghai.
          </h2>

          <a 
            href="mailto:eviexyw@outlook.com"
            className="group relative inline-block text-xl sm:text-2xl md:text-[41px] font-serif font-bold hover:text-sunset transition-colors mb-16 md:mb-20 break-all sm:break-normal"
          >
            eviexyw@outlook.com
            <div className="absolute -bottom-2 left-0 w-full h-[1.5px] bg-charcoal group-hover:bg-sunset transition-colors" />
          </a>
        </motion.div>

        <div className="w-full pt-10 md:pt-12 border-t border-charcoal/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-sunset animate-pulse" />
             <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-bold text-charcoal/40 text-center md:text-left whitespace-nowrap">
               2026 / EVIE XU / B2B TECH MARCOMM & BRANDING
             </span>
          </div>
          
          <div className="flex items-center gap-8">
            <div className="flex flex-col items-end">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
