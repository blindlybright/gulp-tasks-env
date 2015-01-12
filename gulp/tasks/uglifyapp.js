var gulp     = require('gulp'),
	concat   = require('gulp-concat')
	debug    = require('gulp-debug')
	uglify   = require('gulp-uglifyjs');

function task(params) {
	return gulp.src(params.filesPaths)
		//.pipe(debug())
		.pipe(concat(params.filename))
		//.pipe(debug({verbose: true}))
		.pipe(uglify(params.filename, {
			outSourceMap:false
		}))
		.pipe(gulp.dest(params.dest));
}
module.exports = task;
