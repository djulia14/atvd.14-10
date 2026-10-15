class Produto {
    constructor(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
 }

    valorEmEstoque() {
    return this.preco * this.quantidade;
 }
}

const produto1 = new Produto('Caderno', 12.5, 40);
const produto2 = new Produto('Caneta', 2.5, 100);


console.log(`${produto1.nome}: R$ ${produto1.valorEmEstoque().toFixed(2)} em estoque`);
console.log(`${produto2.nome}: R$ ${produto2.valorEmEstoque().toFixed(2)} em estoque`);