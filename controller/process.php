<?php
if (!isset($_POST['username'])) {
    include __DIR__ . "/../public/form3.html";
} else {
    echo $_POST['username'];
}