var gulp = require('gulp'),
	watch = require('gulp-watch'),

	// CSS Post processor dependencies
	postcss = require('gulp-postcss'),
	autopre = require('autoprefixer'),
	cssvars = require('postcss-simple-vars'),
	nested = require('postcss-nested'),
	cssImport = require('postcss-import'),


	browserSync = require('browser-sync').create();

// everything revolves around tasks.

gulp.task('default', function() {
	console.log("Hooray - hello gulp task");
});

gulp.task('html', function() {
	console.log("Imagine something useful being done to your html here");
})

gulp.task('styles', function() {
	return gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([cssImport, cssvars, nested, autopre]))
		.pipe(gulp.dest('./app/temp/styles'));
})

gulp.task('watch', function() {

	browserSync.init({
		server: {
			baseDir: "app"
		}
	});

	watch('./app/index.html', function() {
		browserSync.reload();
	});

	watch('./app/assets/styles/**/*.css', function() {
		gulp.start('cssInject');
	})
});

gulp.task('cssInject', ['styles'], function() {
	return gulp.src('./app/temp/styles/styles.css')
		.pipe(browserSync.stream());
});

