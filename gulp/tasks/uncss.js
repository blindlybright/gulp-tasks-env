var config     = require('../../config').gulp,
	confuncss  = config.uncss
	pages      = confuncss.pages,
	gulp       = require('gulp'),
	uncss      = require('gulp-uncss'),
	rename     = require('gulp-rename'),
	//concat     = require('gulp-concat'),
	cleancss   = require('gulp-clean-css'),
	debug      = require('gulp-debug');

function task(params) {
	//console.log(process.env.PWD);
	return gulp.src(params.filesPaths)
//		.pipe(debug())
		.pipe(rename({suffix: ".min"}))
		//.pipe(concat(filename))
//		.pipe(debug())
		.pipe(uncss({
            html: pages
        }))
		//.pipe(debug())
		.pipe(cleancss({
			//keepBreaks:false,
			keepSpecialComments:0
		}))
		.pipe(gulp.dest(params.dest));
}
module.exports = task;
