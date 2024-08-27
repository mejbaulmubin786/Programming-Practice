<form action="generate_cv.php" method="POST" enctype="multipart/form-data">
    <label for="profile_pic">Profile Picture:</label>
    <input type="file" id="profile_pic" name="profile_pic"><br>

    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required><br>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required><br>

    <label for="phone">Phone:</label>
    <input type="text" id="phone" name="phone" required><br>

    <label for="address">Address:</label>
    <textarea id="address" name="address" required></textarea><br>

    <label for="bio">Bio:</label>
    <textarea id="bio" name="bio" required></textarea><br>

    <label for="education">Education:</label>
    <textarea id="education" name="education" required></textarea><br>

    <label for="experience">Experience:</label>
    <textarea id="experience" name="experience" required></textarea><br>

    <label for="skills">Skills:</label>
    <textarea id="skills" name="skills" required></textarea><br>

    <label for="projects">Projects:</label>
    <textarea id="projects" name="projects"></textarea><br>

    <label for="languages">Languages:</label>
    <textarea id="languages" name="languages"></textarea><br>

    <label for="linkedin">LinkedIn:</label>
    <input type="url" id="linkedin" name="linkedin"><br>

    <label for="github">GitHub:</label>
    <input type="url" id="github" name="github"><br>

    <button type="submit">Generate CV</button>
</form>
