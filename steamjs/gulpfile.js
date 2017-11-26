var gulp = require('gulp');
var gfi = require("gulp-file-insert");
var concat = require('gulp-concat');

gulp.task('default', ['build'])

gulp.task('build', ['buildSteamJSForNodePlatform'])

gulp.task('buildSteamJSForNodePlatform', ['buildCoreModule', 'buidNodePlatformModule'] ,function() {
	return gulp.src('./src/steam-node-template.js')
		       .pipe(gfi({
		    	   "$$_GLOBAL_$$": "./src/global.js",
			   		"$$_CORE_$$": "./build/tmp/combined/steamjs-core.js",
			   		"$$_PLATFORM_$$": "./build/tmp/combined/steamjs-platform-node.js"
		       }))
		       .pipe(concat('steam.js'))
		       .pipe(gulp.dest('./build/distr/steamjs-node/js/'));
})

gulp.task('buildCoreModule', function() {
	return gulp.src('./src/core/*.js')
	           .pipe(concat('steamjs-core.js'))
	           .pipe(gulp.dest('./build/tmp/combined/'));
});

gulp.task('buidNodePlatformModule', ['buildPackageJson'], function() {
	return gulp.src('./src/platforms/node/*.js')
               .pipe(concat('steamjs-platform-node.js'))
               .pipe(gulp.dest('./build/tmp/combined/'));
});


gulp.task('buildPackageJson', function () {
    return gulp.src('./src/platforms/node/package.json')
               .pipe(gulp.dest('./build/distr/steamjs-node/'));
});
