const { src, dest } = require('gulp');

// Config
const path = require('../config/path.js');
const app = require('../config/app.js');

// Plagins
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const size = require('gulp-size');
const concat = require('gulp-concat');
const cssimport = require('gulp-cssimport');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const shorthand = require('gulp-shorthand');
const groupCssMediaQueries = require('gulp-group-css-media-queries');
const webpCss = require('gulp-webp-css');
// CSS
const css = () => {
  return src(path.css.src, { sourcemaps: app.isDev })
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: 'Gulp-CSS',
          message: error.message,
        })),
      })
    )
    .pipe(concat('main.css'))
    .pipe(cssimport())
    .pipe(webpCss())
    .pipe(autoprefixer())
    .pipe(shorthand())
    .pipe(groupCssMediaQueries())
    .pipe(size({ title: 'Before minify CSS' }))
    .pipe(dest(path.css.dest, { sourcemaps: app.isDev }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(csso())
    .pipe(size({ title: 'After minify CSS' }))
    .pipe(dest(path.css.dest, { sourcemaps: app.isDev }));
};

module.exports = css;
