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
    <section id="moments" className="
