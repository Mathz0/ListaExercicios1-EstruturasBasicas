const readline = require("readline");

const Int_leitura = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

Int_leitura.question("Digite seu Peso: ", (inputPeso) => {
  let peso = parseFloat(inputPeso);

  Int_leitura.question("Digite sua Altura: ", (inputAltura) => {
    let altura = parseFloat(inputAltura);

    // Verifica se os valores são válidos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
      console.log("Por favor, digite valores válidos para peso e altura.");
    } else {
      // Calcula o IMC
      let imc = peso / (altura * altura);
      console.log("Seu IMC é: " + imc.toFixed(2));

      // Classifica o IMC
      if (imc < 18.5) {
        console.log("Categoria: Baixo peso");
      } else if (imc < 25) {
        console.log("Categoria: Peso normal");
      } else if (imc < 30) {
        console.log("Categoria: Sobrepeso");
      } else {
        console.log("Categoria: Obesidade");
      }
    }

    Int_leitura.close(); // Fecha a interface após tudo
  });
});
