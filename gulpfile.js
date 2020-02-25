const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');
const ts = require('gulp-typescript');
const uglify = require('gulp-uglify-es').default;
const sourcemaps = require('gulp-sourcemaps');
const gutil = require('gulp-util');

sass.compiler = require('node-sass');

const isProd = process.argv.includes('--prod');

gulp.task('scss', function () {
    return gulp.src('./DistributionPackages/Liiioooo.DAProject/Resources/Private/scss/liiioooo-daproject.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./DistributionPackages/Liiioooo.DAProject/Resources/Public/css'));
});


gulp.task('clean-styles', () => {
    return del([
        './DistributionPackages/Liiioooo.DAProject/Resources/Public/css/'
    ]);
});

gulp.task('styles', gulp.series(['clean-styles', 'scss']));


gulp.task('ts', () => {
    const tsProject = ts.createProject({
        declaration: false,
        target: 'es5'
    });

    return gulp.src('./DistributionPackages/Liiioooo.DAProject/Resources/Private/ts/**/*.ts')
        .pipe(isProd ? gutil.noop() : sourcemaps.init())
        .pipe(tsProject())
        .pipe(isProd ? uglify() : gutil.noop())
        .pipe(isProd ? gutil.noop() : sourcemaps.write())
        .pipe(gulp.dest('./DistributionPackages/Liiioooo.DAProject/Resources/Public/js'));
});

gulp.task('clean-js', () => {
    return del([
        './DistributionPackages/Liiioooo.DAProject/Resources/Public/js/'
    ]);
});

gulp.task('javascript', gulp.series(['clean-js', 'ts']));

gulp.task('dist', gulp.parallel(['styles', 'javascript']));

gulp.task('styles:watch', function () {
    gulp.watch('./DistributionPackages/Liiioooo.DAProject/Resources/Private/scss/**/*.scss', (done) => {
        gulp.series(['styles'])(done);
    });
});

gulp.task('javascript:watch', function () {
    gulp.watch('./DistributionPackages/Liiioooo.DAProject/Resources/Private/ts/**/*.ts', (done) => {
        gulp.series(['javascript'])(done);
    });
});

gulp.task('watch', gulp.parallel(['styles:watch', 'javascript:watch']));

gulp.task('scss-single', function () {
    return gulp.src('./DistributionPackages/Liiioooo.DAProject/Resources/Private/scss/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./DistributionPackages/Liiioooo.DAProject/Resources/Public/css-single'));
});
