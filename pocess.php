<?php
if (!isset($_POST['username'])) {
    include __DIR__ . '/form3.html';
} else {
    echo $_POST['username'];
}