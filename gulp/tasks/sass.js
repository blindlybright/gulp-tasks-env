var gulp       = require('gulp'),
	gutil      = require('gulp-util'),
	debug      = require('gulp-debug'),
	sourcemaps = require('gulp-sourcemaps'),
	rename     = require('gulp-rename'),
	sass       = require('gulp-sass');

function task(params) {
	var s = sass({onError:gutil.log});
	return gulp.src(params.filesPaths)
		.pipe(sourcemaps.init())
		.pipe(s)
		.pipe(sourcemaps.write())
		.pipe(debug())
		.pipe(rename(params.filename))
		.pipe(debug())
		.pipe(gulp.dest(params.dest))
		.pipe(debug());
}
module.exports = task;
