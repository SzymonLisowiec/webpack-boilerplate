# Webpack Boilerplate

My simple webpack boilerplate.

## Features

- Supports:
  - CSS
  - SCSS/SASS
  - Images (png, svg, jpg, gif)
  - Fonts (woff, woff2, eot, ttf, otf)
- Backwards compatible (Babel.js)
- Minification
  - HTML (html-minifier)
  - JS (build-in webpack)
  - CSS (build-in webpack)
- Development server with HMR (webpack-dev-server)
- Patch resolving aliases (`~` and `@` to project root)
- CSS Autoprefixing (postcss-loader with autoprefixer)

## Getting Started

```
git clone https://github.com/SzymonLisowiec/webpack-boilerplate.git my-project
cd my-project
npm install

# run in development mode:
npm run dev

# build on production
npm run build

```

## License

MIT License

Copyright (c) 2018 Szymon Lisowiec

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.