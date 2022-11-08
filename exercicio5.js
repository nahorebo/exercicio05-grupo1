let user1 = prompt("Digita seu nome e sobrenome");
let userone = Number(prompt("Qual é tua altura?"));
let user2 = prompt("Digita seu nome e sobrenome");
let usertwo = Number(prompt("Qual é a tua altura"));

console.log(`Registros de: ${user1}, ${user2}`);
console.log(`Altura de ${user1}: ${userone}`);
console.log(`Altura de ${user2}: ${usertwo}`);

if (userone > usertwo) {
    console.log(`${user1} é mais alto/a que ${user2}`);
} else {
    console.log(`${user1} é mais baixo/a que ${user2}`);
}