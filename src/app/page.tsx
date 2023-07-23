import { Analytics } from '@vercel/analytics/react';

import { SocialIcons } from '@/components/socialIcons';

export default function Home() {
  return (
    <main>
      <div className="container">
        <h1 className="title">Hi, I am <i>Dom</i></h1>
        <p>
          I am a product designer based in London, UK.
        </p>
        <p>
          I specialise in UX/UI, design systems, user research and prototyping.
          <br />
          In the last 8+ years I have helped start-ups growing and becoming<br />more user-centred.
        </p>
        <p>
          <span className="wrap-dot">
            <span className="dot" />
            <span>
              Open to new opportunities.
            </span>
          </span>
        </p>
        <p>
          Do you have an exciting project, work collaboration or idea you want<br />to chat about? I am available for full-time or freelance work.
          <br />
          Drop me an email at <strong>hello@domenicoflauto.com</strong>
        </p>
        <SocialIcons />
      </div>
      <Analytics />
    </main>
  )
}
