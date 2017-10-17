<!DOCTYPE html>
<html>
<head>
    <?php require 'autoload.php'; ?>
    <title>Nipponjaku</title>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="<?= $root . 'Assets/CSS/reset.css'; ?>">
    <link rel="stylesheet" type="text/css" href="<?= $root . 'Assets/CSS/style.css'; ?>">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="<?= $root . 'Assets/JS/process.js'; ?>"></script>
    <script src="<?= $root . 'Assets/JS/kanaToRomaji.js'; ?>"></script>
    <script src="<?= $root . 'Assets/JS/kanjiToKana.js'; ?>"></script>
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

        if ($page) $path = $pageRoot . $dir . '/' . $page . '.phtml';
        elseif ($dir) $path = $pageRoot . $dir . '/' . $dir . '.phtml';
        else $path = $pageRoot . 'home.phtml';

        if (file_exists($path)) require $path;
        ?>
        <footer>
            &copy; Nipponjaku <?= date('Y'); ?>. Formerly Anime Sekai.
        </footer>
    </content>
</container>
</body>
</html>