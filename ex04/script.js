let vetor1 = [];
let vetor2 = [];
let vetorResultado = [];
let tamanhoResultado = 0;

for (let i = 0; i < 5; i++){
    vetor1[i] = parseInt(prompt("Digite um número para o primeiro vetor:"));
}
for (let i = 0; i < 5; i++){
    vetor2[i] = parseInt(prompt("Digite um número para o segundo vetor:"));
}

for (let i = 0; i < 5; i++){
    let numeroAtual = vetor1[i]; //o número atual é o número na posição i do primeiro vetor
    let achouNoSegundoVetor = false; //variável para verficar se o número atual foi encontrado no segundo vetor
    for (let indice2 = 0; indice2 < 5; indice2++){
        if (vetor2[indice2] === numeroAtual){ //se o número na posição indice2 do segundo vetor for igual ao número atual, ele é encontrado no segundo vetor
            achouNoSegundoVetor = true; //variável é atualizada para true, indicando que o número atual foi encontrado no segundo vetor
            break;//o loop é parado
        }
    } 
if (achouNoSegundoVetor){
    let jaExisteNoResultado = false;//variável para verificar se o número atual já existe no vetor resultado, para evitar números repetidos no resultado
    for (let indiceResultado = 0; indiceResultado < tamanhoResultado; indiceResultado++){
        if (vetorResultado[indiceResultado] === numeroAtual){ //se o número na posição indiceResultado do vetor resultado for igual ao número atual, ele já existe no resultado
            jaExisteNoResultado = true; //variável é atualizada para true, indicando que o número atual já existe no vetor resultado
            break;
        }
    }
    if (!jaExisteNoResultado){ //se o número atual não existe no vetor resultado, ele é adicionado ao vetor resultado
        vetorResultado[tamanhoResultado] = numeroAtual; //o número atual é adicionado na posição tamanhoResultado do vetor resultado, que é a próxima posição disponível no vetor resultado
        tamanhoResultado++;
        }
    }
}
let textoResultado = "";
for (let posicao = 0; posicao < tamanhoResultado; posicao++){
    if (posicao === 0){ //se for a primeira posição do vetor resultado, o número é adicionado dietamente ao texto resultado, sem vírgula antes, para evitar uma vírgula no início do texto resultado
        textoResultado += vetorResultado[posicao];
    } else {
        textoResultado += ", " + vetorResultado[posicao]; //se não for a primeira posição do vetor resultado, o número é adicionado ao texto resultado com uma vírgula e um espaço antes, para separar os números no texto resultado
    }
}
alert("Vetor1: " + vetor1);
alert("Vetor2: " + vetor2);
alert("Números presentes em ambos os vetores: " + textoResultado);