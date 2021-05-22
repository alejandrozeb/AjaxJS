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

    $('#subcontenedor button:nth-child(7)').click(function (e) { 
        e.preventDefault();
        //aparece con otro efecto
        $('img').fadeIn(300);
    });

    $('#subcontenedor button:nth-child(8)').click(function (e) { 
        e.preventDefault();
        //desaparece con otro efecto
        $('img').fadeOut(300);
    });

    $('#subcontenedor button:nth-child(9)').click(function (e) { 
        e.preventDefault();
        //desaparece con otro efecto
        $('img').slideDown(300);
    });

    $('#subcontenedor button:nth-child(10)').click(function (e) { 
        e.preventDefault();
        //desaparece con otro efecto
        $('img').slideUp(300);
    });

    $('#subcontenedor button:nth-child(11)').click(function (e) { 
        e.preventDefault();
        //desaparece con otro efecto
        $('img').slideToggle(300);
    });




  });