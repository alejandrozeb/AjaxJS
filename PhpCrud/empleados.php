<?php
header('Access-Control-Allow-Origin: *');
$servidor = 'localhost';
$usuario = "root";
$pass = '';
$bd = "empleados";
$mysql = new mysqli($servidor, $usuario, $pass, $bd, 3308);

if($_REQUEST['accion'] == 'leer'){
    $arreglo = array();
    $consulta = "SELECT id,nombre,puesto, edad FROM empleados";

    if($result = $mysql->query($consulta)){
        while($row = $result->fetch_array(MYSQLI_ASSOC)){
            $arreglo[]=$row;
        }
        echo json_encode($arreglo);
    }
    $result->close();
}else if($_REQUEST['accion'] == 'insertar'){
    $data = $_POST["nombre"];
    $sql = "INSERT into empleados (nombre, puesto, edad) values ('".$_POST["nombre"]."','".$_POST["puesto"]."','".$_POST["edad"]."')";
    if( $mysql->query($sql) === TRUE){
        echo "1";
    }else{
        echo "0";
    }
}else if($_REQUEST['accion'] == 'editar'){
    $sql = "UPDATE empleados set nombre = '".$_POST["nombre"]."', puesto = '".$_POST["puesto"]."',edad = '".$_POST["edad"]."' where id = '".$_POST["id"]."';";
    if( $mysql->query($sql) === TRUE){
        echo "1";
    }else{
        echo "0";
    }
}else if($_REQUEST['accion'] == 'borrar'){
    $sql = "DELETE FROM empleados where id = '".$_POST["id"]."';";
    if( $mysql->query($sql) === TRUE){
        echo "1";
    }else{
        echo "0";
    }
}




$mysql->close();

?>