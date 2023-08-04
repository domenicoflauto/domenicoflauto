"use client";

import { Analytics } from '@vercel/analytics/react';

import { Header } from '@/components/header';
import { Intro } from '@/components/intro';
import { Work } from '@/components/work';
import { Footer } from '@/components/footer';
import { Container } from '@/components/container';

export default function Home() {
  return (
    <>
      <Container>
        <Header />
        <Intro />
        <Work />
        <Footer />
        <Analytics />
      </Container>
    </>
  )
}