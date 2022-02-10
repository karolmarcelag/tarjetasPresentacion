<?php

$host="127.0.0.1";
$user="root";
$password="root";
$database="otros";
$port = 3306;

$conexion = mysqli_connect($host, $user, $password, $database, $port);
mysqli_set_charset($conexion,'utf8');
/*

//-------------------------------------------- ABRIR CONEXIÓN --------------------------------------------
$conexion = mysqli_connect($host, $user, $password, $database, $port);

//-------------------------------------------- CERRAR CONEXIÓN --------------------------------------------
mysqli_close($conexion);

//-------------------------------------------- CONSULTA INSERT --------------------------------------------
$consulta = "insert into TABLA (CAMPO1,CAMPO2,CAMPO3) values ('$DATO1','$DATO2','$DATO3')";
mysqli_query($conexion,$consulta);

//-------------------------------------------- CONSULTA DELETE --------------------------------------------
$consulta = "delete from TABLA where CAMPO1 = $DATO1";
mysqli_query($conexion,$consulta);

//-------------------------------------------- CONSULTA UPDATE --------------------------------------------
$consulta = "update TABLA set CAMPO2 = $DATO2, CAMPO3 = $DATO3 where CAMPO1 = $DATO1";
mysqli_query($conexion,$consulta);

//-------------------------------------------- CONSULTA SELECT (1 REGISTRO) --------------------------------------------
$consulta = mysqli_query($conexion,"select * from TABLA");
$tabla = mysqli_fetch_array($consulta);

//-------------------------------------------- CONSULTA SELECT (VARIOS REGISTROS) --------------------------------------------
$consulta = mysqli_query($conexion,"select * from TABLA");
while($tabla = mysqli_fetch_array($consulta))
{
    echo $tabla["fecha"].'<br>';
}

//-------------------------------------------- CONTAR REGISTROS  --------------------------------------------
$registros = mysqli_num_rows(mysqli_query($conexion,"select * from TABLA"));
if ($registros == 0)
{ 
}

*/