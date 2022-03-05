const pathSrc = "./src";
const pathDest = "./public";

module.exports = {
  root: pathDest,

  html: {
    src: pathSrc + "/html/*.html",
    watch: pathSrc + "/html/**/*.html",
    dest: pathDest,
  },
  css: {
    src: pathSrc + "/css/*.css",
    watch: pathSrc + "/css/**/*.css",
    dest: pathDest + "/css",
  },
  scss: {
    src: pathSrc + "/scss/main.{scss,sass}",
    watch: pathSrc + "/scss/**/*.{scss,sass}",
    dest: pathDest + "/css",
  },
  js: {
    src: pathSrc + "/js/main.js",
    watch: pathSrc + "/js/**/*.js",
    dest: pathDest + "/js",
  },
  img: {
    src: pathSrc + "/img/*.{jpg,png,jpeg,svg,webp,gif}",
    watch: pathSrc + "/img/**/*.{jpg,png,jpeg,svg,gif}",
    dest: pathDest + "/img",
  },
  fonts: {
    src: pathSrc + "/fonts/*.{ttf, otf, woff, woff2, svg, eot, otc, ttc}",
    watch: pathSrc + "/fonts/**/*.{ttf, otf, woff, woff2, svg, eot, otc, ttc}",
    dest: pathDest + "/fonts",
  },
};
