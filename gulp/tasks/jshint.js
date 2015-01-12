var gulp   = require('gulp'),
	jshint = require('gulp-jshint'),
	debug  = require('gulp-debug');

function task(params) {
	return gulp.src(params.filesPaths)
		//.pipe(debug())
		.pipe(jshint())
		.pipe(jshint.reporter('default'));

}
module.exports = task;
