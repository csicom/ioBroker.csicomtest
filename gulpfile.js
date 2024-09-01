const gulp = require('gulp');
const fs = require('node:fs');
const adapterName = require('./package.json').name.replace('iobroker.', '');
const gulpHelper = require('@iobroker/vis-2-widgets-react-dev/gulpHelper');

// --------------- tasks for javascript ----------------------
const SRC_JS = 'src-widgets/';
const src_js = `${__dirname}/${SRC_JS}`;

gulp.task('widget-js-0-clean', done => {
	gulpHelper.deleteFoldersRecursive(`${src_js}build`);
	gulpHelper.deleteFoldersRecursive(`${__dirname}/widgets`);
	done();
});
gulp.task('widget-js-1-npm', async () => gulpHelper.npmInstall(src_js));

gulp.task('widget-js-2-compile', async () => gulpHelper.buildWidgets(__dirname, src_js));

gulp.task('widget-js-3-copy', () => Promise.all([
	gulp.src([`${SRC_JS}build/*.js`]).pipe(gulp.dest(`widgets/${adapterName}`)),
	gulp.src([`${SRC_JS}build/img/*`]).pipe(gulp.dest(`widgets/${adapterName}/img`)),
	gulp.src([`${SRC_JS}build/*.map`]).pipe(gulp.dest(`widgets/${adapterName}`)),
	gulp.src([
		`${SRC_JS}build/static/**/*`,
		// ...gulpHelper.ignoreFiles(SRC_JS),
	]).pipe(gulp.dest(`widgets/${adapterName}/static`)),
	gulp.src([
		...gulpHelper.copyFiles(SRC_JS),
	]).pipe(gulp.dest(`widgets/${adapterName}/static/js`)),
	gulp.src([`${SRC_JS}src/i18n/*.json`]).pipe(gulp.dest(`widgets/${adapterName}/i18n`)),
	new Promise(resolve =>
		setTimeout(() => {
			if (fs.existsSync(`widgets/${adapterName}/static/media`) &&
                !fs.readdirSync(`widgets/${adapterName}/static/media`).length
			) {
				fs.rmdirSync(`widgets/${adapterName}/static/media`);
			}
			resolve();
		}, 500)
	)
]));

gulp.task('widget-js-build', gulp.series(['widget-js-0-clean', 'widget-js-1-npm', 'widget-js-2-compile', 'widget-js-3-copy']));

gulp.task('default', gulp.series('widget-js-build'));