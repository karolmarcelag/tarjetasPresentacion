<?php

require "phpqrcode/qrlib.php";
date_default_timezone_set('America/Chihuahua');

$arreglo = array();
$dir = 'codigos/';

$nombre = $_POST["nombre"];
$correo = $_POST["correo"];
$url_empresa = $_POST["url_empresa"];
$empresa = $_POST["empresa"];
$celular = $_POST["celular"];

$correoQR =$_POST["contenidoQR"];
$contenidoQR = "
BEGIN:VCARD
VERSION:3.0
N:$nombre
FN:$nombre
ORG:$empresa
TEL:$celular
EMAIL:$correo
URL:$url_empresa
END:VCARD
";

if (!file_exists($dir))
{
        mkdir($dir); 
}

$filename = $dir.$correoQR.'.png';

$tamaño = 11; //Tamaño de Pixel
$level = 'A'; //Precisión Baja
$framSize = 5; //Tamaño en blanco

QRcode::png($contenidoQR, $filename, $level, $tamaño, $framSize); 

$arreglo[0]["url"] = $dir.basename($filename);

echo json_encode($arreglo);

?>