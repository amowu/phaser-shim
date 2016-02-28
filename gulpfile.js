var gulp = require('gulp');

gulp.task('build', function () {
	gulp.src('./node_modules/phaser/dist/**/*')
		.pipe(gulp.dest('./dist'));
	gulp.src('./node_modules/phaser/typescript/**/*')
		.pipe(gulp.dest('./typescript'));
});