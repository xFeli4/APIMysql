<?php

require_once "../backend/conexion.php";

class producto
{
    function agregar($id, $titulo, $link, $imagen, $precio)
    {
        $connection = connection();
        $sql = "INSERT INTO producto VALUES ('$id', '$titulo', '$link', '$imagen', $precio)";
        $respuesta = $connection->query($sql);
        return $respuesta;
    }
}

?>