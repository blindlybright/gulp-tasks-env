// jslint node: true
// "use strict";

var config      = require("./config").gulp,
	gulp        = require('./gulp')(config.tasksToLoad),
	taskListing = require('gulp-task-listing');

gulp.task('help',         taskListing.withFilters(/:/));
gulp.task('helpsimp',     taskListing);
gulp.task('test',         ['jshint']);
gulp.task('watch',        ['watch:templates', 'watch:less', 'watch:images', 'watch:plugins']);
gulp.task('compile',      ['templates', 'csscompile', 'uglifyapp']);
gulp.task('compile-full', ['compile', 'images']);
gulp.task('default',      ['watch', 'templates', 'less', 'images', 'plugins', 'updatedevdata']);
