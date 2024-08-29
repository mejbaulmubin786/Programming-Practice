<?php
require_once '../controllers/BookController.php';

$controller = new BookController($pdo);

// নতুন বই যোগ করা
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['add'])) {
    $controller->store($_POST['title'], $_POST['author'], $_POST['isbn']);
}

// বই আপডেট করা
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['update'])) {
    $controller->update($_POST['id'], $_POST['title'], $_POST['author'], $_POST['isbn']);
}

// বই মুছে ফেলা
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['delete'])) {
    $controller->destroy($_POST['id']);
}

// সব বই প্রদর্শন করা
$books = $controller->index();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Library Management System</title>
</head>
<body>
    <h1>Library Management System</h1>

    <h2>Add a new book</h2>
    <form action="" method="post">
        <input type="text" name="title" placeholder="Book Title" required>
        <input type="text" name="author" placeholder="Author" required>
        <input type="text" name="isbn" placeholder="ISBN" required>
        <button type="submit" name="add">Add Book</button>
    </form>

    <h2>Book List</h2>
    <table border="1">
        <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Author</th>
                <th>ISBN</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($books as $book): ?>
                <tr>
                    <td><?php echo $book['id']; ?></td>
                    <td><?php echo $book['title']; ?></td>
                    <td><?php echo $book['author']; ?></td>
                    <td><?php echo $book['isbn']; ?></td>
                    <td>
                        <form action="" method="post" style="display:inline-block;">
                            <input type="hidden" name="id" value="<?php echo $book['id']; ?>">
                            <input type="text" name="title" value="<?php echo $book['title']; ?>">
                            <input type="text" name="author" value="<?php echo $book['author']; ?>">
                            <input type="text" name="isbn" value="<?php echo $book['isbn']; ?>">
                            <button type="submit" name="update">Update</button>
                        </form>
                        <form action="" method="post" style="display:inline-block;">
                            <input type="hidden" name="id" value="<?php echo $book['id']; ?>">
                            <button type="submit" name="delete">Delete</button>
                        </form>
                    </td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
</body>
</html>
