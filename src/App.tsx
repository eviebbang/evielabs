/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Writing from './components/Writing';
import Moments from './components/Moments';
import Contact from './components/Contact';

export default function App() {
  useEffect(() => {
    // Optional: Log for debug or analytics
    console.log('Portfolio initialized');
  }, []);

  return (
    <div className="relative selection:bg-sunset selection:text-white">
      {/* Background Subtle Grid Texture */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#2C2C2C_1px,transparent_1px),linear-gradient(to_bottom,#2C2C2C_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <Navbar />
      
      <main className="relative z-10 w-full">
        <Hero />
        <About />
        <Work />
        <Writing />
        <Moments />
        <Contact />
      </main>

      {/* Subtle Bottom Glow */}
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-oatmeal to-transparent pointer-events-none z-20" />
    </div>
  );
}
