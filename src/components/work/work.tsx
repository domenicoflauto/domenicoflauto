"use client";

import { motion } from 'framer-motion';
import { Section } from '@/components/section';
import { WorkItem, WorkType } from './WorkItem';

import { WORK, ARTICLES, PATENTS } from './data';

import styles from './work.module.css';

export function Work() {
  return (
    <Section id="work">
      <motion.div
        className={styles.workWrapper}
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 25 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <WorkSection title="Selected work">
          {
            WORK.map((work, index) => {
              return (
                <WorkItem
                  type={WorkType.Project}
                  key={index}
                  id={work.id}
                  title={work.title}
                  description={work.description}
                  image={work.image}
                  logo={work.logo}
                  teaser={work.teaser}
                />
              )
            }
            )
          }
        </WorkSection>
        <WorkSection title="Articles">
          {
            ARTICLES.map((article, index) => {
              return (
                <WorkItem
                  type={WorkType.Article}
                  key={index}
                  id={article.id}
                  title={article.title}
                  description={article.description}
                  image={article.image}
                  logo={article.logo}
                  url={article.url}
                />
              )
            }
            )
          }
        </WorkSection>
        <WorkSection title="Patents">
          {
            PATENTS.map((patent, index) => {
              return (
                <WorkItem
                  type={WorkType.Patent}
                  key={index}
                  id={patent.id}
                  title={patent.title}
                  description={patent.description}
                  image={patent.image}
                  logo={patent.logo}
                />
              )
            }
            )
          }
        </WorkSection>
      </motion.div>
    </Section>
  )
}

function WorkSection({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <section className={styles.workSection}>
      <h1 className="title">{title}</h1>
      <div className={styles.workList}>
        {children}
      </div>
    </section>
  )
}