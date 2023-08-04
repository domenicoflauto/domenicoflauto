import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { motion, Variants } from 'framer-motion';
import { DuffelLogo, EigenLogo } from '.';
import Image from 'next/image';

import {
  IconArrow,
  IconBook,
  IconBook2,
  IconBrain,
  IconEnvelope
} from '@/components/Icon';

import styles from './workItem.module.css';

export const ItemLink = ({ url, teaser }:
  { url?: string, teaser?: number }) => {
  const Teasers = [
    <span key="teaser1" className={styles.itemLink}>
      <IconBook />
      Curious about the project details? Feel free to request a project walkthrough!
    </span>,
    <span key="teaser2" className={styles.itemLink}>
      <IconEnvelope />
      Intrigued? You&apos;re just one message away from the complete story!
    </span>,
    <span key="teaser3" className={styles.itemLink}>
      <IconBook2 />
      Hungry for more details? I&apos;ve got a full menu ready!
    </span>,
    <span key="teaser4" className={styles.itemLink}>
      <IconBrain />
      Know what I am talking about? Let&apos;s talk about it over coffee!
    </span>,
  ]

  if (url) {
    return (
      <a className={styles.itemLink} target="e" href={url}>
        Read the article <IconArrow />
      </a>
    )
  } else if (teaser) {
    return (
      Teasers[teaser - 1]
    )
  } else return null;
}

export enum WorkType {
  Project,
  Article,
  Patent
}

export function WorkItem(
  {
    type,
    title,
    description,
    image,
    logo,
    id,
    url,
    teaser
  }: {
    type: WorkType,
    id?: string,
    title: string,
    description: string,
    image: StaticImport,
    logo: string,
    url?: string,
    callToAction?: string | JSX.Element
    teaser?: number
  }) {
  const renderLogo = () => {
    if (logo == "duffel") return <DuffelLogo />
    else if (logo === "eigen") return <EigenLogo />
    else return null;
  }

  const workItemVariant: Variants = {
    offscreen: {
      y: 20,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div
      className={styles.workItem}
      initial={`${id === "stays" ? "onscreen" : "offscreen"}`}
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      variants={workItemVariant}
    >
      <Image
        className={styles.workImage}
        src={image}
        alt=""

        style={{ width: '100%', height: 'auto' }}
      />
      <div className={styles.workDescription}>
        {renderLogo()}
        <h2 dangerouslySetInnerHTML={{ __html: title }} />
        <p dangerouslySetInnerHTML={{ __html: description }} />

        {type === WorkType.Project && <ItemLink teaser={teaser} />}
        {type === WorkType.Article && <ItemLink url={url} />}
      </div>
    </motion.div>
  )
}
