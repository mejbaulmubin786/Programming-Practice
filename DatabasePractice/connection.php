
<?php
require_once 'config.php';

// কানেকশন তৈরি করা
$conn = mysqli_connect($servername, $username, $password, $database);

// কানেকশন চেক করা
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";