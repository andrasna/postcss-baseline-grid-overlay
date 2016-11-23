# PostCSS Baseline Grid Overlay [![Build Status][ci-img]][ci]

[PostCSS] plugin to check vertical rhythm by using a baseline grid overlay created with the linear-gradient function.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/andrasna/postcss-baseline-grid-overlay.svg
[ci]:      https://travis-ci.org/andrasna/postcss-baseline-grid-overlay

```css
body {
    baseline-grid-overlay: 24px hsla(280, 50%, 30%, .3) 9999;
}
```
###### Outputs:

```css
body {
    position: relative;
}

body::after {
    background: linear-gradient(to bottom, hsla(280, 50%, 30%, .3), hsla(280, 50%, 30%, .3) 1px, transparent 1px, transparent);
    background-size: 100% 24px;
    bottom: 0;
    content: "";
    display: block;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 9999;
}
```
You can see what the output looks like on CodePen: [link](http://codepen.io/andrasnagy/pen/yVObgx)

The values for the `baseline-grid-overlay` property are:

`<base-line-height> [, <line-color> [, <z-index>]]`

The `line-color` and `z-index` values default to `rgba(0, 0, 0, .25)` and `9999` if omitted.

## Usage

```js
postcss([ require('postcss-baseline-grid-overlay') ])
```

See [PostCSS] docs for examples for your environment.
