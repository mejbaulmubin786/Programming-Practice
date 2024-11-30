<?php
// ডাটাবেজ সংযোগ স্থাপন
$dsn = 'mysql:host=localhost;dbname=dynamic_tags_db';
$username = 'root';
$password = '';

try {
    $connection = new PDO($dsn, $username, $password);
} catch (PDOException $e) {
    echo 'Connection failed: ' . $e->getMessage();
}
