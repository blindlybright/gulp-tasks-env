var gulp       = require('gulp'),
	cleancss   = require('gulp-clean-css'),
	concat     = require('gulp-concat'),
	debug      = require('gulp-debug');

function task(params) {
	return gulp.src(params.filesPaths)
		//.pipe(debug())
		.pipe(concat(params.filename))
		.pipe(cleancss({
			//keepBreaks:false,
			keepSpecialComments:0
		}))
		.pipe(gulp.dest(params.dest));
}
module.exports = task;
