var gulp = require('gulp'),
    clean = require('gulp-clean'),
    sequence = require('gulp-sequence'),
    concat = require('gulp-concat');

gulp.task('default', sequence('clean_release', ['build_release']));

gulp.task('dev', ['dev']);

gulp.task('clean_release', function () {
    return gulp.src(['release/*'], {read: false})
        .pipe(clean());
});

gulp.task('build_release', function () {
    gulp.src([
        'source_code/copyright.js',
        'min/drago.min.js'
    ])
        .pipe(concat('drago.min.js'))
        .pipe(gulp.dest('release/'))
});

gulp.task('dev', function () {
    gulp.src([
        'source_code/drago.js',
        'source_code/drago_proto_mousedown.js',
        'source_code/drago_proto_mousemove.js',
        'source_code/drago_proto_mouseup.js',
        'source_code/drago_proto_lib.js'
    ])
        .pipe(concat('drago.js'))
        .pipe(gulp.dest('release/'))
});
