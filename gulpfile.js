
const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat');


gulp.task('sass', function () {
    gulp.src('./assets/src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(concat('main.css'))
        .pipe(gulp.dest('./assets/public/css'))

});

gulp.task('watch', function(){
    gulp.watch('./assets/src/sass/**/*.scss', ['sass']);
})

