
/// PARA O FUTURO PORTIFÓLIO: CALCULADORA DE IMC (PATH - file:///C:/Users/ANACLARACORSI/Downloads/js-curso-2-aula1/js-curso-2-aula1/js-curso-2-aula_-/index.html)

// let titulo = document.querySelector('h1');
//     titulo.innerHTML = 'Bem vinda à calculadora de IMC!';

// let paragr = document.querySelector('p');
//     parag.innerHTML = 'Informe os dados abaixo:';

// function calcularIMC(){
//     let peso = document.getElementById('InputPeso').value;
//     let altura = document.getElementById('InputAltura').value;
    
//     let IMC = peso/(altura**2);
//     let p = altura**2

//     console.log(p);
//     console.log(peso/p);
//     }

// function novasMedidas(){
//     let peso = document.getElementById('InputPeso').value;
//         peso.innerHTML = ' ';

//     let altura = document.getElementById('InputAltura').value;
//         altura.innerHTML = ' ';
  
// }    


// PARA O FUTURO - CONVERSÃO DE DOLARES EM REAIS + (FUTURO) WEB SCRAPING DA COTAÇÃO

function imprimirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function textoTelaInicial(){

    imprimirTextoNaTela('h1', 'Bem vinda a sua lista de compras!');
    
    imprimirTextoNaTela('p', 'Que item você gostaria de acrescentar à sua lista de compras?');

    imprimirTextoNaTela('input', '  ');

    }
    
    textoTelaInicial();

function limparCampo(){
        input = '  ';
    }
    
    // criar a lista
    let listaDeCompras = [];
    let indice = 0;
    
    // pegar o imput quando a pessoa apertar o botão acrescentar e coloca-lo na lista com um índice
    
    function acrescentarItem(){
    
    let input = document.querySelector('input').value;
    
    limparCampo();

    indice++
    
    // colocar um índice explícito na frente do item
    
    let itemDaLista = (indice + ' - ' + input);  
    
    listaDeCompras.push(itemDaLista);
    
    console.log(listaDeCompras);
    
    }
    
    // acrescentar item à lista listaDeCompras[];
    
    
    
    
    
    
    
    // apresentar lista na tela
    
    
    
    
    
    
    
    
    
    
