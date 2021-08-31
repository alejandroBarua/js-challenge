var spiralize = function(size) {

	if(size < 5) return console.log('Size must be greater than five');;

	const matrix = [];
	for(let i = 0; i < size; i++) {
			matrix[i] = new Array(size).fill(0);
	}
	
	let a = 0;
		
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
	
			if(i == 0) matrix[i][j] = 1;
			if(j == size - 1) matrix[i][j] = 1;
			if(i == size -1) matrix[i][j] = 1;
			if(i >= a + 2 && j == 0) matrix[i][j] = 1;
		}
	}
	
	a += 2;
	
	for (let i = 2; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
	
			if(i == 2 && j <  size - 2) matrix[i][j] = 1;
			if(j == size - 3 && i < size - 2) matrix[i][j] = 1;
			if(i == size -3 && j >= 2 && j < size -3) matrix[i][j] = 1;
			if(i >= a + 2 && j == 2 && i < size - 3) matrix[i][j] = 1;
		}
	}
	
	a = 4;
	let b = 5;
	let loops = Math.floor(size/3) - 2;
	
	while(loops > 0){
		
		for (let i = a; i < matrix.length; i++) {
			for (let j = 0; j < matrix[i].length; j++) {
		
				if(i == a && j > a-2 && j <  size - a) matrix[i][j] = 1; 
				if(j == size - b && i < size - a) matrix[i][j] = 1;
				if(i == size -b && j >= a && j < size -b) matrix[i][j] = 1; 
				if(i >= a + 2 && j == a && i < size - b) matrix[i][j] = 1; 
			}
		}
		a += 2;
		b += 2;
		loops--;
	}
	
	if(size % 2 == 0) {
		const pos = size/2;
		matrix[pos][pos-1] = 0;
	}
	
	return matrix;
}

module.exports = spiralize;