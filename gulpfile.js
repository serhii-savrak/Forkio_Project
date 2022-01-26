const { series, parallel } = require("gulp");
const { styles } = require("./gulp-tasks/styles.js");
const { serve } = require("./gulp-tasks/serve.js");
const { watcher } = require("./gulp-tasks/watcher.js");
const { imgMin } = require("./gulp-tasks/minifyimg.js");
const { minifyJs } = require("./gulp-tasks/minifyjs.js");
const { cleaner } = require("./gulp-tasks/dist.cleaner.js");
const { html } = require("./gulp-tasks/html.js");
const { copyImages } = require("./gulp-tasks/copyimages.js");

exports.build = series(cleaner, html, imgMin, styles, minifyJs, copyImages);

exports.dev = parallel(serve, watcher);
