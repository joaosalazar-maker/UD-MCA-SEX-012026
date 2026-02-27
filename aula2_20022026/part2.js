// PARTE 2 - Objeto
// Criando o objeto com as 4 propriedades pedidas
let carro = {
    nome: 'Skyline GTR',
    cor: 'Azul',
    preco: 550000,
    estoque: 15
};

// A. Como acessar o nome do objeto?
console.log("A) Nome do carro:", carro.nome);

// B. Como acessar o preço usando colchetes?
console.log("B) Preço (usando colchetes):", carro['preco']);

// C. Atualize o estoque para 80.
carro.estoque = 80;
console.log("C) Novo valor do estoque:", carro.estoque);

// D. Imprima todas as propriedades no console.
console.log("D) Dados completos do objeto:");
console.log(carro);
