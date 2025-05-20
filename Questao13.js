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

async function main(){
    let soma = 0; // Inicializa a variável soma
    let cont= 0 // Inicializa a variável cont
    let numero = 0; // Inicializa a variável numero

    do{
        numero = await lerNumero("Digite um número decimal (0 para sair): ");
        if (isNaN(numero)) {
            console.log("Valor inválido");
            continue; // Pede um novo número
        } 
        if (numero !== 0) {
            soma += numero; // Adiciona o número à soma
            cont++; // Incrementa o contador
        }

    }while(numero !== 0); // Continua até que o número seja 0
    if(cont==0){
        console.log("Nenhum número foi digitado.");
    }
    const media = soma / cont; // Calcula a média
    console.log(`Media: ${media}`);
    Int_leitura.close(); // Fecha a interface
}
main(); // Chama a função principal
