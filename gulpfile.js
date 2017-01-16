const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');
const gulpIf = require('gulp-if');
const inlineCSS = require('gulp-inline-css');
const cheerio = require('gulp-cheerio');

gulp.task('copy', () => {
  // copy files
  gulp
    .src([
      'src/*',
      'src/*/**',
      '!src/**/*.{jpg,gif,png,svg}',
      '!src/**/*.html',
      '!src/views/images',
      '!src/**/*.css'
    ])
    .pipe(gulp.dest('dist'));
});

gulp.task('build', ['copy'], () => {
  gulp
    .src('src/**/*.{jpg,gif,png,svg}')
    .pipe(imagemin())
    .pipe(gulp.dest('dist'));

  gulp
    .src('src/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulpIf(['index.html'], inlineCSS({ removeLinkTags: false })))
    .pipe(gulpIf(['index.html'], cheerio(function($) {
      $('link[media="screen"]').remove();
    })))
    .pipe(gulp.dest('dist'));

  gulp
    .src('src/**/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['build']);
