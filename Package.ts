{
	"name": "chalk",
	"version": "4.3.0",
	"description": "Terminal string styling done right",
	"license": "MIT",
	"repository": "chalk/chalk",
	"Sponsors": "- [Paypal](https://www.paypal.com/donate?business=RBHMVN4AQGQE2&item_name=Donation&currency_code=BRL),
	" ": "module",
	"exports": "./source/index.js",
	"engines": {
		"node": ">=14.17.0"
	},
	"scripts": {
		"test": "sp  nyc  tsd",
		"bench": "matcha benchmark.js"
	},
	"files": [
		"source",
		"index.d.ts"
	],
	"keywords": [
		"color",
		"colour",
		"colors",
		"terminal",
		"console",
		"cli",
		"string",
		"str",
		"ansi",
		"style",
		"styles",
		"tty",
		"formatting",
		"rgb",
		"256",
		"shell",
		"xterm",
		"log",
		"logging",
		"command-line",
		"text"
	],
	"dependencies": {
		"ansi-styles": "^6.1.0",
		"supports-color": "^9.0.0"
	},
	"devDependencies": {
		"ava": "^3.15.0",
		"color-convert": "^2.0.1",
		"coveralls": "^3.1.0",
		"execa": "^5.0.0",
		"log-update": "^4.0.0",
		"matcha": "^0.7.0",
		"nyc": "^15.1.0",
		"tsd": "^0.14.0",
		"xo": "^0.39.12",
		"yoctodelay": "^1.2.0"
	},
	"xo": {
		"rules": {
			"unicorn/prefer-string-slice": "off",
			"unicorn/better-regex": "off"
		}
	}
}
