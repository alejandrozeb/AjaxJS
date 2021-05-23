$(document).ready(function () {
    //tambien puede ser de tipo multiple, ademas añade un buscador
    //$('.chosen-select').chosen();

    //desactiva el buscador hasta el numero 11
    //$('.chosen-select').chosen({disable_search_threshold:11});

    //maximo de elecciones en select multiple
    //$('.chosen-select').chosen({max_selected_options:3});

    //todo a la dereche right ademas podemos mandar mas opciones con la ayuda del objeto
   /*  $('.chosen-select').chosen({
        rtl:true,
        max_selected_options:3
    }); */

    //evento cuando cambia un elemento
    $('.chosen-select').chosen().change(function(){
        //alert('cambio');

        //podemos devolver el elemento que elegimos
        alert($(this).val());

        //caso de uso seleccionar pais, departamento, ciudad....
    });

});