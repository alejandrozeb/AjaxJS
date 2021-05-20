$(document).ready(function(){
    //sleccionamos por el tag
    //muetsra el contenido del tag
    /* let varBoton = $('button').html();
    console.log(varBoton); */

    //cambia texto del tag
    //$('button').html("Cambiado desde Jquery");

    //desde la clase    
    //$('.btn').html("Cambiado desde su clase");

    //desde el id
    //$('#boton').html("Cambiado desde id");

    //cambia todas las etiquetas
    //$('button').html("cambiado desde etiqueta");

    //cambia con id de un contenedor
    $('#subcontenedor button').html("cambiado desde contenedor");

    //al primer boton
    $('button:first').html("primero");

    //al ultimo
    $('button:last').html("last");
});

//con js puro

//document.querySelector('#boton').innerHTML = "cambiado desde js puro";