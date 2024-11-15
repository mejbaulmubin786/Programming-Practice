<?php
$db = new mysqli("localhost", "root", "", "library");
// make sure the above credentials are correct for your environment
if ($db->connect_error) {
    die("Connect Error ({$db->connect_errno}) {$db->connect_error}");
}
$sql = "SELECT * FROM books WHERE available = 1 ORDER BY title";
$result = $db->query($sql);
?>
 <html>
 <body>
 <table cellSpacing="2" cellPadding="6" align="center" border="1">
 <tr>
 <td colspan="4">
 <h3 align="center">These Books are currently available</h3>
 </td>
 </tr>
 <tr>
 <td align="center">Title</td>
 <td align="center">Year Published</td>
 <td align="center">ISBN</td>
 </tr>
 <?php while ($row = $result->fetch_assoc()) {?>
 <tr>
 <td><?php echo stripslashes($row['title']); ?></td>
 <td align="center"><?php echo $row['pub_year']; ?></td>
 <td><?php echo $row['ISBN']; ?></td>
 </tr>
 <?php }?>
 </table>
 </body>
 </html>

 <?php
/*
এই PHP কোডটি ধাপে ধাপে বিশ্লেষণ করে সহজ ভাষায় ব্যাখ্যা করা হলো। এটি একটি বইয়ের তালিকা প্রদর্শনের জন্য ব্যবহার করা হয়। এখানে **MySQL ডাটাবেসে সংযোগ স্থাপন**, **ডাটা রিট্রিভ করা**, এবং **HTML টেবিলে তা দেখানোর কাজ** করা হয়েছে।

---

### 1. **ডাটাবেসে সংযোগ স্থাপন**
```php
$db = new mysqli("localhost", "root", "", "library");
if ($db->connect_error) {
die("Connect Error ({$db->connect_errno}) {$db->connect_error}");
}
```

#### কি হচ্ছে এখানে?
- **`new mysqli("localhost", "root", "", "library")`**
- MySQL ডাটাবেসে সংযোগ স্থাপন করতে ব্যবহার করা হয়েছে।
- **`localhost`**: সার্ভার ঠিকানা।
- **`root`**: ডাটাবেস ব্যবহারকারীর নাম।
- **`""`**: পাসওয়ার্ড (এক্ষেত্রে খালি)।
- **`library`**: যেই ডাটাবেস ব্যবহার হবে তার নাম।

- **`if ($db->connect_error)`**
- যদি সংযোগ স্থাপনে কোনো ত্রুটি হয়, তাহলে এর মাধ্যমে তা ধরা হবে।

- **`die()`**
- যদি ত্রুটি থাকে, তাহলে এটি প্রোগ্রাম বন্ধ করে একটি ত্রুটি বার্তা দেখায়।

---

### 2. **ডাটাবেস থেকে ডাটা নিয়ে আসা**
```php
$sql = "SELECT * FROM books WHERE available = 1 ORDER BY title";
$result = $db->query($sql);
```

#### কি হচ্ছে এখানে?
- **`$sql`**:
- একটি SQL কোয়েরি তৈরি করা হয়েছে।
- **`SELECT * FROM books`**: `books` টেবিল থেকে সব কলাম নির্বাচন করা হয়েছে।
- **`WHERE available = 1`**: কেবল সেই বইগুলো নির্বাচন করা হচ্ছে যেগুলো **উপলব্ধ (available = 1)**।
- **`ORDER BY title`**: বইগুলো শিরোনাম অনুযায়ী সাজানো হবে।

- **`$db->query($sql)`**:
- ডাটাবেসে কোয়েরি চালানো হয়েছে এবং ফলাফল **`$result`** ভেরিয়েবলে সংরক্ষণ করা হয়েছে।

---

### 3. **HTML অংশে টেবিল তৈরি করা**
```html
<table cellSpacing="2" cellPadding="6" align="center" border="1">
<tr>
<td colspan="4">
<h3 align="center">These Books are currently available</h3>
</td>
</tr>
<tr>
<td align="center">Title</td>
<td align="center">Year Published</td>
<td align="center">ISBN</td>
</tr>
```

#### কি হচ্ছে এখানে?
- **`<table>`**:
- HTML টেবিল তৈরি করা হচ্ছে।
- **`cellSpacing="2"`**: সেলগুলোর মধ্যে ফাঁক।
- **`cellPadding="6"`**: সেলের ভেতরের ফাঁকা জায়গা।
- **`align="center"`**: টেবিলটি মাঝখানে থাকবে।
- **`border="1"`**: টেবিলের চারপাশে বর্ডার দেওয়া হবে।

- **টেবিলের শিরোনাম (header)**:
- প্রথম সারি: **`<h3 align="center">`** - "These Books are currently available" লেখা হবে।
- দ্বিতীয় সারি: শিরোনামের কলামগুলো - `Title`, `Year Published`, এবং `ISBN`।

---

### 4. **ডাটাবেস থেকে ডাটা দেখানো**
```php
<?php while ($row = $result->fetch_assoc()) { ?>
<tr>
<td><?php echo stripslashes($row['title']); ?></td>
<td align="center"><?php echo $row['pub_year']; ?></td>
<td><?php echo $row['ISBN']; ?></td>
</tr>
<?php } ?>
```

#### কি হচ্ছে এখানে?
- **`while ($row = $result->fetch_assoc())`**:
- ডাটাবেস থেকে প্রতিটি সারি (row) ধীরে ধীরে টেনে আনে।
- **`$row`** একটি অ্যাসোসিয়েটিভ অ্যারে, যেখানে কলামের নাম অনুযায়ী ডাটাগুলো রাখা হয়।

- **`stripslashes($row['title'])`**:
- `title` কলাম থেকে ডাটা আনে এবং তা দেখায়।
- **`stripslashes()`**: যদি ডাটার মধ্যে অতিরিক্ত ব্যাকস্ল্যাশ থাকে, তা সরিয়ে ফেলে।

- **`$row['pub_year']`**:
- `pub_year` কলামের ডাটা দেখায়।

- **`$row['ISBN']`**:
- `ISBN` কলামের ডাটা দেখায়।

প্রতিটি সারি ডাটাবেস থেকে নিয়ে HTML টেবিলে নতুন একটি সারি হিসেবে দেখানো হয়।

---

### 5. **পূর্ণ HTML বন্ধ করা**
```html
</table>
</body>
</html>
```

#### কি হচ্ছে এখানে?
- টেবিল শেষ করা হয়েছে।
- HTML ফাইলের বডি এবং ডকুমেন্ট ক্লোজ করা হয়েছে।

 */