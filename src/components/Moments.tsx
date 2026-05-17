import React from 'react';
import { motion } from 'motion/react';
import moment01 from '../assets/images/moment_01.jpg';
import moment02 from '../assets/images/moment_02.jpg';
import moment03 from '../assets/images/moment_03.jpg';
import moment04 from '../assets/images/moment_04.jpg';
import moment05 from '../assets/images/moment_05.jpg';
import moment06 from '../assets/images/moment_06.png';
import moment07 from '../assets/images/moment_07.png';
import moment08 from '../assets/images/moment_08.png';
import moment09 from '../assets/images/moment_09.jpg';
import moment10 from '../assets/images/moment_10.jpg';

const Moments = () => {
  const moments = [
    { id: 1, src: moment01, label: "Conference Stage" },
    { id: 2, src: moment02, label: "Strategy Session" },
    { id: 3, src: moment03, label: "Developer Meetup" },
    { id: 4, src: moment04, label: "Brand Workshop" },
    { id: 5, src: moment05, label: "Global HQ" },
    { id: 6, src: moment06, label: "Workshop Discussion" },
    { id: 7, src: moment07, label: "Project Briefing" },
    { id: 8, src: moment08, label: "Tech Event" },
    { id: 9, src: moment09, label: "Collaboration" },
    { id: 10, src: moment10, label: "Milestone Success" },
  ];
  const duplicatedMoments = [...moments, ...moments, ...moments];

  return (
    <section id="moments" className="pt-16 pb-12 md:pt-24 md:pb-16 overflow-hidden bg-white">
      <div className="px-6 md:px-12 max-w-7xl mx-auto mb-10 md:mb-16">
        <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-sunset uppercase tracking-[0.3em] text-[10px] font-bold block mb-4">Moments</motion.span>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">From the field.</motion.h2>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex gap-4 md:gap-8 pl-4 animate-scroll" style={{ width: 'fit-content' }}>
          {duplicatedMoments.map((moment, index) => (
            <div key={`${moment.id}-${index}`} className="flex-shrink-0 group">
              <div className="w-[280px] sm:w-[350px] md:w-[500px] aspect-video overflow-hidden rounded-lg">
                <img src={moment.src} alt={moment.label} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-33.333%); } }
        .animate-scroll { animation: scroll 40s linear infinite; }
        .animate-scroll:hover { animation-play-state: paused; }
      `}</style>
    </section>
  );
};

export default Moments;
