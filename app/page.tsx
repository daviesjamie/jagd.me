import Link from '@/components/Link'
import LinkList from '@/components/LinkList'
import Section from '@/components/Section'

export default function Home() {
  return (
    <>
      <Section className="mb-10">
        <span className="text-2xl">{'Hello.'}</span>
      </Section>

      <Section title="Info" className="mb-5">
        <p className="text-sm leading-relaxed">
          {`I'm Jamie Davies, a full-stack developer who likes to mix code, devops, design and coffee to create things that help people. I'm currently modernising legacy government applications with `}
          <Link href="https://www.madetech.com">{'Made Tech'}</Link>
          {`, and previously I fought malware and blocked phishing attacks on iOS at `}
          <Link href="https://www.netcraft.com/">{'Netcraft'}</Link>
          {`.`}
        </p>
      </Section>

      <Section title="Contact">
        <LinkList
          links={[
            { href: 'mailto:hi@jagd.me', title: 'Email' },
            { href: 'https://github.com/daviesjamie/', title: 'GitHub' },
            {
              href: 'https://www.linkedin.com/in/daviesjamie/',
              title: 'LinkedIn',
            },
          ]}
        />
      </Section>
    </>
  )
}
