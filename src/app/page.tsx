"use client";

import { Analytics } from '@vercel/analytics/react';
import { motion } from 'framer-motion';
import useKonami from 'use-konami';

import { useState } from 'react';

import { Intro } from '@/components/intro';
import { Work } from '@/components/work';
import { Blob } from '@/components/intro/blob';

export default function Home() {
  return (
    <>
      <Header />
      <motion.section
        className='container container-intro'
        id="about"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 25 }}
        transition={{ duration: 0.3 }}
      >
        <Intro />
        <Blob />
      </motion.section>
      <section id="work" className="container">
        <Work />
      </section>
      <footer className="footer">
        <span>© 2023 Domenico Flauto</span>
        <span>Designed and built with
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <mask id="mask0_541_39135" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
              <rect width="18" height="18" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_541_39135)">
              <path d="M9.00076 14.7951L8.32289 14.1822C7.09213 13.0793 6.07651 12.1382 5.27602 11.3589C4.47554 10.5795 3.84694 9.89252 3.39022 9.29781C2.93348 8.70309 2.61689 8.16391 2.44046 7.68026C2.26401 7.19661 2.17578 6.70527 2.17578 6.20623C2.17578 5.20432 2.52217 4.35697 3.21496 3.66418C3.90775 2.97139 4.7551 2.625 5.75701 2.625C6.37432 2.625 6.96807 2.77188 7.53826 3.06564C8.10845 3.35939 8.59595 3.77983 9.00076 4.32694C9.40557 3.77983 9.89308 3.35939 10.4633 3.06564C11.0335 2.77188 11.6272 2.625 12.2445 2.625C13.2464 2.625 14.0938 2.97139 14.7866 3.66418C15.4794 4.35697 15.8257 5.20432 15.8257 6.20623C15.8257 6.70527 15.7406 7.19036 15.5704 7.66151C15.4003 8.13266 15.0868 8.66247 14.6301 9.25093C14.1733 9.83939 13.5428 10.5295 12.7385 11.3214C11.9342 12.1132 10.9017 13.0793 9.64113 14.2197L9.00076 14.7951Z" fill="#5E626E" />
            </g>
          </svg>
          in London
        </span>
      </footer >
      <Analytics />
    </>
  )
}

function Header() {
  const [konami, setKonami] = useState("");
  useKonami({
    onUnlock: () => setKonami("👾 "),
  });
  return (
    <div className="header-container">
      <header className="header">
        <span>{konami}Domenico Flauto</span>
        <nav>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#work">Work</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}