<div class="cv-container">
    <?php if ($profilePic): ?>
    <div class="profile-pic">
        <img src="<?php echo $profilePic; ?>" alt="Profile Picture">
    </div>
    <?php endif;?>
    <h1><?php echo $name; ?></h1>
    <p>Email: <?php echo $email; ?></p>
    <p>Phone: <?php echo $phone; ?></p>
    <p>Address: <?php echo $address; ?></p>

    <h2>Bio</h2>
    <p><?php echo $bio; ?></p>

    <h2>Education</h2>
    <p><?php echo $education; ?></p>

    <h2>Experience</h2>
    <p><?php echo $experience; ?></p>

    <h2>Skills</h2>
    <p><?php echo $skills; ?></p>

    <?php if (!empty($projects)): ?>
    <h2>Projects</h2>
    <p><?php echo $projects; ?></p>
    <?php endif;?>

    <?php if (!empty($languages)): ?>
    <h2>Languages</h2>
    <p><?php echo $languages; ?></p>
    <?php endif;?>

    <h2>Social Links</h2>
    <?php if ($linkedin): ?>
    <p>LinkedIn: <a href="<?php echo $linkedin; ?>"><?php echo $linkedin; ?></a></p>
    <?php endif;?>
    <?php if ($github): ?>
    <p>GitHub: <a href="<?php echo $github; ?>"><?php echo $github; ?></a></p>
    <?php endif;?>
</div>
<button onclick="window.print()">Print as PDF</button>
