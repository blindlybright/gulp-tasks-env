var _      = require('underscore'),
	gulp   = require('gulp'),
	fs     = require('fs-extra'),
	debug  = require('gulp-debug'),
	gutil  = require('gulp-util'),
	jade   = require('gulp-jade'),
	prettify = require('gulp-html-prettify'),
	plumber = require('gulp-plumber'),
	rename = require('gulp-rename');

function readJSONs(urls) {
	var i, obj, locals = {};
	for(i = 0; i < urls.length; i++) {
		obj = fs.readFileSync(urls[i], "utf-8");
		locals = _.extend(locals, JSON.parse(obj));
	}
	//console.log(locals);
	return locals;
}

function task(params) {
	var urls = params.data,
		locals = readJSONs(urls),
		j = jade({
			locals:locals
		});//.on('error', gutil.log);

	//console.log(params.filesPaths);
	return gulp.src(params.filesPaths)
		.pipe(plumber(
		/*function(error){
			//gutil.log(gutil.colors.red(error.message));
			gutil.log(error);
            //gutil.beep();
            this.emit('end');
		}*/
		))
		.pipe(j)
		.pipe(plumber.stop())
		//.pipe(debug())
		.pipe(gulp.dest(params.dest));
		// .pipe(prettify({indent_char: ' ', indent_size: 2}))
		// .pipe(rename({suffix:".pretty"}))
		// //.pipe(debug())
		// .pipe(gulp.dest(dest));
};

module.exports = task;
