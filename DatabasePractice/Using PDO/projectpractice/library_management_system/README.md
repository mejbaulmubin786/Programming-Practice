নিচে PDO ব্যবহার করে তৈরি করা লাইব্রেরি ম্যানেজমেন্ট সিস্টেমের জন্য একটি ডকুমেন্টেশন দেওয়া হলো। এই ডকুমেন্টেশনটি নতুন ডেভেলপারদের জন্য প্রজেক্টটি বুঝতে ও সেটআপ করতে সহায়ক হবে।

---

# **লাইব্রেরি ম্যানেজমেন্ট সিস্টেম**

## **প্রজেক্টের বিবরণ**
লাইব্রেরি ম্যানেজমেন্ট সিস্টেম একটি সার্ভার সাইড অ্যাপ্লিকেশন যা PDO (PHP Data Objects) ব্যবহার করে তৈরি করা হয়েছে। এটি বই সংরক্ষণ, প্রদর্শন, আপডেট এবং মুছে ফেলার জন্য একটি সহজ ইন্টারফেস প্রদান করে। এই প্রজেক্টটি PHP এবং MySQL ডাটাবেস ব্যবহার করে তৈরি করা হয়েছে।

## **ফোল্ডার স্ট্রাকচার**

```
/library_management_system
├── /config
│   └── config.php
├── /controllers
│   └── BookController.php
├── /models
│   └── Book.php
├── /views
│   └── index.php
└── /database
    └── library_db.sql
```

### **ফোল্ডার এবং ফাইলের বিবরণ**

- **/config/config.php**: ডাটাবেস সংযোগের জন্য প্রয়োজনীয় কনফিগারেশন ফাইল।
- **/controllers/BookController.php**: ব্যবহারকারীর HTTP অনুরোধ গ্রহণ করে মডেলের প্রাসঙ্গিক মেথডগুলি কল করে।
- **/models/Book.php**: ডাটাবেসের সাথে সরাসরি কাজ করে এবং বই সম্পর্কিত বিভিন্ন অপারেশন পরিচালনা করে।
- **/views/index.php**: ফ্রন্টএন্ড ফাইল যা ব্যবহারকারীর জন্য ইন্টারফেস প্রদান করে।
- **/database/library_db.sql**: ডাটাবেসের জন্য SQL স্ক্রিপ্ট যা টেবিল তৈরি এবং ডাটাবেস সেটআপের জন্য ব্যবহৃত হয়।

## **প্রজেক্ট সেটআপ গাইড**

### **প্রয়োজনীয়তাসমূহ:**
- **PHP 7.x বা তার উপরের সংস্করণ**
- **MySQL ডাটাবেস সার্ভার**
- **ওয়েব সার্ভার (যেমন: Apache, Nginx ইত্যাদি)**

### **সেটআপ প্রক্রিয়া**

1. **প্রজেক্ট ফোল্ডার ডাউনলোড করুন:**

   প্রজেক্টের ফাইলগুলি আপনার লোকাল সার্ভারে কপি করুন। প্রজেক্ট ফোল্ডারের নাম হতে পারে `library_management_system`।

2. **ডাটাবেস তৈরি:**

   MySQL সার্ভারে লগইন করুন এবং একটি নতুন ডাটাবেস তৈরি করুন:

   ```sql
   CREATE DATABASE library_db;
   ```

   তারপর ডাটাবেসে `library_db.sql` ফাইলটি ইম্পোর্ট করুন:

   ```sql
   USE library_db;
   SOURCE /path/to/library_db.sql;
   ```

3. **কনফিগারেশন সেটআপ:**

   `/config/config.php` ফাইলটি খুলুন এবং ডাটাবেসের সেটিংস (হোস্ট, ইউজারনেম, পাসওয়ার্ড, ডাটাবেসের নাম) আপনার সার্ভারের সাথে মিলিয়ে পরিবর্তন করুন:

   ```php
   $host = 'localhost';
   $db = 'library_db';
   $user = 'root';
   $pass = '';
   ```

4. **ওয়েব সার্ভার কনফিগারেশন:**

   আপনার ওয়েব সার্ভারকে প্রজেক্টের মূল ফোল্ডারে নির্দেশ করুন। উদাহরণস্বরূপ, Apache ব্যবহার করে:

   ```apache
   <VirtualHost *:80>
       DocumentRoot "/path/to/library_management_system"
       ServerName library.local
   </VirtualHost>
   ```

   তারপর আপনার সার্ভারটি রিস্টার্ট করুন।

5. **প্রজেক্ট চালু করুন:**

   আপনার ব্রাউজারে `http://localhost/library_management_system/views/index.php` এ যান। এখন আপনি অ্যাপ্লিকেশনটি ব্যবহার করতে পারবেন।

## **কোড ব্যাখ্যা**

### **config.php**

```php
<?php
$host = 'localhost';
$db = 'library_db';
$user = 'root';
$pass = '';

$dsn = "mysql:host=$host;dbname=$db;charset=utf8mb4";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (\PDOException $e) {
    throw new \PDOException($e->getMessage(), (int)$e->getCode());
}
?>
```

