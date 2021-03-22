var gulp 		= require('gulp');
var browserSync = require('browser-sync').create();
var sass		= require('gulp-sass');
var reload 		= browserSync.reload;

gulp.task('sass', function() {
	return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
		.pipe(sass())
		.pipe(gulp.dest("src/css"))
		.pipe(browserSync.stream());
});

gulp.task('js', function() {
	return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js'])
		.pipe(gulp.dest("src/js"))
		.pipe(browserSync.stream());
});

gulp.task('server', function() {
	browserSync.init({
		server: {
			baseDir: "./src",
		},
	});
	gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], gulp.series('sass'));
	gulp.watch("**/*.html").on("change", reload);
});

gulp.task('default', gulp.series('js', 'sass'));
