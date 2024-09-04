<!DOCTYPE html>
<html>
<head>
    <title>PHP দিয়ে ডাইনামিক লিস্ট</title>
</head>
<body>
    <h2>প্রোগ্রামিং ভাষার তালিকা</h2>
    <ul>
        <?php
$items = [
    'Fruits' => [
        'Apple',
        'Banana',
        'Cherry',
        'Date',
        'Grape',
        'Kiwi',
        'Lemon',
        'Mango',
        'Orange',
        'Peach',
    ],
    'Vegetables' => [
        'Carrot',
        'Broccoli',
        'Spinach',
        'Potato',
        'Tomato',
        'Cucumber',
        'Lettuce',
        'Bell Pepper',
        'Onion',
        'Garlic',
    ],
    'Spices' => [
        'Cumin',
        'Turmeric',
        'Coriander',
        'Cardamom',
        'Black Pepper',
        'Cinnamon',
        'Cloves',
        'Nutmeg',
        'Paprika',
        'Chili Powder',
    ],
    'Plants' => [
        'Rose',
        'Tulip',
        'Orchid',
        'Sunflower',
        'Lily',
        'Daisy',
        'Lavender',
        'Fern',
        'Ivy',
        'Bamboo',
    ],
    'Animals' => [
        'Lion',
        'Elephant',
        'Tiger',
        'Giraffe',
        'Zebra',
        'Panda',
        'Kangaroo',
        'Bear',
        'Monkey',
        'Wolf',
    ],
];
echo "<ol>";
foreach ($items as $item => $singleitems) {

    echo "<li>";
    echo "$item";
    echo "<ul>";
    foreach ($singleitems as $singleitem) {
        echo "<li> $singleitem </li>";
    }
    echo "</ul>";
    echo "</li>";

}
echo "</ol>";

?>
    </ul>
</body>
</html>