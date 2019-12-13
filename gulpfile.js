const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');

sass.compiler = require('node-sass');

gulp.task('scss', function () {
    return gulp.src('./DistributionPackages/Liiioooo.DAProject/Resources/Public/scss/liiioooo-daproject.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./DistributionPackages/Liiioooo.DAProject/Resources/Public/css'));
});

gulp.task('clean', () => {
    return del([
        './DistributionPackages/Liiioooo.DAProject/Resources/Public/css/'
    ]);
});

gulp.task('styles', gulp.series(['clean', 'scss']));

gulp.task('styles:watch', function () {
    gulp.watch('./DistributionPackages/Liiioooo.DAProject/Resources/Public/scss/**/*.scss', (done) => {
        gulp.series(['styles'])(done);
    });
});
