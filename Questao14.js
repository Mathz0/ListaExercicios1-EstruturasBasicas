const readline = require("readline");

const Int_leitura = readline.createInterface({ 
  input: process.stdin, 
  output: process.stdout
});

Int_leitura.question("Digite um número inteiro para calcular o fatorial: ", (entrada) => {
  const numero = parseInt(entrada); // Converte a entrada para inteiro

  if (isNaN(numero) || numero < 0) { // Verifica se o número é inválido ou negativo
    console.log("Por favor, digite um número inteiro não negativo.");
  } else {
    let fatorial = 1;   // Inicializa o fatorial como 1
    for (let i = 2; i <= numero; i++) { // Calcula o fatorial
      fatorial *= i;
    }

    console.log(`O fatorial de ${numero} é ${fatorial}`);
  }

  Int_leitura.close();
});
