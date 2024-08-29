<?php
require_once '../config/config.php';
require_once '../models/Book.php';

class BookController {
    private $book;

    public function __construct($pdo) {
        $this->book = new Book($pdo);
    }

    // সমস্ত বই দেখানোর জন্য
    public function index() {
        return $this->book->getAllBooks();
    }

    // নতুন বই যোগ করার জন্য
    public function store($title, $author, $isbn) {
        return $this->book->addBook($title, $author, $isbn);
    }

    // নির্দিষ্ট বই দেখানোর জন্য
    public function show($id) {
        return $this->book->getBookById($id);
    }

    // বই আপডেট করার জন্য
    public function update($id, $title, $author, $isbn) {
        return $this->book->updateBook($id, $title, $author, $isbn);
    }

    // বই মুছে ফেলার জন্য
    public function destroy($id) {
        return $this->book->deleteBook($id);
    }
}
?>
