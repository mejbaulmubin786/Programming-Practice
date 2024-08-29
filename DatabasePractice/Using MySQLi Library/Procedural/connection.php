
<?php
require 'config.php';

// কানেকশন তৈরি করা
$conn = mysqli_connect($server, $user, $pass, $database);

// কানেকশন চেক করা
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";