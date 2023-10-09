import { router } from 'cmdrouter';
import { execa } from 'execa';
import * as Path from 'path';

const { stdout, stderr } = process;
const execaOpts = Object.freeze({ stdout, stderr });

router({ build, watch }).route();

async function watch() {
	await buildSrc(true);
}

async function build() {
	await buildSrc();
}

async function buildSrc(watch?: boolean) {
	const watchArgs = watch ? ["-w"] : [];
	console.log("Builing Web ====== ");
	// web
	execa('../../node_modules/.bin/rollup', ['-c', "./rollup.config.js", ...watchArgs], { ...execaOpts, cwd: Path.resolve("./frontends/web") });
	execa('node_modules/.bin/pcss', ['-c', "frontends/web/pcss.config.js", ...watchArgs], execaOpts);
}