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

  useKonami({
    // konami code: ↑ ↑ ↓ ↓ ← → ← → b a
    onUnlock: () => {
      setKonami(!konami);
      !konami ? audio?.up?.play() : audio?.down?.play();
    }
  });

  return (
    <div className={`fixed px-4 md:px-24 left-0 right-0 top-0 z-20  ${styles["header"]} dark:${styles["header-dark"]}`}>
      <header className={`py-3 flex sm:flex-row flex-col justify-between`}>
        <div className="flex flex-row gap-2 items-center sm:justify-center justify-between">
          <div className="flex flex-row gap-2 items-center">
            <Logo konami={konami} />
            <span className='text-sharp text-sm font-medium'>Domenico Flauto</span>
          </div>
          <span className='text-soft text-sm hidden md:block'>Product Designer</span>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-gray-100 hover:bg-gray-800 focus:outline-none focus:bg-gray-800"
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
        <MobileMenu isOpen={isOpen} />
        <Nav />
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
        className={`${konami ? 'fill-purple-200' : 'fill-logo'}`}
        fillRule="evenodd" clipRule="evenodd" d="M12.9069 10.9778L7.91101 13.534C7.33894 13.8267 6.66106 13.8267 6.08899 13.534L1.08899 10.9757C0.420557 10.6337 0 9.94606 0 9.1952V4.81493C0 4.06502 0.419503 3.37813 1.08664 3.03566L6.08515 0.469759C6.65932 0.175017 7.34044 0.175469 7.91422 0.470973L12.897 3.03715C13.5607 3.37896 13.9788 4.06197 13.9813 4.80852L13.9959 9.19062C13.9984 9.94387 13.5775 10.6347 12.9069 10.9778ZM3 7.00014L5.56137 5.5615L7 3.00014L8.43863 5.5615L11 7.00014L8.43863 8.43877L7 11.0001L5.56137 8.43877L3 7.00014Z" />
    </svg>
  )
}

export function Nav() {
  return (
    <nav className={``}>
      <ul className={`hidden sm:flex flex-row text-sharp text-sm`}>
        <li className='px-3'>
          <a href="/now">Now</a>
        </li>
        <li className='px-3'>
          <a href="/work">Work</a>
        </li>
        <li className='px-3'>
          <a href="/about">About</a>
        </li>
        <li className='px-3'>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export function MobileMenu({ isOpen }: { isOpen: boolean }) {
  return (
    <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden h-screen`} id="mobile-menu">
      <ul className="px-2 pt-2 pb-3 space-y-1 text-sharp text-sm">
        <li className='text-xl pl-3 border-b border-border-1'>
          <a className='flex flex-row justify-between py-3' href="/now">
            Now
            <span>→</span>
          </a>
        </li>
        <li className='text-xl pl-3 border-b border-border-1'>
          <a className='flex flex-row justify-between py-3' href="/work">
            Work
            <span>→</span>
          </a>
        </li>
        <li className='text-xl pl-3 border-b border-border-1'>
          <a className='flex flex-row justify-between py-3' href="/about">
            About
            <span>→</span>
          </a>
        </li>
        <li className='text-xl pl-3 border-b border-border-1'>
          <a className='flex flex-row justify-between py-3' href="/contact">
            Contact
            <span>→</span>
          </a>
        </li>
      </ul>
    </div>
  )
}