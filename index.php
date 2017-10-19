<!DOCTYPE html>
<html>
<head>
    <?php require 'autoload.php'; ?>
    <title>Nipponjaku</title>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="<?= '/Assets/CSS/reset.css'; ?>">
    <link rel="stylesheet" type="text/css" href="<?= '/Assets/CSS/style.css'; ?>">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="<?= '/Assets/JS/process.js'; ?>"></script>
    <script src="<?= '/Assets/JS/kanaToRomaji.js'; ?>"></script>
    <script src="<?= '/Assets/JS/kanjiToKana.js'; ?>"></script>
</head>
<body>
<container>
    <!--    <pre>--><?php //var_dump($_GET); ?><!--</pre>-->
    <header>
        <?= $global->jap('日本語'); ?>
    </header>
    <navigation>
        <?php require 'Views/Blocks/navigation.phtml'; ?>
    </navigation>
    <content>
        <?php

        $dir = $global->getDir();
        $page = $global->getPage();

        if ($page) $path = PAGEROOT . $dir . '/' . $page . '.phtml';
        elseif ($dir) $path = PAGEROOT . $dir . '/' . $dir . '.phtml';
        else $path = PAGEROOT . 'home.phtml';

        try {
            if(!is_file($path)) throw new Exception();
            require $path;
        } catch (Exception $e) {
            require PAGEROOT . '404.phtml';
        }

        ?>
        <footer>
            &copy; Nipponjaku <?= date('Y'); ?>. Formerly Anime Sekai.
        </footer>
    </content>
</container>
</body>
</html>