const readline = require("readline");

const Int_leitura = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função que exibe o menu e trata a escolha
function mostrarMenu() {
  console.log("\n=== Menu Interativo ===");
  console.log("1 - Dizer Olá");
  console.log("2 - Mostrar a Data Atual");
  console.log("3 - Sair");

  Int_leitura.question("Escolha uma opção: ", (input) => {
    let opcao = parseInt(input);

    switch (opcao) {
      case 1:
        console.log("Olá!");
        mostrarMenu(); // chama novamente para repetir o menu
        break;
      case 2:
        console.log("Data Atual: " + new Date().toLocaleDateString());
        mostrarMenu();
        break;
      case 3:
        console.log("Saindo...");
        Int_leitura.close(); // encerra o programa
        break;
      default:
        console.log("Opção inválida.");
        mostrarMenu(); // repete em caso de erro
    }
  });
}

// Inicia o programa
mostrarMenu();
