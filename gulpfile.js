var gulp = require('gulp'),
    concat = require('gulp-concat');

gulp.task('default', ['dev']);

gulp.task('dev', function () {
    gulp.src([
        'source_code/drago.js',
        'source_code/drago_proto_mousedown.js',
        'source_code/drago_proto_mousemove.js',
        'source_code/drago_proto_mouseup.js',
        'source_code/drago_proto_lib.js'
    ])
        .pipe(concat('drago.js'))
        .pipe(gulp.dest('min/'))
});
