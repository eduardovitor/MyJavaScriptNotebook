
const somaDoisNumeros = require("./index.js");
test("Teste da soma de dois números", () => {
    num1 = 5;
    num2 = 3;
    expect(somaDoisNumeros(5,3)).toBe(8);
});
