const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');

gulp.task('copy', () => {
  // copy files
  gulp
    .src(['src/*', 'src/*/**', '!src/img', '!src/views/images'])
    .pipe(gulp.dest('dist'));
});

gulp.task('minify', ['copy'], () => {
  gulp
    .src(['src/**/*.jpg','src/**/*.gif', 'src/**/*.png', 'src/**/*.svg'])
    .pipe(imagemin())
    .pipe(gulp.dest('dist'));

  gulp
    .src('src/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));

  gulp
    .src('src/**/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['copy', 'minify']);
