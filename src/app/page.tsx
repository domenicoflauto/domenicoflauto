// "use client";

import { Analytics } from '@vercel/analytics/react';

import { Header } from '@/components/header';
import { Intro } from '@/components/intro';
import { Work } from '@/components/work';
import { Footer } from '@/components/footer';
import { Container } from '@/components/container';

import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function Home() {

  const client = createClient();
  const page = await client.getSingle("homepage");

  return (
    <>
      <Container>
        <Header />
        <Intro />
        <SliceZone slices={page.data.slices} components={components} />
        <Work />
        <Footer />
        <Analytics />
      </Container>
    </>
  )
}