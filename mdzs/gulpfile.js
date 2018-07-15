var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var minHtml = require('gulp-htmlmin');
var del = require('del');

var paths = {
  htmls: {
    src: 'index.html',
    dest: './dist/'
  },
  styles: {
    src: ['./css/reset.css', './css/index.css'],
    dest: './dist/'
  },
  scripts: {
    src: ['./js/*.js'],
    dest: './dist/'
  },
  vendor: {
    src: ['./js/vendor/*.js'],
    dest: './dist/'
  },
  img: {
    src: ['./img/**/*'],
    dest: './dist/img'
  }
};

/* Not all tasks need to use streams, a gulpfile is just another node program
 * and you can use all packages available on npm, but it must return either a
 * Promise, a Stream or take a callback and call it
 */
function clean() {
  // You can use multiple globbing patterns as you would with `gulp.src`,
  // for example if you are using del 2.0 or above, return its promise
  return del(['./dist']);
}

/*
 * Define our tasks using plain functions
 */

function htmls() {
  var options = {
    removeComments: true, //清除HTML注释
    collapseWhitespace: true, //压缩HTML
    collapseBooleanAttributes: true, //省略布尔属性的值 <input checked="true"/> ==> <input checked />
    removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
    removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
    removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
    minifyJS: true, //压缩页面JS
    minifyCSS: true //压缩页面CSS
  };
  return gulp.src(paths.htmls.src)
    .pipe(minHtml(options))
    .pipe(gulp.dest(paths.htmls.dest));
}

function styles() {
  return gulp.src(paths.styles.src)
    .pipe(cleanCSS())
    // pass in options to the stream
    .pipe(concat('index.min.css'))
    .pipe(gulp.dest(paths.styles.dest));
}

function scripts() {
  return gulp.src(paths.scripts.src, {
      sourcemaps: true
    })
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat('index.min.js'))
    .pipe(gulp.dest(paths.scripts.dest));
}

function vendor() {
  return gulp.src(paths.vendor.src, {
      sourcemaps: true
    })
    .pipe(concat('vendor.min.js'))
    .pipe(gulp.dest(paths.vendor.dest));
}

function img() {
  return gulp.src(paths.img.src)
    .pipe(gulp.dest(paths.img.dest));
}

function watch() {
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.vender.src, vendor);
  gulp.watch(paths.styles.src, styles);
}

// watch();

/*
 * Specify if tasks run in series or parallel using `gulp.series` and `gulp.parallel`
 */
var build = gulp.series(clean, gulp.parallel(htmls, styles, scripts, vendor, img));

/*
 * You can still use `gulp.task` to expose tasks
 */
gulp.task('build', build);

/*
 * Define default task that can be called by just running `gulp` from cli
 */
gulp.task('default', build);
