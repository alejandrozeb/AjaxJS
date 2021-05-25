$(document).ready(function () {
    $('#fecha').daterangepicker({
        //cambio de formato
        locale:{
            format:"YYYY-MM-DD hh:mm:ss"
        },
        //permite seleccionar la hora
        timePicker:true,
        //usando la fecha del ordenador
        startDate: moment().startOf('hour'),
        endDate: moment().startOf('hour').add(48, 'hour')
    }, function(inicio, fin){
        console.log(inicio.format("YYYY-MM-DD")+" "+ fin.format("YYYY-MM-DD"));
    });

    //solo un calendar
    $('#fecha2').daterangepicker({
        //cambio de formato
        locale:{
            format:"YYYY-MM-DD hh:mm:ss"
        },
        //solo un calendario
        singleDatePicker: true,
        //cambiando la intefaz de los meses
        showDropdowns: true,
        //minimo de año seleccionable
        minYear:2000,
        //año maximo
        maxYear:moment().format('YYYY')+100,
        //permite seleccionar la hora
        timePicker:true,
        //usando la fecha del ordenador
        startDate: moment().startOf('hour'),
        endDate: moment().startOf('hour').add(48, 'hour')
    }, function(inicio){
        console.log(inicio.format("YYYY-MM-DD")+" ");
    });    
});