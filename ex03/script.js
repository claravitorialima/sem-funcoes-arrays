let nomes = [];
let idade = [];
for (let i = 0; i < 9; i++){
    let nome = prompt("Por favor digite o nome da pessoa:");
    let idadePessoa = parseInt(prompt("Agora digite a idade desta pessoa:"));
    nomes[i] = nome; //o nome digitado é armazenado na posição i da lista 
    idade[i] = idadePessoa; //a idade digitada é armazenada na posição i da lista, relacionada ao nome da mesma posição 
} 
let listagemMenores = "";
let primeiro = true; //variável para identificar se é o primeiro nome a ser adicionado na listagem, para não adicionar a vírgula antes do primeiro nome
for (let i = 0; i < 9; i++){
    if (idade[i] < 18){
        if (primeiro){
            listagemMenores += nomes[i] + "(" + idade[i] + " anos)"; //se for o primeiro nome a ser adicionado na listagem, ele é adicionado diretamente, sem vírgula antes
            primeiro = false; //os próximos nomes não serão mais o primeiro, então a variável é atualizada para false
        } else {
            listagemMenores += ", " + nomes[i] + "(" + idade[i] + " anos)"; //se não for o primeiro nome a ser adicionado na listagem, ele é adicionado com uma vírgula e um espaço antes, para separar os nomes
        } 
    } 
} 
if (listagemMenores !== ""){ //se a variável listagemMenores não estiver vazia, ou seja, se houver pessoas menores de idade, ele mostra a listagem dos nomes e idades das pessoas menores de idade
    alert("Pessoas que são menores de idade: " + listagemMenores);
} else {
    alert("Nenhuma pessoa é menor de idade.");
} 