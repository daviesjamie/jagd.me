import Link from "./Link";

interface LinkProps {
  href: string;
  title: string;
}

interface Props {
  links: LinkProps[];
}

export default function LinkList({ links }: Props) {
  const items = links.map((link) => {
    return (
      <li key={link.title}>
        <Link href={link.href} title={link.title}>
          {link.title}
        </Link>
      </li>
    );
  });

  return <ul className="text-sm">{items}</ul>;
}
