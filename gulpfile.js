var gulp = require('gulp'),
    clean = require('gulp-clean'),
    sequence = require('gulp-sequence'),
    closureCompiler = require('google-closure-compiler').gulp(),
    concat = require('gulp-concat');

var paths = {
    src  : 'source_code/',
    dest : 'release/'
};

var releaseName = 'drago.min.js';

// ================================================== GLOBAL TASKS ================================================== //
gulp.task(
    'default',
    sequence('clean', 'concat', 'min', 'copyright')
);

gulp.task(
    'dev',
    sequence('clean', 'concat')
);

/** --------------------------------------------------------------------------------------------------------------------
* clean
*/
gulp.task('clean', function () {
    return gulp.src([paths.dest + '*'], {read: false})
        .pipe(clean());
}); // -END- clean

/** --------------------------------------------------------------------------------------------------------------------
 * concat
 */
gulp.task('concat', function () {
    return gulp.src([
        paths.src + '_class_*.js',
        paths.src + 'drago.js'
    ])
        .pipe(concat(releaseName))
        .pipe(gulp.dest(paths.dest));
}); // -END- concat

/** --------------------------------------------------------------------------------------------------------------------
 * min
 */
gulp.task('min', function () {
    return gulp.src([paths.dest + releaseName])
        .pipe(closureCompiler({
            compilation_level: 'ADVANCED',
            warning_level: 'VERBOSE',
            language_in: 'ECMASCRIPT5_STRICT',
            language_out: 'ECMASCRIPT5_STRICT',
            output_wrapper: '(function(){"use strict";try{%output%}catch(e){console.dir(e)}})();',
            js_output_file: releaseName
        }))
        .pipe(gulp.dest(paths.dest));
}); // -END- min

/** --------------------------------------------------------------------------------------------------------------------
 * copyright
 */
gulp.task('copyright', function () {
    return gulp.src([paths.src + '__copyright.js', paths.dest + releaseName])
        .pipe(concat(releaseName))
        .pipe(gulp.dest(paths.dest));
}); // -END- copyright
