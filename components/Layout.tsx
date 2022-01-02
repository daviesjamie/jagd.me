import { ReactNode } from 'react';

import ThemeToggle from './ThemeToggle';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <ThemeToggle />

      <div>
        <div>{children}</div>
      </div>
    </>
  );
}
