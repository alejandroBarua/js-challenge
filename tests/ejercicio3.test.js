const {
	encode,
	decode
} = require('../ejercicio3');

let testError = 0;

function tests() {

    if (encode("WEAREROOFTOPPERSS", 3) !== "WEFPSERROTPESAOOR") {
        console.log('El encoding de la cadena: "WEAREROOFTOPPERSS" con 3 carriles no es el esperado');
				testError++;
    }
    
    if (encode("Hello, World!", 3) !== "Hoo!el,Wrdl l") {
        console.log('El encoding de la cadena: "Hello, World!" con 3 carriles no es el esperado');
				testError++;

    }
    
    if (encode("Hello, World!", 4) !== "H !e,Wdloollr") {
        console.log('El encoding de la cadena: "Hello, World!" con 4 carriles no es el esperado');
				testError++;

    }
    
    if (encode("", 3) !== "") {
        console.log('El encoding de la cadena: " " con 3 carriles no es el esperado');
				testError++;

    }
    
    if (decode("WEFPSERROTPESAOOR", 3) !== "WEAREROOFTOPPERSS") {
        console.log('El decoding de la cadena: "WEFPSERROTPESAOOR" con 3 carriles no es el esperado');
				testError++;

    }
    
    if (decode("Hoo!el,Wrdl l", 3) !== "Hello, World!") {
        console.log('El decoding de la cadena: "Hoo!el,Wrdl l" con 3 carriles no es el esperado');
				testError++;

    }
    
    if (decode("H !e,Wdloollr", 4) !== "Hello, World!") {
        console.log('El decoding de la cadena: "H !e,Wdloollr" con 4 carriles no es el esperado');
				testError++;

    }
    
    if (decode("", 3) !== "") {
        console.log('El decoding de la cadena: " " con 3 carriles no es el esperado');
				testError++;

    }
}

tests();
console.log("Errores:" + testError);