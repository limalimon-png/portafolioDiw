var about=1;
function minimizarMaximizar(a){
    about=0;
//     document.getElementById("s").classList.add
//     let card=a.parentElement.parentElement;
// //    if(card.classList[1]=="izquierda"){
   
// //    }else{

// //    }
// card.classList.add("prueba");

a.parentElement.parentElement.parentElement.classList.add("ocultar")
a.parentElement.parentElement.parentElement.classList.remove("reaparecer")

// a.parentElement.parentElement.previousSibling.previousSibling.classList.add("reaparecer")
// a.parentElement.parentElement.previousSibling.previousSibling.classList.remove("ocultar")
document.getElementById("").parentElement.childNodes
console.log(a.parentElement.parentElement.parentElement.childNodes);

   
}

// function redireccion(){
//     // window.location.href="./html/"+htm+".html";
//     window.location.href = "./html/about.html";
// }
function comprobarRedireccion(event){
if(about!=1){
    event.preventDefault();
    about=1;
}
}