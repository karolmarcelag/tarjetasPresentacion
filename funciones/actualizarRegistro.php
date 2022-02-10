<?php

require "conexion.php";

$id = $_POST["id"];
$nombre = $_POST["nombre"];
$correo = $_POST["correo"];
$puesto_cargo = $_POST["puesto_cargo"];
$url_empresa = $_POST["url_empresa"];
$empresa = $_POST["empresa"];
$celular = $_POST["celular"];

$consulta = "update otros.tarjetas set nombre='$nombre', correo='$correo', puesto_cargo='$puesto_cargo', url_empresa='$url_empresa', empresa='$empresa', celular='$celular' where id=$id";
mysqli_query($conexion,$consulta);

echo "1";

?>