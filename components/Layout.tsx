import { ReactNode } from 'react';

import ThemeToggle from './ThemeToggle';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <ThemeToggle />

      <div className="flex justify-center items-center min-h-screen">
        <div className="max-w-3xl p-4">{children}</div>
      </div>
    </>
  );
}
