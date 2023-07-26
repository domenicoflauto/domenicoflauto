"use client";

import Image from 'next/image';
import { SocialIcons } from '@/components/socialIcons';

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
          Italy,&emsp;
        </span>
        based&nbsp;in&nbsp;
        <span className="unbreakable">
          <Image src="/images/flag-gb.svg" alt="Flag of the UK" width={18} height={14} />
          London,&nbsp;UK.
        </span>
      </p>
      <p>
        In the last 8+ years, I have helped start-ups growing and becoming more user-centred, while putting my heart in UX/UI, design systems, user research and prototyping.
      </p>
      <p>
        Do you have an exciting project, work collaboration or idea you want to chat about?&nbsp;
        I am currently
        <span className="dot" />
        <strong>open</strong> to new opportunities!
        <br />
        Drop me an email at <strong>hello@domenicoflauto.com</strong>
      </p>
      <SocialIcons />

    </div>
  )
}
