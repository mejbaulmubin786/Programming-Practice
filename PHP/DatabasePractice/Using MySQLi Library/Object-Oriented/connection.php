
<?php
require 'config.php';

// কানেকশন তৈরি করা
$conn = new mysqli($server, $user, $pass, $database);

// কানেকশন চেক করা
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";