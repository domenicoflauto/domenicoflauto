import { motion } from 'framer-motion';
import styles from './blob.module.css';

export function Blob() {
  return (
    <motion.div
      className={styles.blob}
      style={{ originX: 0.5, originY: 0.5 }}
      initial={{ scale: 1.6, rotate: 0, opacity: 0 }}
      animate={{ scale: 2.4, rotate: 120, opacity: 0.66 }}
      transition={{
        ease: "easeOut",
        delay: 1,
        duration: 1.2,
      }}
    ></motion.div>
  )
}
