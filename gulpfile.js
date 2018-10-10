'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
//    uglify = require('gulp-uglify'),
//    sass = require('gulp-sass'),
//    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger')
//    cssmin = require('gulp-minify-css'),
//    imagemin = require('gulp-imagemin'),
//    pngquant = require('imagemin-pngquant'),
//    rimraf = require('rimraf'),
//    browserSync = require("browser-sync")
   // reload = browserSync.reload;
    ;


var path = {
    build: { //Тут мы укажем куда складывать готовые после сборки файлы
   //     html: 'build/',
        js:    'public/js/',
        css:   'public/css/',
        img:   'public/img/',
        fonts: 'public/fonts/',
        html: 'public/'
    },
    src: { //Пути откуда брать исходники
   //     html: 'src/*.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
        js:    'src/js/index.js',//В стилях и скриптах нам понадобятся только main файлы
        style: 'src/style/main.css',
        img:   'src/img/**/*.*', //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
        fonts: 'src/fonts/**/*.*',
        html:  'src/index.html'

    },
    watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        style: 'src/style/**/*.css',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    clean: './build',
    server: {js:'../ServerWDC/ISaWeb2/static/js/scadaClient/scripts/'}
};

function clean() {
    // You can use multiple globbing patterns as you would with `gulp.src`,
    // for example if you are using del 2.0 or above, return its promise
    return del([ 'assets' ]);
}

function html() {
    return gulp.src(path.src.html) //Найдем наш main файл
    //.pipe(rigger()) //Прогоним через rigger
    // .pipe(sourcemaps.init()) //Инициализируем sourcemap
    // .pipe(uglify()) //Сожмем наш js
    // .pipe(sourcemaps.write()) //Пропишем карты
        .pipe(gulp.dest(path.build.html));
}

function js() {
    return gulp.src(path.src.js) //Найдем наш main файл
        .pipe(rigger()) //Прогоним через rigger
        // .pipe(sourcemaps.init()) //Инициализируем sourcemap
        // .pipe(uglify()) //Сожмем наш js
        // .pipe(sourcemaps.write()) //Пропишем карты
        .pipe(gulp.dest(path.build.js)); //Выплюнем готовый файл в build
    // .pipe(reload({stream: true})); //И перезагрузим сервер
}

function all() {
    html();
    js();
}


/*
 * You can use CommonJS `exports` module notation to declare tasks
 */
exports.clean = clean;
exports.html = html;
//exports.styles = styles;
exports.js = js;
exports.all = all;
//exports.watch = watch;

//var build = gulp.series(clean, [js, html]);

/*
 * You can still use `gulp.task` to expose tasks
 */
//gulp.task('build', build);
gulp.task('js', js);
gulp.task('html', html);
gulp.task('all', all);

//gulp.task('all', gulp.series('js:build', 'html:build'));
//gulp.task('js:all', gulp.series('js:build', 'js:server'));

