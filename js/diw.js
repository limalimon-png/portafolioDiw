window.onload=()=>{
    crearTabla();
}

var rutaEjercicios=["../ejerciciosPrimeraEvaluacion/accidente/index.html",
"../ejerciciosPrimeraEvaluacion/animacionCubo/index.html"]



function crearTabla(){
let tablaEjercicios=document.getElementById("ejercicios");



    for (let i = 0; i < rutaEjercicios.length; i++) {
        let titulo=rutaEjercicios[i].substring(31);
        titulo=titulo.substring(0,titulo.indexOf("/"))

        tablaEjercicios.innerHTML+="<div class='col-lg-4 col-md-6 portfolio-item ' onclick='redireccionar("+i+")'>"+
        "<div class='portfolio-wrap'>"+
          "<img src='../img/diw.jpg' class='img-fluid' alt=''>"+
          "<div class='portfolio-info'>"+
           "<h4>"+titulo+"</h4>"+
            "<p>Web</p>"+
            "<div class='portfolio-links'>"+
             " <a href='assets/img/portfolio/portfolio-2.jpg' data-gallery='portfolioGallery' class='portfolio-lightbox' title='Web 3'><i class='bx bx-plus'></i></a>"+
              
            "</div>"+
          "</div>"+
        "</div>"+
      "</div>";
         
        
    }

}





function redireccionar(direccion){
    
    location.href=rutaEjercicios[direccion];
}