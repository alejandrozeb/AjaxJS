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

    //para subir con scroll animado
    $('#subir').click(function (e) { 
        e.preventDefault();
        //scroll up
        $('html, body').animate({
            scrollTop:0
        }, 1000);
    });

    //para bajar con scroll animado
    $('#bajar').click(function (e) { 
        e.preventDefault();
        //scroll up
        $('html, body').animate({
            scrollTop: $(document).height() - $(window).height()
        }, 1000);
    });
});