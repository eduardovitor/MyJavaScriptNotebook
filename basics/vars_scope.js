function one() {
	// essa variável `a` só pertence à função `one()`
	var a = 1;
	console.log( a );
}

function two() {
	// essa variável `a` só pertence à função `two()`
	var a = 2;
	console.log( a );
}

one();		// 1
two();		// 2
