// PARTE 1 - Array Simples (Tema: Carros)
let carros = [
    'Gol', 'Palio', 'Uno', 'Celta', 'Civic', 
    'Corolla', 'Onix', 'HB20', 'Saveiro', 'Fusca', 
    'Ferrari', 'BMW', 'Audi', 'Tesla', 'Hilux', 
    'Kwid', 'Argo', 'Renegade', 'Cruze', 'Opala'
];

// A. Qual elemento está na posição 0, 7, 11, 15, 18 e 20?
console.log("A) Posição 0:", carros[0]);
console.log("   Posição 7:", carros[7]);
console.log("   Posição 11:", carros[11]);
console.log("   Posição 15:", carros[15]);
console.log("   Posição 18:", carros[18]);
console.log("   Posição 20:", carros[20]);

// B. Qual elemento está na penúltima e última posição?
console.log("B) Penúltima posição:", carros[carros.length - 2]);
console.log("   Última posição:", carros[carros.length - 1]);

// C. Quantos elementos existem no array?
console.log("C) Quantidade de elementos:", carros.length);

// D. Adicione um novo elemento ao final do array.
carros.push('Chevette');
console.log("D) Novo elemento adicionado:", carros[carros.length - 1]);

// E. Imprima todos os elementos usando um for.
console.log("E) Lista de todos os elementos:");
for (let i = 0; i < carros.length; i++) {
    console.log(carros[i]);
}