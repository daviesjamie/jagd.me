import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  id: string;
  title?: string;
}

export default function Section({ children, id, title }: Props) {
  return (
    <section id={id}>
      {!!title && <h3>{title}</h3>}
      {children}
    </section>
  );
}
