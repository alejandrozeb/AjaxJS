$(document).ready(function () {
    $('#leerArregloEmpleado').click(function (e) { 
        e.preventDefault();
       // $('#listaEmpleados').html('');
        $.get("empleados.json",function (data) {  
            //datos
            console.log(data);
            //iterador foreach
            $.each(data, function (index, item) {
                //concatenando 
                 $('#listaEmpleados').html($('#listaEmpleados').html() +`
                 <li> ${item.nombre} -- ${item.puesto} -- ${item.edad}  </li>
                 `);
            });
        });
    });

        $('#leerGetJSON').click(function (e) { 
        e.preventDefault();
        //de un documento txt trae como string
       // $.get("empleados.txt", function(data){
            //cambio a json
          //  data = JSON.parse(data);
           // console.log(data);
        //});

        //con JSON de un txt trae como json
        $.getJSON("empleados.json", function(data){
            console.log(data.empleados);
            console.log(data.temporales);
            $('#listaEmpleados').html('');
            //recorriendo un objeto
            $.each(data.temporales, function (index, item) {
                //concatenando 
                 $('#listaEmpleados').html($('#listaEmpleados').html() +`
                 <li> ${item.nombre} -- ${item.puesto} -- ${item.edad}  </li>
                 `);
            });
        });
    });

    //buscador

    let empleados;
    $.getJSON("empleados.json", function(data){
        empleados = data.empleados;
        //dejar de soltar la tecla
        $('#nombre').keyup(function (e) { 
            $('#listaEmpleados').html('');
            let nombre = $(this).val();
            $.each(empleados, function (indexInArray, item) { 
                 //comparando valores
                 if(item.nombre.toLowerCase().indexOf(nombre.toLowerCase()) !== -1){
                    $('#listaEmpleados').html($('#listaEmpleados').html() +`
                    <li> ${item.nombre} -- ${item.puesto} -- ${item.edad}  </li>
                    `);
                 }
            });
        });
    });
});