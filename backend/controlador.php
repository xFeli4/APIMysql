<?php

require_once "../backend/modelo.php";

$funcion = $_GET['funcion'];

switch ($funcion) {
    case "agregar":
        agregar();
        break;
    }

function agregar()
{
    $id = $_POST['id'];
    $titulo = $_POST['titulo'];
    $link = $_POST['link'];
    $imagen = $_POST['imagen'];
    $precio = $_POST['precio'];
    $producto = (new producto())->agregar($id, $titulo, $link, $imagen, $precio);
    echo json_encode($producto);
}
?>