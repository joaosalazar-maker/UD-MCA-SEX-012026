// PARTE 3 - Array de Objetos
// Criando a lista com 10 carros para a concessionaria
let concessionaria = [
    { nome: 'Skyline GTR', preco: 550000, estoque: 5 },
    { nome: 'Civic', preco: 150000, estoque: 12 },
    { nome: 'Lancer Evo', preco: 200000, estoque: 3 },
    { nome: 'Supra', preco: 400000, estoque: 2 },
    { nome: 'Gol Quadrado', preco: 25000, estoque: 50 },
    { nome: 'Golf GTI', preco: 180000, estoque: 8 },
    { nome: 'Audi RS6', preco: 900000, estoque: 4 },
    { nome: 'Camaro', preco: 350000, estoque: 6 },
    { nome: 'Opala', preco: 45000, estoque: 15 },
    { nome: 'Celta', preco: 20000, estoque: 30 }
];

// A. Qual é o preço do segundo objeto?
console.log("A) Preco do segundo carro:", concessionaria[1].preco);

// B. Qual é o nome do terceiro objeto?
console.log("B) Nome do terceiro carro:", concessionaria[2].nome);

// C. Quantos itens existem no array?
console.log("C) Total de carros no array:", concessionaria.length);

// D. Imprima o nome de todos os objetos (usando for)
console.log("D) Lista de nomes:");
for (let i = 0; i < concessionaria.length; i++) {
    console.log("- " + concessionaria[i].nome);
}

// E. Some o total de estoque de todos os objetos
let somaEstoque = 0;
for (let i = 0; i < concessionaria.length; i++) {
    somaEstoque += concessionaria[i].estoque;
}
console.log("E) Soma total do estoque:", somaEstoque);

// F. Qual objeto possui maior estoque?
let maisEstoque = concessionaria[0];
for (let i = 1; i < concessionaria.length; i++) {
    if (concessionaria[i].estoque > maisEstoque.estoque) {
        maisEstoque = concessionaria[i];
    }
}
console.log("F) Carro com mais estoque:", maisEstoque.nome);
