/* 

document -> HTML 

getElementById -> trás um elemento pelo ID 
getElementByClassName -> trás todos os elementos com essa classe
getElementByTagName -> trás todos os elementos com essa tag
getElementByName -> trás todos os elementos com esse nome 

querySelector -> trás um elemento, o primeiro que encontrar
querySelectorAll -> trás todos os elementos que encontrar 


EXEMPLOS:

document.getElementById("main-input")

const elements = document.getElementsByClassName("paragraph-js") 

const elements = document.getElementsByTagName("p") 

const elements = document.getElementsByName("nome-completo") 

const elements = document.querySelector("p") OU 
const elements = document.querySelector("button.abacate")

const elements = document.querySelectorAll("p") 



ALTERANDO E ACESSANDO TEXTOS 

textContent -> pega todo o conteúdo
innerText -> pega apenas o texto
innerHTML-> permite adicionar HTML e texto

const element = document.querySelector(".paragraph-js")

console.log(element.textContent)    // SÓ HTML
console.log(element.innerText)      // LEVA EM CONTA O CSS
console.log(element.innerHTML)      // TRÁS TUDO
 

EVENTOS

const input = document.querySelector("#main-input")

function cliqueiNoBotao(){
    console.log(input.value)
}

function digiteiNoInput(){
    console.log(input.value)

*/



