$(document).ready(function () {
    $('#convertir').click(function (e) { 
        e.preventDefault();
        let operacion =  $("#operacion").val();
        let texto =  $("#texto").val();
       /*  $.get(`http://localhost/AjaxPhpJq/AjaxJS/AjaxPhp/convertir.php?operacion=${operacion}&texto=${texto}`, function(data){
            console.log(data);
        }); */
        //con objeto
        $.get("http://localhost/AjaxPhpJq/AjaxJS/AjaxPhp/convertir.php", 
            {"operacion": operacion, 'texto': texto},
            function (data, textStatus, jqXHR) {
                $('#listaEmpleados').html(data);    
        });
    });
});