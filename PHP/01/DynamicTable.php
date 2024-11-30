<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dynamic Table Practice</title>
</head>
<body>
  <?php $employees = [
    "Google" => ["Mejbaul Mubin", "01676880506"],
    "Facebook" => ["Maharul Islam", "01632937758"],
    "Yahoo" => ["Mazharul Islam", "01844456337"],
];
?>

<table border = "1">
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <?php

foreach ($employees as $employee => $details) {
    echo "<tr>";
    echo "<td>$employee</td>";
    echo "<td>$details[0]</td>";
    echo "<td>$details[1]</td>";

    echo "</tr>";
}
?>



</table>

</body>
</html>


