// Sequência de Fibonacci com loop for (primeiros 10 números)

let a = 0;
let b = 1;

console.log("Sequência de Fibonacci (10 primeiros números):");

for (let i = 0; i < 10; i++) {
  console.log(a); // Exibe o número atual da sequência
  let proximo = a + b;  // Calcula o próximo número
  a = b;
  b = proximo;
}
// Exibe os números da sequência de Fibonacci