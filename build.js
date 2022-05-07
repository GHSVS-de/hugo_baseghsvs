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
const target = `./vendors`;

// Just easier to handle in console.log:
let from = '';
let to = '';
let targetDir = '';

(async function exec()
{
	let cleanOuts = [
		target,
		'./dist'
	];
	await helper.cleanOut(cleanOuts);

	to = target
	await fse.mkdir(to).then(
		answer => console.log(pc.yellow(pc.bold(`Created "${to}".`)))
	);

	// JAVASCRIPT STARTS HERE.
	targetDir = 'js';

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

	// ./dist STARTS HERE.
	targetDir = './dist';
	await fse.mkdir(targetDir).then(
		answer => console.log(pc.yellow(pc.bold(`Created "${targetDir}".`)))
	);

	for (const folder of ['./custom', './vendors', './fonts'])
	{
		from = folder;
		to = path.join(targetDir, from);
		await fse.copy(from, to
		).then(
			answer => console.log(
				pc.yellow(pc.bold(`Copied "${from}" to "${to}".`))
			)
		);
	}

	// process.exit(1);

	cleanOuts = [
		target,
	];
	await helper.cleanOut(cleanOuts).then(
		answer => console.log(pc.cyan(pc.bold(pc.bgRed(
			`Finished. Good bye!`))))
	);
})();
