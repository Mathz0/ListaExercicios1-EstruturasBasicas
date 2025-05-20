const readline = require("readline");

const Int_leitura = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para ler um número
function lerNumero(pergunta) {
  return new Promise((resolve) => {
    Int_leitura.question(pergunta, (input) => {
      resolve(parseFloat(input));
    });
  });
}

async function main() {
  const num1 = await lerNumero("Digite o primeiro número: ");
  const num2 = await lerNumero("Digite o segundo número: ");

  if (isNaN(num1) || isNaN(num2)) {
    console.log("Por favor, digite apenas números válidos.");
  } else if (num1 === num2) {
    console.log("Os números são iguais. Por favor, digite valores diferentes.");
  } else {
    if (num1 < num2) {
      console.log(`Ordem crescente: ${num1}-${num2}`);
    } else {
      console.log(`Ordem crescente: ${num2}-${num1}`);
    }
  }

  Int_leitura.close();
}

main();
