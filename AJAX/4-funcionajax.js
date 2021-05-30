$(document).ready(function () {
    $('#ajax').click(function (e) { 
        e.preventDefault();
        //mandamos a llamar la funcion ajax con parametros en un objeto
        $.ajax({
            //trae los empleados
            url: 'empleados.json',
            //tipo de coneion get, post
            type: 'get',
            //tipo de dato
            dataType: 'json',
            //cuando es exitoso
            success: function(data){
                console.log(data);
            }


        });
    });
});