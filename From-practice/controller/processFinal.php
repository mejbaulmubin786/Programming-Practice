<?php
if (!($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['form_method']) && $_POST['form_method'] === 'comprehensive')) {
    include __DIR__ . "/../public/formFinal.html";
} else {
    function safe_input($key) {
        return isset($_POST[$key]) && !empty($_POST[$key]) ? htmlspecialchars($_POST[$key]) : null;
    }

// Retrieve data from the form
    $username = safe_input('username');
    $password = safe_input('password');
    $email = safe_input('email');
    $age = safe_input('age');
    $dob = safe_input('dob');
    $subscribe = isset($_POST['subscribe']) ? 'Yes' : 'No';
    $gender = safe_input('gender');
    $country = safe_input('country');
    $comments = safe_input('comments');
    $appointment = safe_input('appointment');
    $color = safe_input('color');
    $volume = safe_input('volume');
    $month = safe_input('month');
    $week = safe_input('week');
    $time = safe_input('time');

// Handle file upload
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
    if ($username) {
        echo "<p><span>Username:</span> $username</p>";
    }
    if ($password) {
        echo "<p><span>Password:</span> $password</p>";
    }
    if ($email) {
        echo "<p><span>Email:</span> $email</p>";
    }
    if ($age) {
        echo "<p><span>Age:</span> $age</p>";
    }
    if ($dob) {
        echo "<p><span>Date of Birth:</span> $dob</p>";
    }
    echo "<p><span>Subscribe to newsletter:</span> $subscribe</p>";
    if ($gender) {
        echo "<p><span>Gender:</span> $gender</p>";
    }
    if ($country) {
        echo "<p><span>Country:</span> $country</p>";
    }
    if ($comments) {
        echo "<p><span>Comments:</span> $comments</p>";
    }
    if ($appointment) {
        echo "<p><span>Appointment:</span> $appointment</p>";
    }
    if ($color) {
        echo "<p><span>Favorite Color:</span> $color</p>";
    }
    if ($volume) {
        echo "<p><span>Volume:</span> $volume</p>";
    }
    if ($month) {
        echo "<p><span>Month:</span> $month</p>";
    }
    if ($week) {
        echo "<p><span>Week:</span> $week</p>";
    }
    if ($time) {
        echo "<p><span>Time:</span> $time</p>";
    }
    if ($resume) {
        echo "<p><span>Resume:</span> $resume</p>";
    }

    echo "    </div>
</div>
</body>
</html>";
}
?>
