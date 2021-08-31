const spiralize = require('./ejercicio1');
const showTable = require('./helpers/showTable')

const spiral = spiralize(6);

console.clear();

showTable(spiral);

