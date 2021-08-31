const validate = require('./ejercicio2');
const showTable = require('./helpers/showTable');
const counterShips = require('./helpers/counterShips');

const matrix = [
	[1, 1, 0, 1, 0, 0, 1, 1, 1, 1],
	[0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
	[0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 1, 0, 1, 0, 0, 1, 0],
	[1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
];

console.clear();

console.log(validate(matrix));
counterShips(matrix);
showTable(matrix);
