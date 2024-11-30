<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DynamicDrop</title>
</head>
<body>

<?php
$carname = ['volvo', 'saab', 'mercedes', 'audi'];
?>
<label for="cars">Choose a car:</label>

<select name="cars" id="cars">
<?php
foreach ($carname as $car) {
    echo "<option value='$car'>$car</option>";
}
?>
</select>

</body>
</html>