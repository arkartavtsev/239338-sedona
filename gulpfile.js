"use strict";


var gulp = require("gulp");
var rename = require("gulp-rename");
var del = require("del");
var run = require("run-sequence");
var server = require("browser-sync").create();

var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");

var plumber = require("gulp-plumber");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var cssMinify = require("gulp-csso");

var concat = require("gulp-concat");
var jsMinify = require("gulp-uglify");

var imgMinify = require("gulp-imagemin");
var webpCreate = require("gulp-webp");


gulp.task("copy", function() {
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/img/**",
    "source/js/**",
    "source/*.html"
  ], {
    base: "source"
  })
  .pipe(gulp.dest("build"));
});


gulp.task("clean", function() {
  return del("build");
});


gulp.task("html", function() {
  return gulp.src("source/*.html")
    .pipe(posthtml([
      include()
    ]))
    .pipe(gulp.dest("build"));
});


gulp.task("style", function() {
  gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(cssMinify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});


gulp.task("script", function() {
  return gulp.src("source/js/*.js")
    .pipe(concat("script.js"))
    .pipe(jsMinify("script.js"))
    .pipe(gulp.dest("build/js"))
});


gulp.task("images", function() {
  return gulp.src("build/img/**/*.{png,jpg,svg}")
    .pipe(imgMinify([
      imgMinify.optipng(
        {optimizationLevel: 3}
      ),
      imgMinify.jpegtran(
        {progressive: true}
      ),
      imgMinify.svgo({
        plugins: [
          {removeViewBox: false},
          {convertPathData: false},
          {mergePaths: false}
        ]
      })
    ]))
    .pipe(gulp.dest("build/img"));
});


gulp.task("webp", function() {
  return gulp.src("build/img/**/*.{png,jpg}")
    .pipe(webpCreate(
      {quality: 80}
    ))
    .pipe(gulp.dest("build/img"));
});


gulp.task("build", function(done) {
  run(
    "clean",
    "copy",
    "html",
    "style",
    "script",
    "images",
    "webp",
    done
  );
});


gulp.task("serve", function() {
  server.init({
    browser: "chrome",
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/sass/**/*.{scss,sass}", ["style"]);
  gulp.watch("source/*.html", ["html"]).on("change", server.reload);
  gulp.watch("source/js/*.js", ["script"]).on("change", server.reload);
});
