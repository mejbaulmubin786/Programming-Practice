<?php

class Book {
    private $pdo;

    public function __construct($pdo) {
        $this->pdo = $pdo;
    }

    // নতুন বই যুক্ত করা
    public function addBook($title, $author, $isbn) {
        $stmt = $this->pdo->prepare("INSERT INTO books (title, author, isbn) VALUES (?, ?, ?)");
        return $stmt->execute([$title, $author, $isbn]);
    }

    // সব বই দেখানোর জন্য
    public function getAllBooks() {
        $stmt = $this->pdo->query("SELECT * FROM books");
        return $stmt->fetchAll();
    }

    // নির্দিষ্ট বই দেখানোর জন্য
    public function getBookById($id) {
        $stmt = $this->pdo->prepare("SELECT * FROM books WHERE id = ?");
        $stmt->execute([$id]);
        return $stmt->fetch();
    }

    // বই আপডেট করার জন্য
    public function updateBook($id, $title, $author, $isbn) {
        $stmt = $this->pdo->prepare("UPDATE books SET title = ?, author = ?, isbn = ? WHERE id = ?");
        return $stmt->execute([$title, $author, $isbn, $id]);
    }

    // বই মুছে ফেলার জন্য
    public function deleteBook($id) {
        $stmt = $this->pdo->prepare("DELETE FROM books WHERE id = ?");
        return $stmt->execute([$id]);
    }
}
?>
