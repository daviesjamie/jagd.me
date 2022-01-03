import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  title?: string;
}

export default function Section({ children, title }: Props) {
  return (
    <section>
      {!!title && (
        <h3 className="text-xs uppercase tracking-widest font-extralight lg:text-right lg:-translate-x-full lg:absolute lg:pt-0.5 lg:pr-5 text-zinc-400 dark:text-zinc-600 transition-colors duration-300 ease-in-out before:content-['//_']">
          {title}
        </h3>
      )}
      {children}
    </section>
  );
}
