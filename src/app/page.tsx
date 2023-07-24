import { Analytics } from '@vercel/analytics/react';

import Image from 'next/image';
import { SocialIcons } from '@/components/socialIcons';

export default function Home() {
  return (
    <Container>
      <Intro>
        <h1 className="title">
          <WrappedText>
            Hi, I am&nbsp;<Image className='profile-picture' src="/images/dom-bw.png" alt="Dom's Profile picture" width={32} height={32} />
          </WrappedText>
          &nbsp;<i>Dom</i></h1>
        <p>
          I am a product designer made in&nbsp;
          <WrappedText>
            <Image src="/images/flag-it.svg" alt="Flag of Italy" width={18} height={14} />Italy,&nbsp;
          </WrappedText>
          <WrappedText>
            based&nbsp;in
            <Image src="/images/flag-gb.svg" alt="Flag of the United Kingdom" width={18} height={14} />London,&nbsp;UK.
          </WrappedText>
        </p>
        <p>
          In the last 8+ years, I have helped start-ups growing and becoming more user-centred, while putting my heart in UX/UI, design systems, user research and prototyping.
        </p>
        <p>
          Do you have an exciting project, work collaboration or idea you want to chat about?&nbsp;
          <WrappedText>I am currently
            <Dot />
            <strong>
              open to new opportunities!
            </strong>
          </WrappedText>
          <br />
          Drop me an email at <strong>hello@domenicoflauto.com</strong>
        </p>
        <SocialIcons />
      </Intro>
      <Blob />
      <Analytics />
    </Container>
  )
}

function Container({ children, debug = false }: { children: React.ReactNode, debug?: boolean }) {
  return (
    <main className="container" style={debug ? { background: "#ffffff15" } : {}}>
      {children}
    </main>
  )
}

function Intro({ children }: { children: React.ReactNode }) {
  return (
    <div className="intro">
      {children}
    </div>
  )
}


function Dot() {
  return (
    <span className="dot" />
  );
}

function Blob() {
  return (
    <Image className="blob" src="/images/blob.svg" height={418} width={467} alt="" />
  )
}

function WrappedText({ children }: { children: React.ReactNode }) {
  return (
    <span className="wrapped-text">
      {children}
    </span>
  )
}