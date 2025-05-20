const readline = require("readline");

const Int_leitura = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para ler um número com promessa
function lerNumero(pergunta) {
  return new Promise((resolve) => {
    Int_leitura.question(pergunta, (input) => {
      resolve(parseFloat(input));
    });
  });
}

async function main() {
  const A = await lerNumero("Digite o lado A: ");
  const B = await lerNumero("Digite o lado B: ");
  const C = await lerNumero("Digite o lado C: ");

  // Verifica se os valores são válidos
  if (isNaN(A) || isNaN(B) || isNaN(C) || A <= 0 || B <= 0 || C <= 0) {
    console.log("Por favor, insira apenas números positivos.");
    Int_leitura.close();
    return;
  }

  // Verifica se forma um triângulo
  if (A < B + C && B < A + C && C < A + B) {
    console.log("Os lados formam um triângulo.");

    // Verifica o tipo de triângulo
    if (A === B && B === C) {
      console.log("Tipo: Triângulo Equilátero");
    } else if (A === B || A === C || B === C) {
      console.log("Tipo: Triângulo Isósceles");
    } else {
      console.log("Tipo: Triângulo Escaleno");
    }
  } else {
    console.log("Os lados NÃO formam um triângulo.");
  }

  rl.close();
}

main();
