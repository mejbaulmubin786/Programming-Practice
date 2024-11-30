
<h2>Case Sensitivity :</h2> <h4>The names of user-defined classes and functions, as well as built-in constructs and keywords (such as echo, while, class, etc.), are case-insensitive  Variables, on the other hand, are case-sensitive.</h4>

<?php

//Case Sensitivity : The names of user-defined classes and functions, as well as built-in constructs and keywords (such as echo, while, class, etc.), are case-insensitive  Variables, on the other hand, are case-sensitive.
echo ("Mejbaul Mubin");
echo "<br>";
Echo ("Mejbaul Mubin");
echo "<br>";
eCho ("Mejbaul Mubin");
?>
<h2>Statements and Semicolons :</h2> <h4>PHP uses semicolons to separate simple statements. A compound statement that uses
curly braces to mark a block of code, such as a conditional test or loop, does not need
 a semicolon after a closing brace. Unlike in other languages, in PHP the semicolon
 before the closing brace is not optional</h4>


 <?php
echo "Hello, world";
myFunction(40, "O'Reilly");
$a = 1;
$name = "Elphaba";
$b = $a / 25.0;
if ($a == $b) {
    echo "Rhyme? And Reason?";
}

function myFunction($num, $prokashoni) {
    // code here
} //  no semicolon required

echo "Mejbaul Mubin" //  no semicolon required before closing tag  It’s good programming practice to include optional semicolons, as they make it easier to add code later.
?>

<h2>Whitespace and Line Breaks :</h2>

<h2> Data Types :</h2> <h4>PHP provides eight types of values, or data types. Four are scalar (single-value) types: integers, floating-point numbers, strings, and Booleans. Two are compound (collection) types: arrays and objects. The remaining two are special types: resource and NULL. </h4>

<h2>Arrays</h2>

<?php
// Simple indexed array for family members
/*
$family[0] = "Mejbaul Mubin";
$family[1] = "Sanzida Islam";
$family[2] = "Maharul Islam";
$family[3] = "Mazaharul Islam";

// or
$family = array(
"Mejbaul Mubin",
"Sanzida Islam",
"Maharul Islam",
"Mazaharul Islam",
);
 */
$family = [
    "Mejbaul Mubin",
    "Sanzida Islam",
    "Maharul Islam",
    "Mazaharul Islam",
];

// Display the indexed array
print_r($family);
echo "<br><br>";

// Loop to show each family member
foreach ($family as $name) {
    echo "$name is our family member<br>";
}
echo "<br>";

// Associative array for detailed family information
$outfamily = [
    "My Name" => "Mejbaul Mubin",
    "Wife's Name" => "Sanzida Islam",
    "First Son's Name" => "Maharul Islam",
    "Second Son's Name" => "Mazaharul Islam",
];

// Display only the names
foreach ($outfamily as $name) {
    echo "$name <br>";
}
echo "<br>";

// Display names with their roles
foreach ($outfamily as $relation => $name) {
    echo "$relation is $name<br>";
}
?>


<?php
echo "<br>";
echo "<br>";
// Multidimensional array for family members with details
$family2 = [
    [
        "name" => "Mejbaul Mubin",
        "age" => 35,
        "relation" => "Self",
    ],
    [
        "name" => "Sanzida Islam",
        "age" => 32,
        "relation" => "Wife",
    ],
    [
        "name" => "Maharul Islam",
        "age" => 10,
        "relation" => "First Son",
    ],
    [
        "name" => "Mazaharul Islam",
        "age" => 8,
        "relation" => "Second Son",
    ],
];

// Display the family members with details using foreach loop
foreach ($family2 as $member) {
    echo "Name: " . $member['name'] . "<br>";
    echo "Age: " . $member['age'] . "<br>";
    echo "Relation: " . $member['relation'] . "<br><br>";
}

?>

