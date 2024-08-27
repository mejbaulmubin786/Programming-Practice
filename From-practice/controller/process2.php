<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['form_method']) && $_POST['form_method'] === 'comprehensive') {
    // Function to safely retrieve form inputs
    function safe_input($key) {
        return isset($_POST[$key]) && !empty($_POST[$key]) ? htmlspecialchars($_POST[$key]) : null;
    }

    // Retrieve data from the form
    $name = safe_input('name');
    $age = safe_input('age');
    $email = safe_input('email');
    $password = safe_input('password');
    $gender = safe_input('gender');
    $interests = isset($_POST['interests']) ? implode(', ', $_POST['interests']) : null;
    $country = safe_input('country');
    $bio = safe_input('bio');
    $dob = safe_input('dob');
    $resume = isset($_FILES['resume']) && !empty($_FILES['resume']['name']) ? $_FILES['resume']['name'] : null;

    // Display output in a styled format
    echo "
    <!DOCTYPE html>
    <html lang='en'>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>Form Submission Result</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                padding: 20px;
                margin: 0;
            }
            .result-container {
                width: 50%;
                margin: auto;
                background: #fff;
                padding: 20px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            h2 {
                color: #333;
                text-align: center;
            }
            .result {
                margin-top: 20px;
            }
            .result p {
                margin: 10px 0;
                color: #555;
            }
            .result span {
                font-weight: bold;
                color: #333;
            }
        </style>
    </head>
    <body>
        <div class='result-container'>
            <h2>Form Submission Result</h2>
            <div class='result'>";

    // Conditionally display each field if it has a value
    if ($name) {
        echo "<p><span>Name:</span> $name</p>";
    }
    if ($age) {
        echo "<p><span>Age:</span> $age</p>";
    }
    if ($email) {
        echo "<p><span>Email:</span> $email</p>";
    }
    if ($password) {
        echo "<p><span>Password:</span> $password</p>";
    }
    if ($gender) {
        echo "<p><span>Gender:</span> $gender</p>";
    }
    if ($interests) {
        echo "<p><span>Interests:</span> $interests</p>";
    }
    if ($country) {
        echo "<p><span>Country:</span> $country</p>";
    }
    if ($bio) {
        echo "<p><span>Bio:</span> $bio</p>";
    }
    if ($dob) {
        echo "<p><span>Date of Birth:</span> $dob</p>";
    }
    if ($resume) {
        echo "<p><span>Resume:</span> $resume</p>";
    }

    echo "    </div>
        </div>
    </body>
    </html>";
} else {
    echo "Invalid form submission.";
}
?>