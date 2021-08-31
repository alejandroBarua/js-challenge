require('colors');
const showString = (s, rails) => {

	if(s == "") return "";

	const matrix = [];
	for(let i = 0; i < rails; i++) {
			matrix[i] = new Array(s.length).fill("0");
	}

	let aux = 0;
	let fillDown = true;

	for (let j = 0; j < matrix[0].length; j++) {
		
		if (rails == 2) {
			
			matrix[aux][j] = s[j];
			aux == 0 ? aux = 1 : aux = 0;

		} else {
			
			if(fillDown){
				
				matrix[aux][j] = s[j];
				aux++;
				if(aux == rails) {
					fillDown = false;
					aux = rails - 2;
				}
			}
			else{
				matrix[aux][j] = s[j];
				aux--;
				if(aux == 0) {
					fillDown = true;
				}
			}
		}
	}

	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			let element = matrix[i][j];
			if(element != "0") matrix[i][j] = element.red;
		}
	}
	
	for (let i = 0; i < matrix.length; i++) {
		const element = matrix[i];
		console.log(element.join(" "));
	}
}



module.exports = showString;
