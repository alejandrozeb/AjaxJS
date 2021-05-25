$(document).ready(function () {
    $('#fecha').daterangepicker({
        //cambio de formato
        locale:{
            format:"YYYY-MM-DD hh:mm:ss"
        },
        //permite seleccionar la hora
        timePicker:true
    });
});