এই ফাইলটি ডাটাবেসের সাথে সংযোগ স্থাপনের জন্য ব্যবহৃত হয়। PDO এর মাধ্যমে একটি ডাটাবেস অবজেক্ট তৈরি করা হয় যা পরে প্রজেক্টের অন্যান্য অংশে ব্যবহৃত হবে।

### **Book.php**

```php
<?php

class Book {
    private $pdo;

    public function __construct($pdo) {
        $this->pdo = $pdo;
    }

    public function addBook($title, $author, $isbn) {
        $stmt = $this->pdo->prepare("INSERT INTO books (title, author, isbn) VALUES (?, ?, ?)");
        return $stmt->execute([$title, $author, $isbn]);
    }

    public function getAllBooks() {
        $stmt = $this->pdo->query("SELECT * FROM books");
        return $stmt->fetchAll();
    }

    public function getBookById($id) {
        $stmt = $this->pdo->prepare("SELECT * FROM books WHERE id = ?");
        $stmt->execute([$id]);
        return $stmt->fetch();
    }

    public function updateBook($id, $title, $author, $isbn) {
        $stmt = $this->pdo->prepare("UPDATE books SET title = ?, author = ?, isbn = ? WHERE id = ?");
        return $stmt->execute([$title, $author, $isbn, $id]);
    }

    public function deleteBook($id) {
        $stmt = $this->pdo->prepare("DELETE FROM books WHERE id = ?");
        return $stmt->execute([$id]);
    }
}
?>
```

**Book.php** ফাইলটি একটি মডেল যা ডাটাবেসের সাথে কাজ করে। এটি বিভিন্ন ফাংশনের মাধ্যমে ডাটাবেসে বই যুক্ত করা, প্রদর্শন, আপডেট এবং মুছে ফেলার কাজ করে।

### **BookController.php**

```php
<?php
require_once 'config.php';
require_once 'Book.php';

class BookController {
    private $book;

    public function __construct($pdo) {
        $this->book = new Book($pdo);
    }

    public function index() {
        return $this->book->getAllBooks();
    }

    public function store($title, $author, $isbn) {
        return $this->book->addBook($title, $author, $isbn);
    }

    public function show($id) {
        return $this->book->getBookById($id);
    }

    public function update($id, $title, $author, $isbn) {
        return $this->book->updateBook($id, $title, $author, $isbn);
    }

    public function destroy($id) {
        return $this->book->deleteBook($id);
    }
}
?>
```

**BookController.php** ফাইলটি ব্যবহারকারীর HTTP অনুরোধগুলি গ্রহণ করে এবং মডেলের প্রাসঙ্গিক মেথডগুলি কল করে। এটি একটি MVC আর্কিটেকচারের কন্ট্রোলার ক্লাস হিসেবে কাজ করে।

### **index.php**

```php
<?php
require_once 'BookController.php';

$controller = new BookController($pdo);

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['add'])) {
    $controller->store($_POST['title'], $_POST['author'], $_POST['isbn']);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['update'])) {
    $controller->update($_POST['id'], $_POST['title'], $_POST['author'], $_POST['isbn']);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['delete'])) {
    $controller->destroy($_POST['id']);
}

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
                <th>Title

</th>
                <th>Author</th>
                <th>ISBN</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($books as $book): ?>
            <tr>
                <td><?= $book['id'] ?></td>
                <td><?= $book['title'] ?></td>
                <td><?= $book['author'] ?></td>
                <td><?= $book['isbn'] ?></td>
                <td>
                    <form action="" method="post" style="display:inline;">
                        <input type="hidden" name="id" value="<?= $book['id'] ?>">
                        <input type="text" name="title" value="<?= $book['title'] ?>" required>
                        <input type="text" name="author" value="<?= $book['author'] ?>" required>
                        <input type="text" name="isbn" value="<?= $book['isbn'] ?>" required>
                        <button type="submit" name="update">Update</button>
                    </form>
                    <form action="" method="post" style="display:inline;">
                        <input type="hidden" name="id" value="<?= $book['id'] ?>">
                        <button type="submit" name="delete">Delete</button>
                    </form>
                </td>
            </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
</body>
</html>
```

**index.php** ফাইলটি ব্যবহারকারীর জন্য একটি ইন্টারফেস প্রদান করে। এটি মূলত HTML এবং PHP এর মিশ্রণ যা ব্যবহারকারীদের বই যুক্ত করা, আপডেট করা এবং মুছে ফেলার অনুমতি দেয়।

## **ডাটাবেস টেবিলের গঠন (library_db.sql)**

```sql
CREATE TABLE `books` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `isbn` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

এই SQL স্ক্রিপ্টটি একটি `books` টেবিল তৈরি করে, যা `id`, `title`, `author`, এবং `isbn` কলাম ধারণ করে।

## **ডকুমেন্টেশনের উপসংহার**

এই ডকুমেন্টেশনটি লাইব্রেরি ম্যানেজমেন্ট সিস্টেম প্রজেক্টটি সেটআপ এবং ব্যবহারের জন্য প্রয়োজনীয় তথ্য প্রদান করে। এর মাধ্যমে, ডেভেলপাররা সহজেই প্রজেক্টটি বুঝতে এবং পরিচালনা করতে পারবেন। 