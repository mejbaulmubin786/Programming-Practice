<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <ul>
    <?php $product = ["আপেল", "কলা", "আম", "কমলা"];
foreach ($product as $pro) {
    echo "<li>$pro</li>";
}
?>
  </ul>
</body>
</html>