// This function, `tokenize(code)`, takes a string `code` and splits it into *tokens*, the numbers, words, and symbols that make up our little calculator mini-language.
function tokenize(code) {
    var results = [];
    var tokenRegExp = /\s*([A-Za-z]+|[0-9]+|\S)\s*/g;

    var m;
    while ((m = tokenRegExp.exec(code)) !== null)
        results.push(m[1]);
    return results;
}

// Here are a few helper functions for working with tokens. To keep things simple, a number is any sequence of digits.
function isNumber(token) {
    return token !== undefined && token.match(/^[0-9]+$/) !== null;
}

// And a *name*, or identifier, is any sequence of letters.
function isName(token) {
    return token !== undefined && token.match(/^[A-Za-z]+$/) !== null;
}

function mathParse(code) {
	//if (mode == 'tri') {
	//	return 'triangle';
	//}
	let r = parse(code);
	//Math.round((num + Number.EPSILON) * 100) / 100 //fix's precision errors
	return "= " + Math.round((eval(r) + Number.EPSILON) * 100) / 100;
	//return "= " + eval(r);
}

// The parser’s job is to decode the input and build a collection of objects that represent the code.
// Parse the given string `code` as an expression in our little language.
function parse(code) {
	var tokens = tokenize(code); // Break the input into tokens.

	// The parser will do a single left-to-right pass over `tokens`, with no
	// backtracking. `position` is the index of the next token. Start at
	// 0. We’ll increment this as we go.
	var position = 0;

	// `peek()` returns the next token without advancing `position`.
	function peek() {
		return tokens[position];
	}

	// `consume(token)` consumes one token, moving `position` to point to the next one.
	function consume(token) {
		assert.strictEqual(token, tokens[position]);
		position++;
	}

	let r = '';
	for (let i = 0; i < tokens.length; i++) {

		if (!isNumber(tokens[i])) {
			switch (tokens[i]) {
				case 'sin': tokens[i] = 'Math.sin'; break;
				case 'asin': tokens[i] = 'Math.asin'; break;
				case 'cos': tokens[i] = 'Math.cos'; break;
				case 'acos': tokens[i] = 'Math.acos'; break;
				case 'tan': tokens[i] = 'Math.tan'; break;
				case 'atan': tokens[i] = 'Math.atan'; break;
				case 'log': tokens[i] = 'Math.log'; break;
				case '√': tokens[i] = 'Math.sqrt'; break;
				case '^': tokens[i] = '**'; break;
				case 'π': tokens[i] = 'Math.PI'; break;
				case '∙': tokens[i] = '*'; break;					//U+2219
				case '⋅': tokens[i] = '*'; break;					//U+22C5
				case '÷': tokens[i] = '/'; break;					//U+F7
				case 'ℇ': tokens[i] = '2.718281828459045'; break;	//U+2107
				//
				default:
					//±
			}
		}
		r += tokens[i];
	}
	return r;
}

function deg2rad(degrees) {
	return degrees * (Math.PI / 180);
}

function rad2deg(radians) {
	return radians * (180 / Math.PI);
}