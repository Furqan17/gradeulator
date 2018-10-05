'use strict';

// the purpose of this gulp file is for electron quick reload

var gulp = require('gulp');
var electron = require('electron-connect').server.create();

gulp.task('serve', function () {

  // Start browser process
  electron.start();

  // Restart browser process
  gulp.watch('app.js', electron.restart);

  // Reload renderer process
  gulp.watch(['main.js', 'index.html'], electron.reload);
});