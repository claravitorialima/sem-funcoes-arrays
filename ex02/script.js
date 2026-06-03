let numeros= [];
let soma = 0;
for (let i = 0; i < 8; i++){
    let numero = parseFloat(prompt("Digite um número:"));
    numeros[i] = numero; //o número digitado é armazenado na posição i  da lista
    soma += numero; //a cada número digitado, ele é adicionado a variável soma
}
let media = soma / 8;
let numerosAcimaMedia = "";
let primeiro = true; //variável para verificar se é o primeiro número acima da média, para não adicionar a vírgula antes do primeiro número
for (let i = 0; i < 8; i++){
    if (numeros[i] > media){ //se o número na posição i for maior que a média, ele é acionado a variável
        if (primeiro){ //se for o primeiro número acima da média, ele é adicionado diretamente a variável
            numerosAcimaMedia += numeros[i];//se não for o primeiro número acima da média, ele é adicionado a variável com uma vírgula e um espaço antes
            primeiro = false; //os próximos não serão mais o primeiro
        } else {
            numerosAcimaMedia += ", " + numeros[i];//se não for o primeiro número acima da média, ele é adicionado a variável com uma vírgula e um espaço antes
        }
    }
}
alert("Média dos valores: " + media);
if (numerosAcimaMedia !== ""){ //se a variável não estiver vazia, ou seja, se houver números acima da média, ele mostra os números acima da média
    alert("Valores acima da média: " + numerosAcimaMedia);
} else {
    alert("Nenhum valor acima da média.");
}