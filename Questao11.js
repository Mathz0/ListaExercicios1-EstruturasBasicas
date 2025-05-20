const readline = require("readline"); // Importa o módulo readline

const Int_leitura = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function lerNumero(pergunta) {
  return new Promise((resolve) => {
    Int_leitura.question(pergunta, (input) => {
      resolve(parseFloat(input));
    });
  });
}

async function main() {
    let total = 0; // Inicializa a variável total
    for (let i = 0; i <5; i++) {
        const numero = await lerNumero("Digite um número inteiro: ");
        if (isNaN(numero)) {
            console.log("Valor inválido. Digite um número inteiro.");
            i--; // Decrementa i para repetir a iteração
        } else {
            total += numero; // Adiciona o número à soma total
        }
    }
    console.log(`Soma Total: ${total}`);
    Int_leitura.close(); // Fecha a interface
}
main();