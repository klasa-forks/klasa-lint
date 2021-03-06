module.exports = {
	extends: './.eslintrc.json',
	env: {
		node: true,
		es6: true
	},
	plugins: [
		'markdown'
	],
	rules: {
		'no-unused-vars': 0,
		'no-undef': 0,
		'no-invalid-this': 0,
		'no-empty-function': 0,
		'no-unused-expressions': 0,
		'getter-return': 0
	}
};
