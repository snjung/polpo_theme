// Packages used
var 
    gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    uglify      = require('gulp-uglify'),
    concat      = require('gulp-concat'),
    rename      = require('gulp-rename'),
    chmod       = require('gulp-chmod');

// Definition of some base folders
var
    source = 'src/',
    dest = 'dist/',
    publish = '../Resources/Public';

// Bootstrap scss sources
var bootstrapSass = {
        in: './node_modules/bootstrap/scss'
    };

// CSS source files: scss
var scss = {
  in : source + 'scss/main.scss',
  out: dest + 'css/',
  watch: source + 'scss/**/*',
    sassOpts: {
      outputStyle: 'nested',
      precison: 3,
      errLogToConsole: true,
      includePaths: [bootstrapSass.in]
  }
};

// JS source files
var js = {
  in : source + 'js/*.js',
  out: dest + 'js/'
};


// Compiles sass-files into CSS and moves it to Distribution folder
gulp.task('sass', function() {
    return gulp.src(scss.in)
        .pipe(sass(scss.sassOpts).on('error', sass.logError))
        .pipe(gulp.dest(scss.out));
});

gulp.task('compile-js',['move-js'], function(){
    return gulp.src(js.in)
      .pipe(concat('polpo.js'))
      .pipe(gulp.dest(js.out))
      .pipe(rename('polpo.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest(js.out));
});

//Copies required Javascript-files from the Node-Modules to the Distribution folder
gulp.task('move-js',['sass'], function(){
  return gulp.src([
    './node_modules/bootstrap/dist/js/bootstrap.min.js',
    './node_modules/jquery/dist/jquery.min.js',
    './node_modules/popper.js/dist/umd/popper.min.js'

    ]).pipe(gulp.dest('./dist/js/'));
});

// Pushes all the collected and generated files to the approriat folder within the TYPO3-Extension
gulp.task('publish', ['compile-js'], function() {
    return gulp.src(dest + '**/*.*')
        .pipe(chmod(0o755))
        .pipe(gulp.dest(publish));
});


//default task - Initialize a task looking for file changes
gulp.task('default', ['publish'], function () {
     gulp.watch(scss.watch, ['publish']);
});
