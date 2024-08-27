<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $address = $_POST['address'];
    $bio = $_POST['bio'];
    $education = $_POST['education'];
    $experience = $_POST['experience'];
    $skills = $_POST['skills'];
    $projects = $_POST['projects'];
    $languages = $_POST['languages'];
    $linkedin = $_POST['linkedin'];
    $github = $_POST['github'];

    // Profile picture handling
    $profilePic = isset($_FILES['profile_pic']) ? 'uploads/' . basename($_FILES['profile_pic']['name']) : null;
    if ($profilePic) {
        move_uploaded_file($_FILES['profile_pic']['tmp_name'], $profilePic);
    }

    ob_start();
    include '../views/cv_template.php';
    $cvContent = ob_get_clean();

    echo $cvContent;
}
?>
