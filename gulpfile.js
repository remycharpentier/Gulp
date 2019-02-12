var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src("app/src/sass/style.scss")
    .pipe(sass())
    .pipe(gulp.dest("app/dist/css"));
})

