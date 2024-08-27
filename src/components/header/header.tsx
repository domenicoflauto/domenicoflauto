'use client';

import { useEffect, useState } from 'react';
import useKonami from 'use-konami';

import styles from './header.module.css';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [konami, setKonami] = useState(false);

  const [audio, setAudio] = useState<{ up: HTMLAudioElement | null, down: HTMLAudioElement | null }>({
    up: null,
    down: null
  });

  useEffect(() => {
    setAudio({
      up: new Audio('/sounds/sfx-up.mp3'),
      down: new Audio('/sounds/sfx-down.mp3')
    })
  }, [])

  // let sfxUp = new Audio('/sounds/sfx-up.mp3');
  // let sfxDown = new Audio('/sounds/sfx-down.mp3');
  useKonami({
    // konami code: ↑ ↑ ↓ ↓ ← → ← → b a
    onUnlock: () => {
      setKonami(!konami);
      !konami ? audio?.up?.play() : audio?.down?.play();
    }
  });
  return (
    <div className={`fixed px-4 md:px-24 left-0 right-0 top-0 z-20  ${styles["header"]}`}>
      <header className={`py-3 flex sm:flex-row flex-col justify-between`}>
        <div className="flex flex-row gap-2 items-center sm:justify-center justify-between">
          <div className="flex flex-row gap-2 items-center">
            <Logo konami={konami} />
            <span className='text-[#F6F6F6] text-sm font-medium'>Domenico Flauto</span>
          </div>
          <span className='text-[#B6B1B6] text-sm hidden md:block'>Product Designer</span>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-gray-100 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
          <ul className="px-2 pt-2 pb-3 space-y-1 text-[#F6F6F6] text-sm">
            <li className=''>
              <a href="#now">Now</a>
            </li>
            <li className=''>
              <a href="#work">Work</a>
            </li>
            <li className=''>
              <a href="#about">About</a>
            </li>
            <li className=''>
              <a href="#about">Contact</a>
            </li>
          </ul>
        </div>
        <nav className={``}>
          <ul className={`hidden sm:flex flex-row text-[#F6F6F6] text-sm`}>
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