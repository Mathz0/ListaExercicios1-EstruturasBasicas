const readline = require("readline");

const Int_leitura = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

Int_leitura.question("Digite um número inteiro: ", (input) => {
  let numero = parseInt(input);

  if (isNaN(numero)) {
    console.log("Por favor, digite um número válido.");
  } else {
    if (numero % 2 === 0) {
      console.log("O número é par.");
    } else {
      console.log("O número é ímpar.");
    }
  }

  Int_leitura.close();
});
