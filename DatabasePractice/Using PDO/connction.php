<?php

require 'con.php';



try {
	$pdo = new PDO($dsn, $username, $password);
	$output = 'Database connection established';
	echo $output;
} catch (PDOException $e){
	$output = 'Unable to connect to the database server: ' . $e->getMessage();
}