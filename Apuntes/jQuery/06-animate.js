$(document).ready(function () {
    $('#subcontenedor button:nth-child(12)').click(function (e) { 
        e.preventDefault();
        //podemos pasar la configuracion de la animacion con el tiempo y el px
        $('img').animate({
            'margin-left': '+=100px',
            'opacity': '0.5',
            'width': '150px'
        }, 2000, 
        function(){
            //podemos usar callbacks para revertir o añadir mas animaciones
            $('img').animate({
                'margin-left': '-=100px',
                'opacity': '1',
                'width': '200px'
            }, 2000);    
        }
        );
    });
});