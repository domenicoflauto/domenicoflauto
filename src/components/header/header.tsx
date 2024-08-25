'use client';

import { useState } from 'react';
import useKonami from 'use-konami';

import styles from './header.module.css';

export function Header() {
  const [konami, setKonami] = useState(false);
  useKonami({
    // konami code: ↑ ↑ ↓ ↓ ← → ← → b a
    onUnlock: () => setKonami(!konami),
  });
  return (
    <div className="px-24">
      <header className={`py-3 flex flex-row justify-between ${styles["header"]}`}>
        <div className="flex flex-row gap-2 items-center justify-center">
          <Logo konami={konami} />
          <span className='text-[#F6F6F6] text-sm font-medium'>Domenico Flauto</span>
          <span className='text-[#B6B1B6] text-sm'>Product Designer</span>
        </div>
        <nav className={``}>
          <ul className={`flex flex-row text-[#F6F6F6] text-sm`}>
            <li className='px-3'>
              <a href="#now">Now</a>
            </li>
            <li className='px-3'>
              <a href="#work">Work</a>
            </li>
            <li className='px-3'>
              <a href="#about">About</a>
            </li>
            <li className='px-3'>
              <a href="#about">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className={`${styles.borderGradient}`}></div>
    </div>
  )
}

function Logo({ konami }: { konami: boolean }) {
  return (
    <svg
      width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        className={`${konami ? 'fill-purple-200' : ''}`}
        d="M7.91101 13.5339L12.9069 10.9776C13.5775 10.6345 13.9984 9.94374 13.9959 9.19048L13.9813 4.80838C13.9788 4.06184 13.5607 3.37883 12.897 3.03701L7.91422 0.470836C7.34044 0.175332 6.65932 0.17488 6.08515 0.469623L1.08664 3.03553C0.419503 3.37799 0 4.06488 0 4.81479V9.19507C0 9.94592 0.420557 10.6335 1.08899 10.9755L6.08899 13.5339C6.66106 13.8266 7.33894 13.8266 7.91101 13.5339Z" fill="#EAE7D6" />
      <path d="M5.56137 5.56137L3 7L5.56137 8.43863L7 11L8.43863 8.43863L11 7L8.43863 5.56137L7 3L5.56137 5.56137Z" fill="#090A0B" />
    </svg>
  )
}