<?php
//atiende de cualquier lugar la peticion
header('Access-Control-Allow_origin: *');
if($_REQUEST['operacion'] == 'may'){
    echo strtoupper($_REQUEST['texto']);
}else if($_REQUEST['operacion'] == 'min'){
    echo strtolower($_REQUEST['texto']);
}else{
    echo $_REQUEST['texto'];
}
?>