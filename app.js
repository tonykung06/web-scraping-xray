var Xray = require('x-ray');

var xray = new Xray();

xray('http://google.com', 'a', [{
	a: '',
	href: '@href',
	css: '@css'
}]).write('results.json');