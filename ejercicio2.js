function validate(field) {

	// diagonals

	const validateDiagonals = (matrix) => {

		for (let i = 0; i < matrix.length; i++) {
			for (let j = 0; j < matrix[i].length; j++) {
				const element = matrix[i][j];

				if(element == 1){
					if(i == 0 && j == 0){
						if(matrix[i+1][j+1] == 1){
							return false;
						} 
						else{
							continue;
						}
					}

					if(i == 0 && j == matrix.length -1){
						if(matrix[i+1][j-1] == 1){ 
							return false;
						}
						else{
							continue;
						}
					}
					
					if(i == matrix.length -1  && j == matrix.length -1){
						if(matrix[i-1][j-1] == 1){
							return false;
						}
						else{
							continue;
						}
					}

					if(i == matrix.length -1  && j == 0){
						if(matrix[i-1][j+1] == 1){
							return false;
						}
						else{
							continue;
						}
					}

					if(j == 0 && (i > 0 && i < matrix.length -1 )){
						if(matrix[i-1][j+1] == 1 || matrix[i+1][j+1] == 1) return false;
					}

					if(j == matrix.length - 1 && (i > 0 && i < matrix.length -1 )){
						if(matrix[i-1][j-1] == 1 || matrix[i+1][j-1] == 1) return false;
					}

					if(i == 0 && (j > 0 && j < matrix.length -1) || i == matrix.length - 1 && (j > 0 && j < matrix.length -1)){

						if(i == 0 && (j > 0 && j < matrix.length -1)){
							if(matrix[i+1][j+1] == 1 || matrix[i+1][j-1] == 1) return false;
						}

						if(i == matrix.length - 1 && (j > 0 && j < matrix.length -1)){
							if(matrix[i-1][j-1] == 1 || matrix[i-1][j+1] == 1) return false;
						}
						
					}
					else{

						if(matrix[i+1][j+1] == 1 || matrix[i+1][j-1] == 1 || matrix[i-1][j+1] == 1 || matrix[i-1][j-1] == 1) return false;
					}
				}
				
			}
		}
		return true;
	}

	if(!validateDiagonals(field)) return false;

	// total
	
	let total = 0;
	
	for (let i = 0; i < field.length; i++) {
		for (let j = 0; j < field[i].length; j++) {
			let element = field[i][j];
			if(element == 1) total++;
		}
	}

	if(total != 20) return false;


	let battleship = 0,
		cruiseShips = 0,
		wreckerShips = 0,
		submarine = 0;

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
	
	findShips(field);
	findShips(getInverseMatrix(field));
	
	if(battleship != 1) return false;
	if(cruiseShips != 2) return false;
	if(wreckerShips != 3) return false;

	// find submarines

	const findSubmarines = (matrix) => {

		for (let i = 0; i < matrix.length; i++) {
			for (let j = 0; j < matrix[i].length; j++) {
				const element = matrix[i][j];

				if(element == 1){

					if(i == 0 && j == 0){
						if(matrix[i][j+1] == 0 && matrix[i+1][j] == 0) submarine++;
					}

					if(i == 0 && j == matrix.length -1){
						if(matrix[i][j-1] == 0 && matrix[i+1][j] == 0) submarine++;
					}
					
					if(i == matrix.length -1  && j == matrix.length -1){
						if(matrix[i-1][j] == 0 && matrix[i][j-1] == 0) submarine++;
					}

					if(i == matrix.length -1  && j == 0){
						if(matrix[i-1][j] == 0 && matrix[i][j+1] == 0) submarine++;
					}

					if(j == 0 && (i > 0 && i < matrix.length -1 )){
						if(matrix[i-1][j] == 0 && matrix[i][j+1] == 0 && matrix[i+1][j] == 0) submarine++;
					}

					if(j == matrix.length - 1 && (i > 0 && i < matrix.length -1 )){
						if(matrix[i-1][j] == 0 && matrix[i][j-1] == 0 && matrix[i+1][j] == 0) submarine++;
					}

					if(i == 0 && (j > 0 && j < matrix.length -1) || i == matrix.length - 1 && (j > 0 && j < matrix.length -1)){

						if(i == 0 && (j > 0 && j < matrix.length -1)){
							if(matrix[i][j+1] == 0 && matrix[i+1][j] == 0 && matrix[i][j-1] == 0 ) submarine++;
						}

						if(i == matrix.length - 1 && (j > 0 && j < matrix.length -1)){
							if(matrix[i][j-1] == 0 && matrix[i-1][j] == 0 && matrix[i][j+1] == 0 ) submarine++;
						}
						
					}
					else{

						if(matrix[i][j+1] == 0 && matrix[i][j-1] == 0 && matrix[i+1][j] == 0 && matrix[i-1][j] == 0) submarine++;
					}
				
				}
				
			}
		}
	}

	findSubmarines(field);
	if(submarine != 4) return false;

	return true;
}


module.exports = validate;