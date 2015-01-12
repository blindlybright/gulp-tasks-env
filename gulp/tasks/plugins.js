var gulp   = require('gulp'),
	uglify = require('gulp-uglifyjs'),
	concat = require('gulp-concat'),
	debug  = require('gulp-debug');

function task(params) {
	return gulp.src(params.filesPaths)
		//.pipe(debug())
		.pipe(concat(params.filename))
		//.pipe(debug())
/*		.pipe(uglify({
			outSourceMap:false
		}))
*/		.pipe(gulp.dest(params.dest));
}
module.exports = task;
