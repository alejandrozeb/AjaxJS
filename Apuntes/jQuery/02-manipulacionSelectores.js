$(document).ready(function(){
    //agrega una clase
    $('#boton').addClass('btn-danger');

    //remove
    $('#boton').removeClass('btn-primary');

    //añade un elemento al final
    $('#subcontenedor').append('<button type="button" class="btn btn-danger" id="boton">Agregado con append</button>');

    //añade al inicio
    $('#subcontenedor').prepend('<button type="button" class="btn btn-danger" id="boton">Agregado con prepend</button>');

    //añadimos css, cambia el color de letra
    $('#boton').css('color', 'blue');

    //cambio de fondo
    $('#boton').css('background-color', 'yellow');

    //para cambiar en bloque
    $('#boton').css({'color':'yellow', 'background-color':'blue'});

    //removiendo tag de html
    //$('#subcontenedor').remove();

    //ocultando el contenido dispaly: none;
    //$('#subcontenedor').hide();


});