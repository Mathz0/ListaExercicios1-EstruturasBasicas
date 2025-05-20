const readline = require("readline"); // Importa o módulo para ler entrada no terminal

const Int_leitura = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

Int_leitura.question("Quantas maçãs você comprou? ", (input) => {
  const quantidade = parseInt(input); // Converte a entrada para número inteiro

  if (isNaN(quantidade) || quantidade < 0) {
    console.log("Por favor, digite um número válido de maçãs.");
  } else {
    let preco;

    if (quantidade < 12) {
      preco = 0.30;
    } else {
      preco = 0.25;
    }

    const total = quantidade * preco;

    // Exibe o resultado com 2 casas decimais
    console.log(`Valor total da compra: R$ ${total.toFixed(2)}`);
  }

  Int_leitura.close(); // Encerra a leitura
});
