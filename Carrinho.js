const produtosDisponiveis = ["camiseta", "calça", "sapato", "jaqueta"];


const precos = [49.99, 80.00, 120.00, 150.00];


const quantidades = [0, 0, 0, 0];


function adicionarProdutoAoCarrinho() {

  const selectProduto = document.getElementById("produto");
  const nomeProduto = selectProduto.options[selectProduto.selectedIndex].value;
  const quantidade = document.getElementById("quantidade").valueAsNumber;



  const index = produtosDisponiveis.indexOf(nomeProduto); 
  if (index !== -1) { 
    quantidades[index] += quantidade; 

    document.getElementById("valorTotal").innerHTML = `O valor total do carrinho é R$ ${calcularValorTotalCarrinho().toFixed(2)}.`;

  }
}





function calcularValorTotalCarrinho() {
  let valorTotal = 0;
  for (let i = 0; i < produtosDisponiveis.length; i++) { 
    valorTotal += precos[i] * quantidades[i]; 
  }
  return valorTotal;
} 





