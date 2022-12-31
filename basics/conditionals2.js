const ACCESSORY_PRICE = 9.99;

var bank_balance = 302.13;
var amount = 99.99;

amount = amount * 2;

// podemos fazer uma compra extra?
if ( amount < bank_balance ) {
	console.log( "Vou levar este acessório!" );
	amount = amount + ACCESSORY_PRICE;
}
// se não pudermos:
else {
	console.log( "Não, obrigado." );
}
