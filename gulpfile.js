var gulp = require('gulp');
var webpack = require('webpack-stream');
var watch = require('gulp-watch');
var batch = require('gulp-batch');
var connect = require('gulp-connect');
var copy = require('gulp-copy');
var webpackconfig = require('./webpack.config.js');
var uglifier = require('gulp-uglify');

// Run webpack
gulp.task('webpack', function(){
  webpackconfig.output.filename = 'app.js';
  return gulp.src('src/main.js')
    .pipe(webpack(webpackconfig))
    .pipe(gulp.dest('dist/js/'))
    .pipe(connect.reload());
});

gulp.task('webpack.build', function(){
  webpackconfig.watch = false;
  return gulp.src('src/main.js')
      .pipe(webpack(webpackconfig))
      .pipe(uglifier())
      .pipe(gulp.dest('dist/js/'))
});

// Run webpack
gulp.task('webpack.testprod', function(){
  return gulp.src('src/main.js')
      .pipe(webpack(webpackconfig))
      .pipe(uglifier())
      .pipe(gulp.dest('dist/js/'))
      .pipe(connect.reload());
});

// Run the webserver
gulp.task('webserver', function() {
  connect.server({
    livereload: true,
    root: 'dist'
  });
});

// Default task
gulp.task('default', ['build']);

gulp.task('watch', ['webpack', 'webserver']);
gulp.task('build', ['webpack.build']);
gulp.task('test-prod', ['webpack.testprod', 'webserver']);
