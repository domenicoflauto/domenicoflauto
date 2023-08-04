import styles from './section.module.css';

export function Section({ children, className, id }:
  { children: React.ReactNode, className?: string, id?: string }) {
  return (
    <section id={id} className={`${className} ${styles.section}`}>
      {children}
    </section>
  )
}