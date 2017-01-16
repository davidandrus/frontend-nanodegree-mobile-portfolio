const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('default', () => {
  // copy files
  gulp
    .src(['src/*', 'src/*/**', '!src/img'])
    .pipe(gulp.dest('dist'));

  gulp
    .src('src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));

  gulp
    .src('src/views/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/views/images'));


});
