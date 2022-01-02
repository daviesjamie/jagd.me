import { ReactNode } from 'react';
import ModeToggle from './ModeToggle';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <ModeToggle />

      <div>
        <div>{children}</div>
      </div>
    </>
  );
}
