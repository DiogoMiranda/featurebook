var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    mocha = require('gulp-mocha');

gulp.task('lint', ['lint:lib', 'lint:public']);
gulp.task('lint:lib', ['lint:src:lib', 'lint:test:lib']);
gulp.task('lint:public', ['lint:src:lib', 'lint:test:lib']);

gulp.task('lint:src:lib', function () {
    return gulp.src('./lib/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

gulp.task('lint:test:lib', function () {
    return gulp.src('./test/lib/**/*.spec.js')
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

gulp.task('lint:src:public', function () {
    return gulp.src('./public/scripts/**.*.js')
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

gulp.task('lint:test:public', function () {
    return gulp.src('./test/public/scripts/**.*.spec.js')
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

gulp.task('test', ['test:lib']);

gulp.task('test:lib', function () {
    return gulp.src('./test/lib/**/*.spec.js', {read: false})
        .pipe(mocha({
            reporter: 'spec'
        }));
});