import { useState } from 'react';
import useKonami from 'use-konami';

import styles from './header.module.css';

export function Header() {
  const [konami, setKonami] = useState("");
  useKonami({
    onUnlock: () => setKonami("👾 "),
  });
  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <span>{konami}Domenico Flauto</span>
        <nav className={styles.nav}>
          <ul>
            <li>
              <a href="#about" id="nav-about" data-umami-event="nav about">About</a>
            </li>
            <li>
              <a href="#work" id="nav-work" data-umami-event="nav work">Work</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}