'use strict';

var gulp       = require('gulp');
var babelify   = require('babelify');
var browserify = require('browserify');
var watchify   = require('watchify');
var fs         = require('fs');
var server     = require('gulp-server-livereload');
var sourcemaps = require('gulp-sourcemaps');
var source     = require('vinyl-source-stream');
var buffer     = require('vinyl-buffer');

function compile(watch) {
  var bundler = watchify(browserify('./app/client.js', { debug: true }).transform(babelify));

  function rebundle() {
    bundler.bundle()
      .on('error', function(err) { console.error(err); this.emit('end'); })
      .pipe(source('./bundle.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./build'))
  }

  if (watch) {
    bundler.on('update', function() {
      console.log('-> bundling...');
      rebundle();
    });
  }

  rebundle();
}

function watch() {
  return compile(true);
};

gulp.task('build', function() { return compile(); });
gulp.task('watch', function() { return watch(); });

gulp.task('default', ['watch']);

gulp.task('webserver', function() {
  gulp.src('build')
    .pipe(server({
      defaultFile: 'index.html',
      livereload: true,
      open: true,
      port: 3000
    }));
});

gulp.task('default', ['watch', 'webserver']);