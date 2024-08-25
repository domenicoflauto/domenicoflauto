"use client";

import { Intro } from '@/components/intro';
import { Work } from '@/components/work';
import { Footer } from '@/components/footer';
import { Container } from '@/components/container';

import { Moon, LocationPin } from '@/components/Icon';

import styles from './styles.module.css';

export default function Home() {
  return (
    <>
      <div className="flex flex-row px-24 gap-3">
        <div className="flex flex-row justify-center items-center gap-1 py-2">
          <Moon />
          <span className={`text-[#F6F6F6] text-xs ${styles.time}`}>
            00:20 AM GMT
          </span>
        </div>
        <div className="flex flex-row justify-center items-center gap-1 py-2">
          <LocationPin />
          <span className={`text-[#F6F6F6] text-xs ${styles.location}`}>
            London, UK
          </span>
        </div>
      </div>
      {/* <Intro />
      <Work />
      <Footer /> */}
    </>
  )
}