const readline = require("readline");

const Int_leitura = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

Int_leitura.question("Digite sua idade: ", (input) => {
    let idade = parseInt(input);
    if (isNaN(idade) || idade < 0) {
  console.log("Por favor, digite uma idade válida.");
} else {
  // Classifica a idade em categorias
  if (idade <= 13) {
    console.log("Categoria: Criança");
  } else if (idade <= 18) {
    console.log("Categoria: Adolescente");
  } else if (idade <= 59) {
    console.log("Categoria: Adulto");
  } else {
    console.log("Categoria: Idoso");
  }
}

Int_leitura.close();
}
);
// O código acima lê a idade do usuário e classifica em categorias: Criança, Adolescente, Adulto ou Idoso.