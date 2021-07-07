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
        <a href={link.href} title={link.title}>
          {link.title}
        </a>
      </li>
    );
  });

  return (
    <ul>
      {items}
    </ul>
  );
}