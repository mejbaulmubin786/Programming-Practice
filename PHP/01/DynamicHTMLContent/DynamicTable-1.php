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

$table_data = [];
foreach ($items as $item => $values) {
    $table_data[$item] = $values;
}
echo "<pre>";
print_r($items);
echo "</pre>";
echo "<pre>";
print_r($table_data);
echo "</pre>";

// টেবিল তৈরি করুন
echo "<table>";
echo "<tr>";
foreach ($table_data as $column => $values) {
    echo "<th>$column</th>";
}
echo "</tr>";

// প্রতিটি সারি তৈরি করুন
$max_rows = max(array_map('count', $table_data)); // সবচেয়ে বড় অ্যারের দৈর্ঘ্য নির্ণয়
for ($i = 0; $i < $max_rows; $i++) {
    echo "<tr>";
    foreach ($table_data as $column => $values) {
        echo "<td>";
        echo isset($values[$i]) ? $values[$i] : ''; // যদি মান না থাকে তাহলে খালি সেল দেখাবে
        echo "</td>";
    }
    echo "</tr>";
}
echo "</table>";
?>



</body>
</html>