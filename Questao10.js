const readline = require("readline"); // Importa o módulo readline

const Int_leitura = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

Int_leitura.question("Digite um número inteiro: ", function (entrada) {
  const numero = parseInt(entrada); // Converte a entrada para inteiro

  if (isNaN(numero)) {
    console.log("Valor inválido. Digite um número inteiro.");
  } else {
    for (let i = 0; i < 10; i++) {
      console.log(numero);
    }
  }

  Int_leitura.close(); // Fecha a interface
});

