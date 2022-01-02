interface Link {
  href: string;
  title: string;
}

interface Props {
  links: Link[];
}

export default function LinkList({ links }: Props) {
  const items = links.map((link) => {
    return (
      <li key={link.title}>
        <a
          href={link.href}
          title={link.title}
          className="text-sm relative after:bg-zinc-400 after:dark:bg-zinc-600 after:-bottom-0.5 after:h-px after:absolute after:left-0 after:right-0"
        >
          {link.title}
        </a>
      </li>
    );
  });

  return <ul>{items}</ul>;
}
