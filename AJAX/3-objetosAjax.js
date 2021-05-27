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
});