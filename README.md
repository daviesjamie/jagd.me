# jagd.me

This is the source for [jagd.me](https://jagd.me/).

It is written in plain old HTML, CSS and JS. No templating or markdown here.

Webpack is used to minify the files and adjust the CSS and JS to versions that
are compatible with a greater range of browsers.

There are a few helpful npm commands defined:

 * `npm run build` - minify the files and put the output in the `dist/` folder
 * `npm run lint` - lint the javascript with ESLint, conforming to
 [Airbnb's JS style guide](https://github.com/airbnb/javascript)
 * `npm run format` - format everything with [prettier](https://prettier.io/)
 * `npm run start` - start a local development web server to run the site