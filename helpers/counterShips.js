function counterShips(field) {

	let total = 0;
	
	for (let i = 0; i < field.length; i++) {
		for (let j = 0; j < field[i].length; j++) {
			let element = field[i][j];
			if(element == 1) total++;
		}
	}

	let battleship = 0,
		cruiseShips = 0,
		wreckerShips = 0,
		submarines = 0;

	// find ships (no submarines)

	const findShips = (matrix) => {

		for (let i = 0; i < matrix.length; i++) {
			const element = matrix[i];
	
			element.join("").split("0").map(el => {
				if(el.length == 2) wreckerShips++;
				if(el.length == 3) cruiseShips++;
				if(el.length == 4) battleship++;
				if(el.length > 4) return false;
			})
		}
	}

	const getInverseMatrix = (matrix) => {

		const inverseMatrix = [];
		let matrixAux = [];
		
		for (let h = 0; h < 10; h++) {
			for (let i = 0; i < matrix.length; i++) {
				for (let j = 0; j < matrix[i].length; j++) {
					
					if(j == h) matrixAux.push(matrix[i][j]);
				}	
			}
			inverseMatrix.push(matrixAux);
			matrixAux = [];
		}
		return inverseMatrix;
	}
	
	// find submarines

	const findSubmarines = (matrix) => {

		for (let i = 0; i < matrix.length; i++) {
			for (let j = 0; j < matrix[i].length; j++) {
				const element = matrix[i][j];

				if(element == 1){

					if(i == 0 && j == 0){
						if(matrix[i][j+1] == 0 && matrix[i+1][j] == 0) submarines++;
					}

					if(i == 0 && j == matrix.length -1){
						if(matrix[i][j-1] == 0 && matrix[i+1][j] == 0) submarines++;
					}
					
					if(i == matrix.length -1  && j == matrix.length -1){
						if(matrix[i-1][j] == 0 && matrix[i][j-1] == 0) submarines++;
					}

					if(i == matrix.length -1  && j == 0){
						if(matrix[i-1][j] == 0 && matrix[i][j+1] == 0) submarines++;
					}

					if(j == 0 && (i > 0 && i < matrix.length -1 )){
						if(matrix[i-1][j] == 0 && matrix[i][j+1] == 0 && matrix[i+1][j] == 0) submarines++;
					}

					if(j == matrix.length - 1 && (i > 0 && i < matrix.length -1 )){
						if(matrix[i-1][j] == 0 && matrix[i][j-1] == 0 && matrix[i+1][j] == 0) submarines++;
					}

					if(i == 0 && (j > 0 && j < matrix.length -1) || i == matrix.length - 1 && (j > 0 && j < matrix.length -1)){

						if(i == 0 && (j > 0 && j < matrix.length -1)){
							if(matrix[i][j+1] == 0 && matrix[i+1][j] == 0 && matrix[i][j-1] == 0 ) submarines++;
						}

						if(i == matrix.length - 1 && (j > 0 && j < matrix.length -1)){
							if(matrix[i][j-1] == 0 && matrix[i-1][j] == 0 && matrix[i][j+1] == 0 ) submarines++;
						}
						
					}
					else{

						if(matrix[i][j+1] == 0 && matrix[i][j-1] == 0 && matrix[i+1][j] == 0 && matrix[i-1][j] == 0) submarines++;
					}
				
				}
				
			}
		}
	}

	findShips(field);
	findShips(getInverseMatrix(field));
	findSubmarines(field);
	
	console.log('Total: '+ total);
	console.log('Battleship: '+ battleship);
	console.log('CruiseShips: '+ cruiseShips);
	console.log('WreckerShips: '+ wreckerShips);
	console.log('Submarine: '+ submarines);
}


module.exports = counterShips;