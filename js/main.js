function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"))
    //alert('Obrigado por clicar!')
}

function redirecionar(){
    window.open("https://github.com/DanielMT7/aula_javascript"); // outra aba
    //window.location.href = "https://github.com/DanielMT7/aula_javascript"; // nessa aba
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert('Página carregada');
}

function funcaoChange(elemento){
    console.log(elemento.value)   
}

/*
function soma(n1, n2){
    return n1 + n2;
}
*/

/*
function validarIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt('Digite sua idade: ');
alert(validarIdade(idade));
*/

/*
function setReplace(frase, nome, novoNome){
    return frase.replace(nome, novoNome);
}

alert(soma(5, 10));
alert(setReplace('Vai Japão', 'Japão', 'Brasil'));
*/

/* 1
var nome = 'Daniel Motta';
var idade = 21;
var idade2 = 10;
var frase = 'O Japão é o melhor time do mundo!'
var n1 = 2;
var n2 = 3;
*/

/* 2
var lista = ['maça', 'pêra', 'laranja'];
lista.push('uva');
lista.pop();
*/

/* 3
var fruta = {
    nome: 'maça',
    cor: 'vermelha'
};
*/

/* 4
var frutas = [
    {
        nome: 'maça',
        cor: 'vermelha'
    },
    {
        nome: 'uva',
        cor: 'roxa'
    },
    {
        nome: 'pêra',
        cor: 'verde'
    }
];
*/


/* 1
alert('Bem-vindo ' + nome);
alert(nome + ' tem ' + idade + ' anos.');
alert(idade + idade2);
console.log(nome);
console.log(idade);
console.log(frase.toUpperCase().replace('Japão', 'Brasil'));
console.log(n1*n2);
*/

/* 2
console.log(lista);
console.log(lista.length);
console.log(lista.toString());
console.log(lista.join(' - '));
*/

/* 3
console.log(fruta);
console.log(fruta.cor);
*/

/* 4
console.log(frutas);
*/


// ----------------------------------------- Condicionais, Laços e Date

/* IF e ELSe
// var idade = 18;
var idade = prompt('Qual a sua idade: ');
if (idade >= 18){
    alert('maior de idade');
} else {
    alert('menor de idade');
}
*/

/* While
var count = 0;
while(count <= 5){
    console.log(count);
    count++;
};
*/

/*
var count;
for(count = 1; count <= 5; count++){
    console.log(count)
}
*/

/*
var d = new Date();
console.log(d.getDay());
console.log(d.getMonth()+1);
*/