'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var reveasy = require('gulp-rev-easy');
var path = require('path');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('default', ['sass', 'scripts'], function() {
  gulp.watch('./source/sass/**/*.scss', ['sass']);
  gulp.watch('./source/js/**/*.js', ['scripts']);
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

gulp.task('scripts', function() {
  var files = [
    './source/js/fastclick.js',
    './source/js/scroll-spy.js',
    './source/js/zenscroll.js',
    './source/js/util.js',
    './source/js/app.js'
  ];

  return gulp.src(files)
    .pipe(concat('bundle.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./source/js'));
});

gulp.task('rev', function(argument) {
  gulp.src('./layout/_partial/style.ejs')
    .pipe(reveasy({
      base: path.join(process.cwd(), 'source'),
      fileTypes: ['css', 'js']
    }))
    .pipe(gulp.dest('./layout/_partial'))
})
