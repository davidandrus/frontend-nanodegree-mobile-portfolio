const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');

gulp.task('default', () => {
  // copy files
  gulp
    .src(['src/*', 'src/*/**', '!src/img', '!src/views/images'])
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

gulp.task('minify', () => {
  gulp
    .src('src/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));

    
})
