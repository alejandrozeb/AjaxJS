$(document).ready(function () {
    $('#leerEmpleados').click(function (e) { 
        e.preventDefault();

        $('#listaEmpleados').html('');
        $.getJSON("http://localhost/AjaxPhpJq/AjaxJS/PhpCrud/empleados.php",
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
});