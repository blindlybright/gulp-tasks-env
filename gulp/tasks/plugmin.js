var gulp   = require('gulp'),
	jsmin  = require('gulp-jsmin'),
	rename = require('gulp-rename'),
	debug  = require('gulp-debug');

function task(params) {
	return gulp.src(params.filesPaths)
	 	//.pipe(debug())
		.pipe(jsmin())
		.pipe(rename({
			suffix:'.min'
		}))
	 	//.pipe(debug())
		.pipe(gulp.dest(params.dest));
}
module.exports = task;
