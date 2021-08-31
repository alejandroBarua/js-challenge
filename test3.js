const showString = require('./helpers/showString');

const {
	encode,
	decode
} = require('./ejercicio3');

console.clear();

const rails = 3; 
const word = "WEAREROOFTOPPERSS";

const wordEncode = encode(word, rails);
const wordDecode = decode(wordEncode, rails);

showString(word, rails);

console.log( '\n'+ 'Original: ' + word + '\n');
console.log('Encode: ' + wordEncode);
console.log('Decode: ' + wordDecode);

console.log(word == wordDecode);
