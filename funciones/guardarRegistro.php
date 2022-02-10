<?php

require "conexion.php";

$nombre = $_POST["nombre"];
$correo = $_POST["correo"];
$puesto_cargo = $_POST["puesto_cargo"];
$url_empresa = $_POST["url_empresa"];
$empresa = $_POST["empresa"];
$celular = $_POST["celular"];

$consulta = "insert into otros.tarjetas (nombre,correo,puesto_cargo,url_empresa,empresa,celular) values ('$nombre','$correo','$puesto_cargo','$url_empresa','$empresa','$celular')";
mysqli_query($conexion,$consulta);

echo "1";

?>