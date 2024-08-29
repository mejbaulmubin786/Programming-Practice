<?php
require 'connection.php';

if(mysqli_close($conn)){
	echo "connetion close";
}