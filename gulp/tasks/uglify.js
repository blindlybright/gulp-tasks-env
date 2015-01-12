var gulp     = require('gulp'),
	uglify   = require('gulp-uglify'),
	rename   = require('gulp-rename'),
	debug    = require('gulp-debug');

function task(params) {
	return gulp.src(params.filesPaths)
		.pipe(uglify({
			outSourceMap:false
		}))
		//.pipe(debug())
		.pipe(rename({
			suffix:'.min'
		}))
		.pipe(gulp.dest(params.dest))
}
module.exports = task;
