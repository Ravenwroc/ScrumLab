var gulp = require("gulp");
var jshint = require("gulp-jshint");
var sass = require("gulp-sass");
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create()
// gulp.task("siema", function (done) {
//     console.log("No siema ziomeczku co dla Ciebie zrobić ?");
//     done();
// })

gulp.task("parseJS", function () {
    return gulp.src("js/*.js")
        .pipe(jshint())
        .pipe(jshint.reporter("default"))
})

gulp.task ("sass", function () {
    return gulp.src("scss/main.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({errLogToConsole: true}))
        .pipe(sourcemaps.write())
        .pipe(sass({
            outputStyle: 'nested',
            sourceComments: 'map'
        }))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.stream())

})

gulp.task("watch", function() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
    gulp.watch("scss/**/*.scss", gulp.series("sass"));
    gulp.watch('./*.html').on('change', browserSync.reload)

});

