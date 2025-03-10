"use client";

import Image from 'next/image';
import { SocialIcons } from '@/components/socialIcons';
import { IconArrow } from '@/components/Icon';
import { motion } from 'framer-motion';
import { Blob } from '@/components/intro/blob';


import styles from './intro.module.css';
import { Section } from '../section';

export function Intro() {
  return (
    <Section id="about" className={styles.containerIntro}>
      <motion.section
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 25 }}
        transition={{ duration: 0.3 }}
      >
        <div className={styles.intro}>
          <h1 className={styles.title}>
            Hi, I am&nbsp;
            <Image
              className={styles.profilePicture}
              src="/images/dom-bw.png"
              alt="Dom's Profile picture"
              width={32}
              height={32}
            />
            &nbsp;<i>Dom</i></h1>
          <p>
            Senior product designer, working on something new ✨
          </p>
          <p>
            Made in&nbsp;
            <span className={styles.unbreakable}>
              <Image
                src="/images/flag-it.svg"
                alt="Flag of Italy"
                width={18}
                height={14}
              />
              Italy,&ensp;
            </span>
            based&nbsp;in&nbsp;
            <span className={styles.unbreakable}>
              <Image
                src="/images/flag-gb.svg"
                alt="Flag of the UK"
                width={18}
                height={14}
              />
              London,&nbsp;UK.
            </span>
          </p>
          <p>
            Over the past 10+ years, I have supercharged the growth of various start-ups by fostering a more user-centered approach, focusing my expertise on UX/UI, design systems, user research, and prototyping.
          </p>
          <p>
            Do you want to discuss a project or just say hi? Feel free to drop me an email at <a className={styles.itemLink} href="mailto:mailto:hello@domenicoflauto.com?subject=Let's talk about [...]&body=Hey Dom, I was on your personal website and I thought I'd send an email...">hello@domenicoflauto.com<IconArrow /></a>
          </p>
          <SocialIcons />

        </div>
        <Blob />
      </motion.section>
    </Section>
  )
}
