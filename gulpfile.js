'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
  return gulp.src('./source/sass/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./source/css'));
});

gulp.task('default', ['sass'], function() {
  gulp.watch('./source/sass/**/*.scss', ['sass']);
});
