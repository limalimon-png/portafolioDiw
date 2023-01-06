window.onload=()=>{
    // localStorage.clear();
  // console.log(JSON.parse(localStorage.getItem("body")))
  // if(localStorage.getItem("body")!=undefined){
    
  //   document.body.children= JSON.parse(localStorage.getItem("body"))
  // }else{
  //   localStorage.clear();
  //   crearTabla();
    
  // }
  crearTabla();
}


var rutaEjercicios=["../ejerciciosPrimeraEvaluacion/accidente/index.html"
,"../ejerciciosPrimeraEvaluacion/animacionCubo/index.html"
,"../ejerciciosPrimeraEvaluacion/baraja/index.html"
,"../ejerciciosPrimeraEvaluacion/carta/index.html"
,"../ejerciciosPrimeraEvaluacion/comic/index.html"
,"../ejerciciosPrimeraEvaluacion/fichaImagen/ej1/index.html"
,"../ejerciciosPrimeraEvaluacion/fichaImagen/ej2/index.html"
,"../ejerciciosPrimeraEvaluacion/fichaImagen/ej3/index.html"
,"../ejerciciosPrimeraEvaluacion/gotaAgua/index.html"
,"../ejerciciosPrimeraEvaluacion/parallax/index.html"
,"../ejerciciosPrimeraEvaluacion/pelotarebotando/index.html"
,"../ejerciciosPrimeraEvaluacion/placabase/placabase/index.html"
,"../ejerciciosPrimeraEvaluacion/placabase/placabase2/index.html"
,"../ejerciciosPrimeraEvaluacion/plantilla con bootstrap/index.html"
,"../ejerciciosPrimeraEvaluacion/plantilla con css/index.html"
,"../ejerciciosPrimeraEvaluacion/plantilla con pure css/index.html"
,"../ejerciciosPrimeraEvaluacion/puzzle/index.html"
,"../ejerciciosPrimeraEvaluacion/relojDeArena/index.html"
,"../ejerciciosPrimeraEvaluacion/rosalia responsive/index.html"
,"../ejerciciosPrimeraEvaluacion/rosalia responsive.zip/index.html"]







function crearTabla(){
let tablaEjercicios=document.getElementById("ejercicios");



    for (let i = 0; i < rutaEjercicios.length; i++) {
        let titulo=rutaEjercicios[i].substring(31);
        titulo=titulo.substring(0,titulo.indexOf("/"))

        tablaEjercicios.innerHTML+="<div class='col-lg-4 col-md-6 portfolio-item ' onclick='redireccionar("+i+")'>"+
        "<div class='portfolio-wrap'>"+
          "<img src='../img/deberes.jpg' class='img-fluid' alt=''>"+
          "<div class='portfolio-info'>"+
           "<h4>"+titulo+"</h4>"+
            "<p>DIW</p>"+
            "<div class='portfolio-links'>"+
             " <a href='assets/img/portfolio/portfolio-2.jpg' data-gallery='portfolioGallery' class='portfolio-lightbox' title='Web 3'><i class='bx bx-plus'></i></a>"+
              
            "</div>"+
          "</div>"+
        "</div>"+
      "</div>";
         
        
    }
    // let aux = JSON.stringify(document.body.children);
    // console.log(aux);
    // localStorage.setItem("body", aux);


}





function redireccionar(direccion){
    
    location.href=rutaEjercicios[direccion];
}