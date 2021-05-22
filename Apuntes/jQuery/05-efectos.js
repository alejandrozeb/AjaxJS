$(document).ready(function () {
    //mostrar con efecto
    $('#subcontenedor button:nth-child(4)').click(function (e) { 
        e.preventDefault();
        //oculta la imagen
        //$('img').hide(300);
        $('img').hide('slow');
    });

    $('#subcontenedor button:nth-child(5)').click(function (e) { 
        e.preventDefault();
        //muetsra la imagen
       // $('img').show(300);

       //podemos definir la velocidad con la que se mustra
        $('img').show('fast');
    });

    $('#subcontenedor button:nth-child(6)').click(function (e) { 
        e.preventDefault();
        //muestra y oculta
        $('img').toggle(300);
    });


  });