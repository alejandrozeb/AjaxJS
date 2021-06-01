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
        },
            function (data, textStatus, jqXHR) {
                console.log(data);
                $('#res').html(data);        
            },
        );
    });
});