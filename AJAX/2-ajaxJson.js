$(document).ready(function () {
    $('#leerEmpleado').click(function (e) { 
        e.preventDefault();
        $.get("empleados.json",function (data) {  
            //datos
            console.log(data);
            console.log(data.nombre);

            //cambiando en la vista
            $('#datosEmpleado').html(`
            Nombre: ${data.nombre} <br>
            Puesto: ${data.puesto} <br>
            Edad: ${data.edad} <br>
            `);
        });
    });
});