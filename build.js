#!/usr/bin/env node
const path = require('path');

/* Configure START */
const pathBuildKram = path.resolve("../buildKramGhsvs");
/* Configure END */

const helper = require(`${pathBuildKram}/build/helper.js`);

// const pc = require(`${pathBuildKram}/node_modules/picocolors`);
// const fse = require(`${pathBuildKram}/node_modules/fs-extra`);

const source = `./node_modules`;
const target = `./dist`;

// Get svgs from external repo.
const svgs = '../pkg_file_iconsghsvs/media/svgs';

// Just easier to handle in console.log:
let from = '';
let to = '';
let targetDir = '';

(async function exec()
{
	let cleanOuts = [
		target,
	];
	await helper.cleanOut(cleanOuts);

	to = target
	await helper.mkdir(to);

	// Subfolders to dist.
	from = './custom';
	to = path.join(target);
	await helper.copy(from, to)

	// JAVASCRIPT STARTS HERE.
	targetDir = 'js';

	from = './custom/js';
	to = path.join(target, targetDir);
	await helper.copy(from, to)

	from = path.join(source, 'venobox/dist/venobox.min.js');
	to = path.join(target, targetDir, 'venobox/venobox.min.js');
	await helper.copy(from, to)

	from = path.join(source, 'bootstrap/dist/js');
	to = path.join(target, targetDir, 'bootstrap');
	await helper.copy(from, to)

	from = path.join(source, 'anchor-js/anchor.min.js');
	to = path.join(target, targetDir, 'anchor-js/anchor.min.js');
	await helper.copy(from, to)

	from = path.join(source, 'clipboard/dist/clipboard.min.js');
	to = path.join(target, targetDir, 'clipboard/clipboard.min.js');
	await helper.copy(from, to)

	// CSS STARTS HERE.
	targetDir = 'css';

	from = path.join(source, 'venobox/dist/venobox.min.css');
	to = path.join(target, targetDir, 'venobox/venobox.min.css');
	await helper.copy(from, to)

	// SCSS STARTS HERE.
	targetDir = 'scss';

	from = './custom/scss';
	to = path.join(target, targetDir);
	await helper.copy(from, to)

	from = path.join(source, 'bootstrap/scss');
	to = path.join(target, targetDir, 'bootstrap');
	await helper.copy(from, to)

	// SVGS STARTS HERE.
	targetDir = 'svgs';

	from = `${svgs}/bi`;
	to = path.join(target, targetDir, 'bi');
	await helper.copy(from, to)

	from = `${svgs}/icons-overview.html`;
	to = path.join(target, targetDir, 'icons-overview.html');
	await helper.copy(from, to)
})();
