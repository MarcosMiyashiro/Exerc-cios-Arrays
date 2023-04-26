
let filmes = ["John Wick 4", "Ninguem é de Ninguem", "Harry Potter", "Jurassic Park", "Indiana Jones"];
let notas = [];


function darNota(filme, nota) {
  let indexFilme = filmes.indexOf(filme);
  if (indexFilme === -1) {
    console.log(`Filme não encontrado: ${filme}`);
    return;
    notas[indexFilme] = notas;
  }
}

function calcularMedia(filme) {
  let indexFilme = filmes.indexOf(filme);
  if (indexFilme === -1) {
    console.log(`Filme não encontrado: ${filme}`);
    return;
  }
}
let soma = 0;

for (let i = 0; i < notas.length; i++) {
  if (i === indexFilme && notas[i] !== undefined) {
    soma += notas[i];
  }
}


let media = soma / notas.filter(nota => nota !== undefined).length;


console.log(`A média das notas do filme "${filmes}" é ${media}`);


