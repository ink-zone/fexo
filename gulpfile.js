'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var reveasy = require('gulp-rev-easy');
var path = require('path');

gulp.task('default', ['sass'], function() {
  gulp.watch('./source/sass/**/*.scss', ['sass']);
});

gulp.task('sass', function() {
  return gulp.src('./source/sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./source/css'));
});


gulp.task('rev', function(argument) {
  gulp.src('./layout/_partial/style.ejs')
    .pipe(reveasy({
      base: path.join(process.cwd(), 'source'),
      fileTypes: ['css', 'js']
    }))
    .pipe(gulp.dest('./layout/_partial'))
})
