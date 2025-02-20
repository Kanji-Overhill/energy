<?php
require_once "conexion.php"; 

class Datos extends Conexion{
	public function productosModel($productoModel, $tabla){
		$stmt = Conexion::conectar()->prepare("SELECT * FROM $tabla WHERE id = :id");
		$stmt->bindParam(":id", $productoModel, PDO::PARAM_INT);
		$stmt->execute(); 

		return $stmt->fetchAll();

		$stmt->close();
	}
} 
?>