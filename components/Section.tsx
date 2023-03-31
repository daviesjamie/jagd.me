export default function Section({
  children,
  title,
  ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) {
  return (
    <section {...props}>
      {!!title && (
        <h3 className="mb-1.5 text-xs font-extralight uppercase tracking-widest text-zinc-400 transition-colors duration-300 ease-in-out before:content-['//_'] dark:text-zinc-600 lg:absolute lg:mb-0 lg:-translate-x-full lg:pr-5 lg:pt-0.5 lg:text-right">
          {title}
        </h3>
      )}
      {children}
    </section>
  )
}
