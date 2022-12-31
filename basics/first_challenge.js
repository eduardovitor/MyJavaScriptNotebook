
const TAX = 0.05 // 5 percent of product price
const PHONE_PRICE = 250.99;
const PHONE_GADGET = 15.99;
const MONTHLY_LIMIT = 700; // LIMIT SPEND FOR PHONE GADGETS
var current_balance = 900;

function calculateTax(amount){
   var result = amount + (amount * TAX);
   return result;
}

function buyThings(number_phones,number_gadgets) {
      phone_total = (number_phones * PHONE_PRICE);
      phone_total_with_tax = calculateTax(phone_total_with_tax);
      gadgets_total = number_gadgets * PHONE_GADGET;
      gadgets_total_with_tax = calculateTax(gadgets_total_with_tax);
      total_bill = phone_total_with_tax + gadgets_total_with_tax;
      if (phone_total_with_tax > current_balance){
	console.log("You can't buy all of these phones");
        console.log("Finishing buy process with gadgets only if there is balance");
        if (gadgets_total_with_tax <= current_balance){
          current_balance = current_balance - gadgets_total_with_tax;
          console.log("Your new balance is " + "$" + current_balance.toFixed(2));
          return true;
        }
      }
      if (gadgets_total_with_tax > MONTHLY_LIMIT) {
	console.log("You can't buy all this gadget stuff");
        console.log("Finishing buy process with phones only if there is balance");
        if (phone_total_with_tax <= current_balance){
	  current_balance = current_balance - phone_total_with_tax;
          console.log("Your new balance is " + "$" + current_balance.toFixed(2));
          return true;
	}
      }
      if (total_bill > current_balance){
	console.log("You don't have enough balance");
	console.log("Finishing buy process!");
        return false;
      } else {
        console.log("Finishing buy process successfully!");
	current_balance = current_balance - total_bill;
        console.log("Your new balance is " + "$" + current_balance.toFixed(2));
        return true;
      }
}

var res = buyThings(10,3);
console.log(res);
