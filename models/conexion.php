<?php
class Conexion{
	public function conectar(){
		$link = new PDO("mysql:host=localhost;dbname=granagrand","root","");
		return $link;
	}
}
?>