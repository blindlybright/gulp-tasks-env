var gulp       = require('gulp'),
	gutil      = require('gulp-util'),
	sourcemaps = require('gulp-sourcemaps'),
	rename     = require('gulp-rename'),
	plumber    = require('gulp-plumber'),
	less       = require('gulp-less');

function task(params) {
	var l = less();//.on('error', gutil.log);

	return gulp.src(params.filesPaths)
		.pipe(plumber(function(error){
			gutil.log(gutil.colors.red(error.message));
			//gutil.log(error);
            //gutil.beep();
            this.emit('end');
		}))
		.pipe(sourcemaps.init())
		.pipe(l)
		.pipe(sourcemaps.write())
		.pipe(plumber.stop())
		.pipe(gulp.dest(params.dest));
}
module.exports = task;
