# jagd.me

This is the source for [jagd.me](https://jagd.me/).

It's a pretty basic typescript [Next.js](https://nextjs.org) application that uses vanilla [Tailwind CSS](https://tailwindcss.com) for styling.

[Autoprefixer](https://github.com/postcss/autoprefixer) is used to automatically add vendor prefixes to CSS rules that need it, and [cssnano](https://cssnano.co) is used to minify the CSS for production builds.

There are a few helpful npm commands defined:

- `npm run lint` - lint the javascript with ESLint, conforming to
  [Airbnb's JS style guide](https://github.com/airbnb/javascript)
- `npm run format` - format everything with [prettier](https://prettier.io/)
- `npm run dev` - start a local development web server to run the site
- `npm run build` - build a production version of the application
- `npm run start` - spin up a local web server to serve the latest production build
