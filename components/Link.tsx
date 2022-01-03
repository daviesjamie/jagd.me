const Link = ({
  children,
  ...props
}: React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>) => (
  <a
    {...props}
    className={`relative after:bg-zinc-400 after:dark:bg-zinc-600 after:hover:bg-zinc-600 after:hover:dark:bg-zinc-400 after:-bottom-0.5 after:h-px after:absolute after:left-0 after:right-0 ${props.className}`}
  >
    {children}
  </a>
);

export default Link;
