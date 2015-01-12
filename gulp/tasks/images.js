var gulp     = require('gulp'),
	changed  = require('gulp-changed'),
	debug    = require('gulp-debug'),
	imagemin = require('gulp-imagemin'),
	pngcrush = require('imagemin-pngcrush');

function task(params) {
	return gulp.src(params.filesPaths)
		.pipe(changed(params.dest))        // Ignore unchanged files
	    .pipe(imagemin({            // Optimize
	    	optimizationLevel: 3,
			progressive: true,
	    	interlaced: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngcrush()]
		}))
		//.pipe(debug())
	    .pipe(gulp.dest(params.dest));
}
module.exports = task;
