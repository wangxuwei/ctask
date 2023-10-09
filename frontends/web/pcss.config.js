const prefixer = (await import('autoprefixer')).default;
const nested = (await import('postcss-nested')).default;
const importer = (await import('postcss-import')).default;

const plugins = [
	prefixer,
	importer,
	nested
];


export default {
	// required. Support single string, or array, will be processed in order
	input: ['./pcss/main.pcss'],

	// required. single css file supported for now. 
	output: '../../web-folder/css/app-bundle.css',

	watchPath: ['./pcss/**/*.pcss'],

	// postcss processor arrays
	plugins
}