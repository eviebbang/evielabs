import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Plus } from 'lucide-react';
import workWeb3 from '../assets/images/work_web3_festival_final.jpg';
import workAiSecurity from '../assets/images/work_ai_security.jpg';
import workStrategic from '../assets/images/work_strategic_meeting.jpg';
import workHackathon from '../assets/images/work_hackathon_light.jpg';

interface ProjectAccordionProps {
  title: string;
  subtitle: string;
  content: { context: string; approach: string; outcome: string; };
  image: string;
  reversed?: boolean;
}

const ProjectItem: React.FC<ProjectAccordionProps> = ({ title, subtitle, content, image, reversed }) => {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const sections = [
    { id: 'context', label: 'Context', text: content.context },
    { id: 'approach', label: 'Approach', text: content.approach },
    { id: 'outcome', label: 'Outcome', text: content.outcome },
  ];

  return (
    <div className="mb-24 md:mb-32 grid grid-cols-12 gap-8 items-center">
      <motion.div initial={{ opacity: 0, x: reversed ? 50 : -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className={`col-span-12 md:col-span-6 ${reversed ? 'md:order-last' : 'md:order-first'} flex justify-center`}>
        <div className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-none aspect-[4/3] overflow-hidden rounded-xl border border-charcoal/5 shadow-2xl shadow-charcoal/10">
          <img src={image} alt={title} className="w-full h-full object-cover brightness-100 hover:scale-105 transition-all duration-1000" />
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: reversed ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className={`col-span-12 md:col-span-6 ${reversed ? 'md:order-first' : 'md:order-last'}`}>
        <div className="mb-6 md:mb-8">
          <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-4">{title}</h3>
          <p className="text-charcoal/60 uppercase tracking-widest text-[10px] sm:text-xs font-semibold">{subtitle}</p>
        </div>
        <div className="space-y-4 border-t border-charcoal/10 pt-4 px-4 md:px-0">
          {sections.map((section) => (
            <div key={section.id} className="border-b border-charcoal/5 last:border-none pb-4 px-2">
              <button onClick={() => setOpenSection(openSection === section.id ? null : section.id)} className="w-full flex justify-between items-center py-4 text-left group">
                <span className={`text-sm uppercase tracking-widest font-bold transition-colors ${openSection === section.id ? 'text-sunset' : 'group-hover:text-sunset'}`}>{section.label}</span>
                {openSection === section.id ? <ChevronDown size={18} className="text-sunset" /> : <Plus size={18} className="text-charcoal/20 transition-colors group-hover:text-sunset mr-1" />}
              </button>
              <AnimatePresence>
                {openSection === section.id && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }} className="overflow-hidden">
                    <p className="pb-4 text-charcoal/80 leading-relaxed font-sans pr-4">{section.text}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const Work = () => {
  const projects: ProjectAccordionProps[] = [
    { title: "HK Web3 Festival 2026", subtitle: "30,000+ Attendee Industry Event", image: workWeb3, content: { context: "One of Asia's largest Web3 industry events, bringing together global blockchain companies, developers, investors, and media communities.", approach: "Led cross-channel communications and coordinated over 100 media outlets, communities, and KOL partners to support global event visibility and ecosystem engagement.", outcome: "Attracted 30,000+ attendees and generated over 100 million impressions through coordinated global media and ecosystem campaigns." } },
    { title: "AI Security Platform Growth", subtitle: "Go-to-Market & International Growth", reversed: true, image: workAiSecurity, content: { context: "An AI-powered decentralized security auditing platform expanding across global and Southeast Asian markets.", approach: "Built the product's brand communication and growth system across X, LinkedIn, and regional offline communities, combining content strategy, ecosystem collaboration, and local market engagement.", outcome: "Drove 300% social growth within six months while building regional partnerships, business opportunities, and market visibility across Singapore and Thailand." } },
    { title: "Strategic KA Management", subtitle: "Ecosystem Collaboration & Commercial Delivery", image: workStrategic, content: { context: "A strategic enterprise collaboration involving technology integration, ecosystem coordination, and cross-functional product delivery.", approach: "Worked across product, technical, and partner teams to manage project coordination, ecosystem communication, and delivery execution throughout the collaboration process.", outcome: "Successfully supported the delivery of enterprise-level cooperation projects contributing to over $1.2M in annual commercial revenue." } },
    { title: "Global Hackathon for Product Launch", subtitle: "Developer Ecosystem & Product Launch", reversed: true, image: workHackathon, content: { context: "A newly launched product seeking early developer adoption and ecosystem participation across global markets.", approach: "Led the planning and execution of a global hackathon program, working closely with ecosystem partners, developer communities, and technical teams.", outcome: "Mobilized over $600K in ecosystem support and attracted 300+ developer teams to drive early-stage product adoption." } }
  ];

  return (
    <section id="work" className="py-16 md:py-24 px-6 md:px-12 bg-oatmeal">
      <div className="max-w-7xl mx-auto">
        <div className="mb-
