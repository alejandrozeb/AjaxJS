$(document).ready(function () {
    $('#leer').click(function (e) { 
        e.preventDefault();
        $.get("archivo.txt", function (data, textStatus,jqXHR) { 
            console.log(data);  //data del archivo
            console.log(textStatus);    //textstatus
            console.log(jqXHR); //objeto request
         });
        
    });
});