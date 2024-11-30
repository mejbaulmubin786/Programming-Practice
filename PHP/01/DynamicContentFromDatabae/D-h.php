<?php
include "config.php";

$sql = "SELECT heading_text, heading_level FROM headings";
$statement = $connection->prepare($sql);
$statement->execute();
$headings = $statement->fetchAll(PDO::FETCH_ASSOC);
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>

</body>
</html>