'use strict';
const menu = document.querySelector(".menu");
const botao = document.getElementById("menu_botao");
function menuHam(){
    menu.classList.toggle("menu_ham")
};

botao.onclick = menuHam;