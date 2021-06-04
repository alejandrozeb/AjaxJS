$(document).ready(function () {
    $('#leerEmpleados').click(function (e) { 
        e.preventDefault();

        $('#listaEmpleados').html('');
        $.getJSON("http://localhost/AjaxPhpJq/AjaxJS/PhpCrud/empleados.php",
        {"accion": "leer"},
            function (data, textStatus, jqXHR) {
                $.each(data, function (index, item) { 
                     $('#listaEmpleados').html(
                        $('#listaEmpleados').html() +     
                    `
                     <li> Nombre: ${item.nombre} </li>
                     <li> Puesto: ${item.puesto} </li>
                     `);
                });
            }
        );
    });

    $('#crearEmpleado').click(function (e) { 
        e.preventDefault();
        let nombre = $('#nombre').val();
        let puesto = $('#puesto').val();
        let edad = $('#edad').val();

        $.post('http://localhost/AjaxPhpJq/AjaxJS/PhpCrud/empleados.php',
        {"accion": "insertar",nombre,puesto,edad},
        function(data){
            if(data===1){
                $('#nombre').val('');
                $('#puesto').val('');
                $('#edad').val('');
                //fuerza un click
                $('lista-tab').click();
                //fuerza otro click
                $('#leerEmpleados').click();
            }
            if(data==2){
                console.log('error');
                $('#nombre').val('');
                $('#puesto').val('');
                $('#edad').val('');
            }
        });
    });
});