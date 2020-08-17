const gulp = require("gulp");
const pug = require("gulp-pug");
const sass = require("gulp-sass");
const rename = require("gulp-rename");
const autoprefixer = require("gulp-autoprefixer");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const babel = require("gulp-babel");
const browserSync = require("browser-sync");

gulp.task("styles", function () {
  return gulp
    .src("src/assets/sass/*.+(sass|scss|css)")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(autoprefixer(["last 15 versions"], { cascade: true }))
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("src/assets/css"))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("scripts", () => {
  return gulp
    .src("src/assets/js/main/**/*.js")
    .pipe(
      babel({
        presets: ["@babel/preset-env"],
      }),
    )
    .pipe(concat("scripts.js"))
    .pipe(uglify())
    .pipe(
      rename({
        suffix: ".min",
      }),
    )
    .pipe(gulp.dest("src/assets/js"))
    .pipe(
      browserSync.reload({
        stream: true,
      }),
    );
});

gulp.task("pug", function () {
  return gulp
    .src("src/pug/*.pug")
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest("src/"))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("browser-sync", () => {
  browserSync.init({
    server: {
      baseDir: "src",
    },
    notify: false,
    open: false,
  });
});

gulp.task("build", async () => {
  gulp.src("src/*.html").pipe(gulp.dest("build/"));
  gulp.src("src/assets/css/*.css").pipe(gulp.dest("build/assets/css/"));
  gulp.src("src/assets/js/*.js").pipe(gulp.dest("build/assets/js/"));
  gulp.src("src/assets/img").pipe(gulp.dest("build/assets/"));
});

gulp.task("watch", function () {
  gulp.watch("src/assets/js/main/**/*.js", gulp.parallel("scripts"));
  gulp.watch("src/assets/sass/**/*.+(sass|scss|css)", gulp.parallel("styles"));
  gulp.watch("src/pug/**/*.pug", gulp.parallel("pug"));
});

gulp.task("default", gulp.parallel("scripts", "styles", "pug", "browser-sync", "watch"));
