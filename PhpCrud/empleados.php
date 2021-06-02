<?php
header('Access-Control-Allow-Origin: *');
$servidor = 'localhost';
$usuario = "root";
$pass = '';
$bd = "empleados";
$mysql = new mysqli($servidor, $usuario, $pass, $bd);

$arreglo = array();

$consulta = "SELECT id,nombre,puesto";

?>