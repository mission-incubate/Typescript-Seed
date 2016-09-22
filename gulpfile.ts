import * as gulp from 'gulp';
import * as util from 'gulp-util';
import * as runSequence from 'run-sequence';

import Config from './tools/config';
import { loadTasks } from './tools/utils';
loadTasks(Config.SEED_TASKS_DIR);
loadTasks(Config.PROJECT_TASKS_DIR);
// --------------
// Build dev.
gulp.task('build.dev', (done: any) =>
  runSequence('clean.dev',
              'tslint',
              'build.js.dev',
              done));
// --------------
// Build dev watch.
gulp.task('build.dev.watch', (done: any) =>
  runSequence('build.dev',
              'watch.dev',
              done));
// --------------
// Build prod.
gulp.task('build.prod', (done: any) =>
  runSequence('clean.prod',
              'tslint',
              'css-lint',
              'build.assets.prod',
              'build.html_css',
              'copy.prod',
              'build.js.prod',
              'build.bundles',
              'build.bundles.app',
              'minify.bundles',
              'build.index.prod',
              done));
// --------------
// Build tools.
gulp.task('build.tools', (done: any) =>
  runSequence('clean.tools',
              'build.js.tools',
              done));
// --------------
// Serve dev
gulp.task('serve.dev', (done: any) =>
  runSequence('build.dev',
              'server.start',
              'watch.dev',
              done));
// --------------
// Serve prod
gulp.task('serve.prod', (done: any) =>
  runSequence('build.prod',
              'server.prod',
              done));
