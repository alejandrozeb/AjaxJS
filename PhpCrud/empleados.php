<?php
header('Access-Control-Allow-Origin: *');
$servidor = 'localhost';
$usuario = "root";
$pass = '';
$bd = "empleados";
$mysql = new mysqli($servidor, $usuario, $pass, $bd, 3308);

$arreglo = array();

$consulta = "SELECT id,nombre,puesto, edad FROM empleados";

if($result = $mysql->query($consulta)){
    while($row = $result->fetch_array(MYSQLI_ASSOC)){
        $arreglo[]=$row;
    }
    echo json_encode($arreglo);
}

$result->close();
$mysql->close();

?>