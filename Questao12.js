const readline = require("readline"); // Importa o módulo readline

const Int_leitura = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

Int_leitura.question("Digite um número inteiro: ", function (entrada) {
    let total = 0; // Inicializa a variável total
    const numero = parseInt(entrada); // Converte a entrada para inteiro
    for (let i = 0; i < 10; i++) {
        total = numero * (i + 1); // Multiplica o número pela iteração atual
        console.log(`${numero} x ${i + 1} = ${total}`); // Exibe a multiplicação
    }
    Int_leitura.close(); // Fecha a interface
}
);
