interface Produto {
  nome: string;
  preco: number;
  ativo: boolean;
}

const produtos: Produto[] = [
  { nome: 'Notebook', preco: 3500, ativo: true },
  { nome: 'Mouse', preco: 150, ativo: false },
  { nome: 'Teclado', preco: 300, ativo: true },
  { nome: 'Monitor', preco: 1200, ativo: true }
];

// Filtra apenas os produtos que estão ativos (ativo: true)
const produtosAtivos: Produto[] = produtos.filter((produto) => {
  return produto.ativo === true;
});

console.log(produtosAtivos);
// Saída: [{ nome: 'Notebook', ... }, { nome: 'Teclado', ... }, { nome: 'Monitor', ... }]
// Soma o preço de todos os produtos
const valorTotal: number = produtos.reduce((acumulador, produto) => {
  return acumulador + produto.preco;
}, 0); // O '0' é o valor inicial do acumulador

console.log(valorTotal);
// Saída: 5150 (3500 + 150 + 300 + 1200)
