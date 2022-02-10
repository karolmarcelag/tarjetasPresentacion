<?php

require "conexion.php";

$id = $_POST["id"];

$consulta = "delete from otros.tarjetas where id=$id";
mysqli_query($conexion,$consulta);

echo "1";

?>