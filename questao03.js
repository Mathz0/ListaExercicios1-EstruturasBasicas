const readline = require("readline");

const Int_leitura = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

Int_leitura.question("Digite a nota (0 a 10): ", (input) => {
    let nota = parseFloat(input);
    
    if (isNaN(nota) || nota < 0 || nota > 10) {
        console.log("Por favor, digite uma nota válida entre 0 e 10.");
    } else {
        if (nota >= 7) {
        console.log("Aprovado");
        } else if (nota >= 4) {
        console.log("Recuperação");
        } else {
        console.log("Reprovado");
        }
    }
    
    Int_leitura.close();
    }
);
