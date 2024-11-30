<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <ol>
    <?php
    $items = array(
        "ফল" => array("আপেল", "কলা", "আম", "কমলা"),
        "সবজি" => array("গাজর", "বাঁধাকপি", "টমেটো", "আলু"),
        "অন্যান্য" => array("দুধ", "ডিম", "পাউরুটি", "চিনি"),
    );

    foreach ($items as $category => $item) {
        echo "<li>$category</li>";
        echo "<ul>";
        foreach ($item as $Sitem) {
            echo "<li>$Sitem</li>";
        }
        echo "</ul>";
    }
    ?>
  </ol>
</body>
</html>
