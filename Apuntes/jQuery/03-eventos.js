$(document).ready(function () {
    $('#boton').click(function (e) {
        //evita que haga un envio de datos 
        e.preventDefault();
        //cambiando una imagen
        $('img').attr('src', 'imagen2.png');     
    });

    //seleccionan el primero
    $('#subcontenedor button:nth-child(1)').click(function (e) { 
        e.preventDefault();
        $('img').attr('width', '200px');
    });

    //seleccionando el segundo
    $('#subcontenedor button:nth-child(2)').click(function (e) { 
        e.preventDefault();
        let margen = $('img').css('margin-left');
        margen = parseInt(margen.replace('px',''));
        margen = margen +30;

        $('img').css('margin-left', margen + 'px');
    });

    //seleccionando al tercero
    $('#subcontenedor button:nth-child(3)').click(function (e) { 
        e.preventDefault();
        //quita y pone la clase
        $('img').toggleClass('d-none');
    });


  });