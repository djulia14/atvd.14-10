class Carro {
    constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
 }

    descricao() {
    return `${this.marca} ${this.modelo} (${this.ano})`;
 }

    calcularIdade(anoAtual) {
    return anoAtual - this.ano;
 }
}

const carro1 = new Carro('Fiat', 'Uno', 2015);
const carro2 = new Carro('Volkswagen', 'Gol', 2020);
const carro3 = new Carro('Chevrolet', 'Onix', 2022);


console.log(carro1.descricao());
console.log(`Idade: ${carro1.calcularIdade(2026)} anos`);


console.log(carro2.descricao());
console.log(`Idade: ${carro2.calcularIdade(2026)} anos`);


console.log(carro3.descricao());
console.log(`Idade: ${carro3.calcularIdade(2026)} anos`);