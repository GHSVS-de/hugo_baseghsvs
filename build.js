const fse = require('fs-extra');
const pc = require('picocolors');
const path = require('path');
const helper = require('./build/helper.js');

const {
	filename,
	name,
	version,
} = require("./package.json");

const source = `./node_modules`;
const target = `./dist`;

// Get svgs from external repo.
const svgsBi = '../pkg_file_iconsghsvs/media/svgs/bi';

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
	await fse.mkdir(to).then(
		answer => console.log(pc.yellow(pc.bold(`Created "${to}".`)))
	);

	// Subfolders to dist.
	from = './custom';
	to = path.join(target);
	await fse.copy(from, to
	).then(
		answer => console.log(
			pc.yellow(pc.bold(`Copied "${from}" to "${to}".`))
		)
	);

	// JAVASCRIPT STARTS HERE.
	targetDir = 'js';

	from = './custom/js';
	to = path.join(target, targetDir);
	await fse.copy(from, to
	).then(
		answer => console.log(
			pc.yellow(pc.bold(`Copied "${from}" to "${to}".`))
		)
	);

	from = path.join(source, 'venobox/dist/venobox.min.js');
	to = path.join(target, targetDir, 'venobox/venobox.min.js');
	await fse.copy(from, to
	).then(
		answer => console.log(
			pc.yellow(pc.bold(`Copied "${from}" to "${to}".`))
		)
	);

	from = path.join(source, 'bootstrap/dist/js');
	to = path.join(target, targetDir, 'bootstrap');
	await fse.copy(from, to
	).then(
		answer => console.log(
			pc.yellow(pc.bold(`Copied "${from}" to "${to}".`))
		)
	);

	from = path.join(source, 'anchor-js/anchor.min.js');
	to = path.join(target, targetDir, 'anchor-js/anchor.min.js');
	await fse.copy(from, to
	).then(
		answer => console.log(
			pc.yellow(pc.bold(`Copied "${from}" to "${to}".`))
		)
	);

	from = path.join(source, 'clipboard/dist/clipboard.min.js');
	to = path.join(target, targetDir, 'clipboard/clipboard.min.js');
	await fse.copy(from, to
	).then(
		answer => console.log(
			pc.yellow(pc.bold(`Copied "${from}" to "${to}".`))
		)
	);

	// CSS STARTS HERE.
	targetDir = 'css';

	from = path.join(source, 'venobox/dist/venobox.min.css');
	to = path.join(target, targetDir, 'venobox/venobox.min.css');
	await fse.copy(from, to
	).then(
		answer => console.log(
			pc.yellow(pc.bold(`Copied "${from}" to "${to}".`))
		)
	);

	// SCSS STARTS HERE.
	targetDir = 'scss';

	from = path.join(source, 'bootstrap/scss');
	to = path.join(target, targetDir, 'bootstrap');
	await fse.copy(from, to
	).then(
		answer => console.log(
			pc.yellow(pc.bold(`Copied "${from}" to "${to}".`))
		)
	);

	// SVGS STARTS HERE.
	targetDir = 'svgs';

	from = svgsBi;
	to = path.join(target, targetDir, 'bi');
	await fse.copy(from, to
	).then(
		answer => console.log(
			pc.yellow(pc.bold(`Copied "${from}" to "${to}".`))
		)
	);
})();
