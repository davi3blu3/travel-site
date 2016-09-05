var gulp = require('gulp'),
	postcss = require('gulp-postcss'),
	autopre = require('autoprefixer'),
	cssvars = require('postcss-simple-vars'),
	nested = require('postcss-nested'),
	cssImport = require('postcss-import');

gulp.task('styles', function() {
	return gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([cssImport, cssvars, nested, autopre]))
		.pipe(gulp.dest('./app/temp/styles'));
});
