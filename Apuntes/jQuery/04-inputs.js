$(document).ready(function () {
    //cuando existan cambios o se suelte la tecla
    $('#texto').keyup(function (e) { 
        //no sirven el prevent default por que se refresca la pagina con enter o saliendo del input
        $('#saludo').html('Hola '+$('#texto').val());
    });

    $('form').submit(function (e) { 
        //evitamos que el form se envie
        e.preventDefault();
        //cada vez que se realiza una funciona va y busca a la libreria
    });
});