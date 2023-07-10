const Link = ({
  children,
  ...props
}: React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>) => (
  <a
    {...props}
    className={`relative after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-px after:bg-zinc-400 after:hover:bg-zinc-600 after:dark:bg-zinc-500 after:hover:dark:bg-zinc-300 ${props.className}`}
  >
    {children}
  </a>
)

export default Link
