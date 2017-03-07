<!DOCTYPE html>
<html lang="de">
<?php require '../includes/head.html' ?>
<body>

    <?php
    $file = fopen('../data/hiragana.txt', 'r');

    while($item = fgets($file)){
        $arr = explode(' ', $item);
        echo "<p>{$arr[0]} <=> {$arr[1]}</p>";
    }
    ?>

</body>
</html>
