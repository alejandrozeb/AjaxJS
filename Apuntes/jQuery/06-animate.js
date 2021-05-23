$(document).ready(function () {
    $('#subcontenedor button:nth-child(12)').click(function (e) { 
        e.preventDefault();
        //podemos pasar la configuracion de la animacion con el tiempo y el px
        $('img').animate({
            'margin-left': '+=100px',
        }, 2000);
    });
});