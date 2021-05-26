$(document).ready(function () {
  $(".bxslider").bxSlider({
    //se mueve automaticamente
    auto: true,
    //velociadad en milisegundos
    speed: 100,
    //agrega mas controles
    autoControls: true,
    //onclick se pausa en una imagen
    stopAutoOnClick: true,
    //paginador
    pager: true,
    //tipo de paginador
    pagerType: "short",
    //tamaño del slider
    // slideWidth: 100
    //modo de movimiento
    mode: "vertical",
    //muestra en forma aleatoria
    randomStart:true,
    //del ultimo pasa al primero
    infiniteLoop: true
  });
});
