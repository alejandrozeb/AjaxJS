$(document).ready(function () {
    $('#leerEmpleado').click(function (e) { 
        e.preventDefault();
        $.get("empleados.json",function (data) {  
            //datos
            console.log(data);
        });
    });
});