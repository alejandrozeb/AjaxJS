$(document).ready(function () {
    //cuando existan cambios o se suelte la tecla
    $('#texto').keyup(function (e) { 
        $('#saludo').html('Hola '+$('#texto').val());
    });
});