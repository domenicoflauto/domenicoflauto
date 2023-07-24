"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';

import { Intro } from '@/components/intro';
import { Work } from '@/components/work';

export default function Home() {
  return (
    <>
      <Container>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 25 }}
            transition={{ duration: 0.3 }}
          >
            <Intro />
          </motion.div>
        </AnimatePresence>
      </Container>
      <Container>
        <Work />
      </Container>
      <Analytics />
    </>
  )
}

function Container({ children, debug = false }: { children: React.ReactNode, debug?: boolean }) {
  return (
    <section className="container" style={debug ? { background: "#ffffff15" } : {}}>

      {children}

    </section>
  )
}
