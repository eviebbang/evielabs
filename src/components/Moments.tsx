import React from 'react';
import { motion } from 'motion/react';

const Moments = () => {
  const moments = [
    { id: 1, src: "/src/assets/images/moment_01.jpg", label: "Conference Stage" },
    { id: 2, src: "/src/assets/images/moment_02.jpg", label: "Strategy Session" },
    { id: 3, src: "/src/assets/images/moment_03.jpg", label: "Developer Meetup" },
    { id: 4, src: "/src/assets/images/moment_04.jpg", label: "Brand Workshop" },
    { id: 5, src: "/src/assets/images/moment_05.jpg", label: "Global HQ" },
    { id: 6, src: "/src/assets/images/moment_06.png", label: "Workshop Discussion" },
    { id: 7, src: "/src/assets/images/moment_07.png", label: "Project Briefing" },
    { id: 8, src: "/src/assets/images/moment_08.png", label: "Tech Event" },
    { id: 9, src: "/src/assets/images/moment_09.jpg", label: "Collaboration" },
    { id: 10, src: "/src/assets/images/moment_10.jpg", label: "Milestone Success" },
  ];

  // Triple the items for seamless infinite loop
  const duplicatedMoments = [...moments, ...moments, ...moments];

  return (
    <section id="moments" className="pt-16 pb-12 md:pt-24 md:pb-16 overflow-hidden bg-white">
      <div className="px-6 md:px-12 max-w-7xl mx-auto mb-10 md:mb-16">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-sunset uppercase tracking-[0.3em] text-[10px] font-bold block mb-4"
        >
          Moments
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
        >
          From the field.
        </motion.h2>
      </div>
 
      <div className="relative overflow-hidden">
        <div 
          className="flex gap-4 md:gap-8 pl-4 animate-scroll"
          style={{
            width: 'fit-content',
          }}
        >
          {duplicatedMoments.map((moment, index) => (
            <div key={`${moment.id}-${index}`} className="flex-shrink-0 group">
              <div className="w-[280px] sm:w-[350px] md:w-[500px] aspect-video overflow-hidden rounded-lg">
                <img 
                  src={moment.src} 
                  alt={moment.label} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Moments;
