function encode(s, rails) { 

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

	
	let sEncoded = [];
	
	for (let i = 0; i < matrix.length; i++) {
		const element = matrix[i].filter(el => el != "0").join("");
		sEncoded.push(element);		
	}
	
	return sEncoded.join("");
}


function decode(s, rails) { 

	if(s == "") return "";

	const matrix = [];
	for(let i = 0; i < rails; i++) {
			matrix[i] = new Array(s.length).fill("0");
	}

	let aux = 0;
	let fillDown = true;

	for (let j = 0; j < matrix[0].length; j++) {
		
		if (rails == 2) {
			
			matrix[aux][j] = "1";
			aux == 0 ? aux = 1 : aux = 0;

		} else {
			
			if(fillDown){
				
				matrix[aux][j] = "1";
				aux++;
				if(aux == rails) {
					fillDown = false;
					aux = rails - 2;
				}
			}
			else{
				matrix[aux][j] = "1";
				aux--;
				if(aux == 0) {
					fillDown = true;
				}
			}
		}
	}

	aux = 0;

	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			
			if(matrix[i][j] == "1") {
				matrix[i][j] = s[aux];
				aux++;
			}
		}
	}

	aux = 0;
	fillDown = true;
	const sDecode = [];

	for (let j = 0; j < matrix[0].length; j++) {
		
		if (rails == 2) {
			
			sDecode.push(matrix[aux][j]);
			aux == 0 ? aux = 1 : aux = 0;

		} else {
			
			if(fillDown){
				
				sDecode.push(matrix[aux][j]);
				aux++;
				if(aux == rails) {
					fillDown = false;
					aux = rails - 2;
				}
			}
			else{
				sDecode.push(matrix[aux][j]);
				aux--;
				if(aux == 0) {
					fillDown = true;
				}
			}
		}
	}

	return sDecode.join("");
}


module.exports = {
	encode,
	decode
}
