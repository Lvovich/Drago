var gulp = require('gulp'),
    clean = require('gulp-clean'),
    sequence = require('gulp-sequence'),
    closureCompiler = require('google-closure-compiler').gulp(),
    concat = require('gulp-concat');

gulp.task('default', sequence('clean', 'google_min', 'build_release'));

gulp.task('dev', ['dev']);

gulp.task('clean', function () {
    return gulp.src(['release/*', 'min/*'], {read: false})
        .pipe(clean());
});

gulp.task('google_min', function () {
    return gulp.src([
            'source_code/drago.js',
            'source_code/drago_proto_mousedown.js',
            'source_code/drago_proto_mousemove.js',
            'source_code/drago_proto_mouseup.js',
            'source_code/drago_proto_lib.js'
        ])
        .pipe(closureCompiler({
            compilation_level: 'ADVANCED',
            warning_level: 'VERBOSE',
            language_in: 'ECMASCRIPT5_STRICT',
            language_out: 'ECMASCRIPT5_STRICT',
            output_wrapper: '(function(){%output%})();',
            js_output_file: 'drago.min.js'
        }))
        .pipe(gulp.dest('min/'));
});

gulp.task('build_release', function () {
    return gulp.src([
        'source_code/copyright.js',
        'min/drago.min.js'
    ])
        .pipe(concat('drago.min.js'))
        .pipe(gulp.dest('release/'));
});

gulp.task('dev', function () {
    return gulp.src([
            'source_code/drago.js',
            'source_code/drago_proto_mousedown.js',
            'source_code/drago_proto_mousemove.js',
            'source_code/drago_proto_mouseup.js',
            'source_code/drago_proto_lib.js'
        ])
        .pipe(concat('drago.js'))
        .pipe(gulp.dest('release/'));
});
