<?php
/*
$indexedArray = array(
"Element 1", "Element 2", "Element 3", "Element 4", "Element 5",
"Element 6", "Element 7", "Element 8", "Element 9", "Element 10",
"Element 11", "Element 12", "Element 13", "Element 14", "Element 15",
"Element 16", "Element 17", "Element 18", "Element 19", "Element 20",
);

for ($i = 0; $i < count($indexedArray); $i++) {
echo $indexedArray[$i];
echo "\n";
}
echo "-------------------------------";
foreach ($indexedArray as $index) {
echo $index . " \n";
}

$arr = [];
echo "-------------------------------\n";
for ($i = 2; $i < 20; $i += 2) {
$arr[] = $i;
}
echo $arr[7];
echo $arr[8];
echo "\n-------------------------------\n";
foreach ($arr as $a) {
echo $a . "\n";
}
echo "\n-------------------------------\n";
 */
$associativeArray = array(
    "Name" => "John Doe",
    "Email" => "john@example.com",
    "Age" => 28,
    "Country" => "USA",
    "Occupation" => "Software Developer",
);

$keys = array_keys($associativeArray);
$values = array_values($associativeArray);

// for loop দিয়ে প্রিন্ট করা
for ($i = 0; $i < count($associativeArray); $i++) {
    echo $keys[$i] . ": " . $values[$i] . "<br>";
}
echo "<br>-------------------------------<br>";
foreach ($associativeArray as $arrs) {
    echo $arrs . "<br>";
}

$multiDimensionalArray = array(
    "Person1" => array(
        "Name" => "Alice",
        "Age" => 25,
        "Occupation" => "Engineer",
    ),
    "Person2" => array(
        "Name" => "Bob",
        "Age" => 30,
        "Occupation" => "Designer",
    ),
    "Person3" => array(
        "Name" => "Charlie",
        "Age" => 35,
        "Occupation" => "Manager",
    ),
);
