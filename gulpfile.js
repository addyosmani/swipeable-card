var gulp = require('gulp');
// var es6ModuleTranspiler = require('gulp-es6-module-transpiler');
var rename = require('gulp-rename');
var traceur = require('gulp-traceur');

gulp.task('default', function () {
    return gulp.src(['swipeable-card-es6.js'])
         .pipe(traceur())
        // .pipe(es6ModuleTranspiler({ type: 'amd' }))
        .pipe(rename('swipeable-card.js'))
        .pipe(gulp.dest('.'));
});