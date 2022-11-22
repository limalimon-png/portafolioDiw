var about=1;
function minimizarMaximizar(a){
    about=0;
//     document.getElementById("s").classList.add
//     let card=a.parentElement.parentElement;
// //    if(card.classList[1]=="izquierda"){
   
// //    }else{

// //    }
// card.classList.add("prueba");

a.parentElement.parentElement.parentElement.classList.add("ocultarlento")
a.parentElement.parentElement.parentElement.classList.remove("reaparecer")

// a.parentElement.parentElement.previousSibling.previousSibling.classList.add("reaparecer")
// a.parentElement.parentElement.previousSibling.previousSibling.classList.remove("ocultar")
// document.getElementById("").parentElement.childNodes
a.parentElement.parentElement.parentElement.parentElement.children[0].classList.add("reaparecer")
a.parentElement.parentElement.parentElement.parentElement.children[0].classList.remove("ocultar");

   
}
function abrir(boton){
    boton.classList.remove("reaparecer")
    boton.classList.add("ocultar")
boton.parentElement.children[1].classList.remove("ocultar")
boton.parentElement.children[1].classList.add("reaparecer")

}
// function redireccion(){
//     // window.location.href="./html/"+htm+".html";
//     window.location.href = "./html/about.html";
// }


function minimizar(){
    about=0;
}
function comprobarRedireccion(event){
if(about!=1){
    event.preventDefault();
    about=1;
}
}