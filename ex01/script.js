let nomes = [];
//cria um contador chamado i que começa em 0
//o loop vai ficar rodando enquanto i for menos que 7
for (let i = 0; i < 7; i++){ 
    let nome = prompt("Digite um nome desejado:");
    nomes[i] = nome; //o nome digitado é armazenado na posição i da lista
}
//let i = nomes.length - 1; o contador i começa na última posição da lista (como a lista tem 7 itens, as posições são de 0 a 6, por isso temos o -1)
//o loop continua rodando enquanto o i for maior ou igual a 0
//subtrai 1 de i a cada volta
for (let i = nomes.length - 1; i >= 0; i--){
    console.log(nomes[i]); //a cada volta ele pega o nome que está na posição i e mostra no navegador. Como o loop está andando de trás para frente, os nomes vão aparecer na ordem inversa
}
let textoInverso = "";
for (let i = nomes.length -1; i >= 0; i--){
    textoInverso += nomes[i] + " "; //a cada volta ele pega o nome que está na posição i, e adicione um espaço 
    if (i > 0){
        textoInverso += ", "; // se i for maior que 0, ou seja, se não for o único nome, ele adiciona uma vírgula e um espaço
    }
}
alert("Nomes digitados na ordem inversa: " + textoInverso);