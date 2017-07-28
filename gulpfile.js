var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var webserver = require('gulp-webserver');

//concatenar archivos js
gulp.task('script', function(){
	gulp.src(['node_modules/jquery/dist/jquery.js', 'node_modules/materialize-css/dist/js/materialize.js', 'assets/js/*.js'])
		.pipe(concat('script.js'))
		//carpeta dist
		.pipe(gulp.dest('dist/js/'));
});

//concatenar y minificar archivo main.scss
gulp.task('style', function(){
	gulp.src(['node_modules/materialize-css/dist/css/materialize.css', 'assets/sass/main.scss'])
		.pipe(sass().on('error', sass.logError))
		.pipe(minifyCSS())
		.pipe(concat('style.min.css'))
		.pipe(gulp.dest('dist/css/'));
});


//crear servidor web de desarrollo en localhost puerto 8000
gulp.task('webserver', function(){
	gulp.src('../pinterest/')
		.pipe(webserver({
			fallback: 'index.html',
			livereload: true,
			directoryListing: false,
			open: true
		}));
});

//ver cambios
gulp.task('watch', function(){
	gulp.watch('assets/sass/*.scss', ['style']);
});

gulp.task('default', ['script', 'style', 'webserver', 'watch']);