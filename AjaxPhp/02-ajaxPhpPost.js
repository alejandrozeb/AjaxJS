$(document).ready(function () {
    //obtenemos el submit
    $('form').submit(function (e) { 
        e.preventDefault();
        //obtenemos los datos del formulario
        let nombre = $('#nombre').val();
        let puesto = $('#puesto').val();
        //enviando los datos
        $.post("http://localhost/AjaxPhpJq/AjaxJS/AjaxPhp/02-post.php", 
        {
            nombre,
            puesto
        },function (data, textStatus, jqXHR) {
                $('#res').removeClass('.d-none');
                $('#res').html(data);          
            }
        ).done(function(){
            $('#estado').html("exito");
            $('#estado').addClass("alert-success");
            $('#estado').removeClass("d-none");
        }).fall(function(){
            $('#estado').html("Fallo");
            $('#estado').addClass("alert-danger");
            $('#estado').removeClass("d-none");            
        }).always(
            console.log("finalizo")
        );
    });
});