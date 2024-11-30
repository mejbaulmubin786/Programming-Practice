-- ডাটাবেস তৈরি করুন
CREATE DATABASE library;

-- ডাটাবেসটি ব্যবহার করুন
USE library;

-- `books` টেবিল তৈরি করুন
CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    pub_year YEAR NOT NULL,
    ISBN VARCHAR(13) NOT NULL UNIQUE,
    available TINYINT(1) NOT NULL DEFAULT 1
);


-- ডাটাবেসে ডাটা ইনসার্ট করুন
INSERT INTO books (title, pub_year, ISBN, available) VALUES
('The Great Gatsby', 1925, '9780743273565', 1),
('To Kill a Mockingbird', 1960, '9780061120084', 1),
('1984', 1949, '9780451524935', 1),
('Pride and Prejudice', 1813, '9781503290563', 1),
('Moby Dick', 1851, '9781503280786', 0),
('War and Peace', 1869, '9781853260629', 1),
('The Catcher in the Rye', 1951, '9780316769488', 1),
('Jane Eyre', 1847, '9780141441146', 1),
('The Hobbit', 1937, '9780547928227', 0),
('Animal Farm', 1945, '9780451526342', 1),
('Wuthering Heights', 1847, '9780141439556', 1),
('Great Expectations', 1861, '9780141439563', 0),
('The Odyssey', -800, '9780140268867', 1),
('Crime and Punishment', 1866, '9780140449136', 1),
('The Brothers Karamazov', 1880, '9780140449242', 1),
('Les Misérables', 1862, '9780451419439', 1),
('The Scarlet Letter', 1850, '9781505282161', 0),
('Brave New World', 1932, '9780060850524', 1),
('Ulysses', 1922, '9780141182803', 0),
('Dracula', 1897, '9781503261380', 1);
