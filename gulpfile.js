var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task("nodemon", function () {
    nodemon({
        script: "./app.js",
        ext: 'js',
        ignore: ['node_modules'],
        watch: '*'
    }).on('start', function () {
        console.log('start========');
    })
});

gulp.task('default', ['nodemon']);