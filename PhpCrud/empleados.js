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
                     <li> 
                     <i class="fas fa-pencil-ruler" 
                     data-id='${item.id}'
                     data-nombre='${item.nombre}'
                     data-puesto='${item.puesto}'
                     data-edad='${item.edad}'
                     ></i> 
                     Nombre: ${item.nombre} -- Puesto: ${item.puesto} -- Edad: ${item.edad}  </li>
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

    //evento al icono
    //cuando se crea elementeos de manera dinamica se manejan de esta forma
    $(document).on('click', '.fa-pencil-ruler', function(){
        //seleccionamos el objeto
        //console.log($(this).data('id'));

        //ocultamos el boton crear
        $('#crearEmpleado').addClass('d-none');
        $('#editarEmpleado').removeClass('d-none');
        $('#datos-tab').html('Editar');
        $('#datos-tab').click();
        
        $('#nombre').val($(this).data('nombre'));
        $('#puesto').val($(this).data('puesto'));
        $('#edad').val($(this).data('edad'));
        $('#id').val($(this).data('id'));
    });

    //editar al back
    $('#editarEmpleado').click(function (e) { 
        e.preventDefault();

        let nombre=$('#nombre').val();
        let puesto=$('#puesto').val();
        let edad=$('#edad').val();
        let id=$('#id').val();

        $('#lista-tab').click();
        $('#leerEmpleados').click();
        
        $('#editarEmpleado').addClass('d-none');
        $('#crearEmpleado').removeClass('d-none');
    });
});