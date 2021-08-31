require('colors');
const showTable = (matrix) => {

	if(!matrix) return;
	
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			let element = matrix[i][j];
			if(element == 1) matrix[i][j] = '1'.blue;
		}
	}
	
	for (let i = 0; i < matrix.length; i++) {
		const element = matrix[i];
		console.log(element.join(" "));
	}
}

module.exports = showTable;
