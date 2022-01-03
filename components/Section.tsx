export default function Section({
  children,
  title,
  ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) {
  return (
    <section {...props}>
      {!!title && (
        <h3 className="text-xs uppercase tracking-widest font-extralight mb-1.5 lg:mb-0 lg:text-right lg:-translate-x-full lg:absolute lg:pt-0.5 lg:pr-5 text-zinc-400 dark:text-zinc-600 transition-colors duration-300 ease-in-out before:content-['//_']">
          {title}
        </h3>
      )}
      {children}
    </section>
  );
}
