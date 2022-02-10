<?php
include "conexion.php";

$arreglo = array();
$x = 0;

$query ="select id,nombre,correo,puesto_cargo,url_empresa,empresa,celular from otros.tarjetas";
$consulta = mysqli_query($conexion,$query);
while($tabla = mysqli_fetch_array($consulta))
{
    $arreglo[$x]["id"] = $tabla["id"];
    $arreglo[$x]["nombre"] = $tabla["nombre"];
    $arreglo[$x]["correo"] = $tabla["correo"];
    $arreglo[$x]["puesto_cargo"] = $tabla["puesto_cargo"];
    $arreglo[$x]["url_empresa"] = $tabla["url_empresa"];
    $arreglo[$x]["empresa"] = $tabla["empresa"];
    $arreglo[$x]["celular"] = $tabla["celular"];
    $x++;
}

if($x>0)
{
    echo json_encode($arreglo);
}
else
{
    echo "-1";
}