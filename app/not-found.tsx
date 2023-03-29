// <title>{'404 | Jamie Davies'}</title>

import Link from '@/components/Link'

export const metadata = {
  title: '404',
}

export default function NotFound() {
  return (
    <>
      <h1 className="mb-6 text-3xl">{'404'}</h1>

      <p className="text-sm">{"This isn't the page you're looking for."}</p>

      <p className="text-sm">
        <Link href="/">{'Return'}</Link>
      </p>
    </>
  )
}
