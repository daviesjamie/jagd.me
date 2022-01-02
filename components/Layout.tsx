import { ReactNode } from 'react';
import ModeToggle from './ModeToggle';
import styles from "../styles/Layout.module.css";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <ModeToggle />

      <div className={styles.container}>
        <div className={styles.wrapper}>{children}</div>
      </div>
    </>
  );
}
