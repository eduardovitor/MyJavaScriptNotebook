const TAX_RATE = 0.08;

function calculateFinalPurchaseAmount(amt) {
	// calcula o novo amount adicionando a tax
	amt = amt + (amt * TAX_RATE);

	// retorne o novo amount
	return amt;
}

var amount = 99.99;

amount = calculateFinalPurchaseAmount( amount );

console.log( amount.toFixed( 2 ) );		// "107.99"
