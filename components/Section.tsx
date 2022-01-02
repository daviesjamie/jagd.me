import { ReactNode } from 'react';
import styles from "../styles/Section.module.css";

interface Props {
  children: ReactNode;
  id: string;
  title?: string;
}

export default function Section({ children, id, title }: Props) {
  return (
    <section id={id} className={styles.section}>
      {!!title && <h3 className={styles.sectionTitle}>{title}</h3>}
      {children}
    </section>
  );
}
