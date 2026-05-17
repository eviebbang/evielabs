import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Writing', href: '#writing' },
    { name: 'Moments', href: '#moments' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-6 md:px-12 ${isScrolled || isMobileMenuOpen ? 'bg-oatmeal/90 backdrop-blur-md border-b border-charcoal/5 py-4' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center relative z-50"
        >
          <a href="#" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="text-xl font-serif font-bold tracking-tight">Evie Xu</span>
          </a>
        </motion.div>
        
        {/* Desktop Menu */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="hidden md:flex items-center space-x-12"
        >
          {navLinks.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-xs uppercase tracking-widest font-medium hover:text-sunset transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a 
            href="mailto:eviexyw@outlook.com" 
            className="px-6 py-2 border border-charcoal/20 rounded-full text-xs uppercase tracking-widest font-medium hover:bg-charcoal hover:text-white transition-all"
          >
            Let's chat
          </a>
        </motion.div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden relative z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-0 bg-oatmeal z-40 flex flex-col items-center justify-center p-6 md:hidden"
            >
              <div className="flex flex-col items-center space-y-8">
                {navLinks.map((item, idx) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + idx * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl font-serif font-bold hover:text-sunset transition-colors"
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.a
                  href="mailto:eviexyw@outlook.com"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-8 px-10 py-4 bg-sunset text-white rounded-full text-sm uppercase tracking-widest font-bold shadow-lg shadow-sunset/20"
                >
                  Let's chat
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
