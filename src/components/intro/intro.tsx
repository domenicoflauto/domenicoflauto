"use client";

import Image from 'next/image';
import { SocialIcons } from '@/components/socialIcons';
import { IconArrow } from '../work';

import './intro.css';

export function Intro() {
  return (
    <div className="intro">
      <h1 className="title">
        Hi, I am&nbsp;
        <Image
          className='profile-picture'
          src="/images/dom-bw.png"
          alt="Dom's Profile picture"
          width={32}
          height={32}
        />
        &nbsp;<i>Dom</i></h1>
      <p>
        I am a product designer made in&nbsp;
        <span className="unbreakable">
          <Image src="/images/flag-it.svg" alt="Flag of Italy" width={18} height={14} />
          Italy,&ensp;
        </span>
        based&nbsp;in&nbsp;
        <span className="unbreakable">
          <Image src="/images/flag-gb.svg" alt="Flag of the UK" width={18} height={14} />
          London,&nbsp;UK.
        </span>
      </p>
      <p>
        Over the past 8+ years, I have supercharged the growth of various start-ups by fostering a more user-centered approach, focusing my expertise on UX/UI, design systems, user research, and prototyping.
      </p>
      <p>
        If you have an intriguing project, potential work collaboration, or an innovative idea you&apos;d like to discuss, I&apos;m currently
        <span className="blinking-dot" />
        <strong>open</strong> to new opportunities!
        Feel free to drop me an email at <a className='item-link' href="mailto:hello@domenicoflauto.com?subject=Let's talk about [...]&body=Hey Dom, I was on your personal website and I thought I'd send an email...">hello@domenicoflauto.com<IconArrow /></a>
      </p>
      <SocialIcons />

    </div>
  )
}
