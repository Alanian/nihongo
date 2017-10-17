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
        else $path = 'Views/Pages/home.phtml';

        if (file_exists($path)) require $path;
//        var_dump(is_file('Views/Pages/Lessons/1.phtml'));


        function listFolderFiles($dir)
        {
            $ffs = scandir($dir);

            unset($ffs[array_search('.', $ffs, true)]);
            unset($ffs[array_search('..', $ffs, true)]);

            // prevent empty ordered elements
            if (count($ffs) < 1)
                return;

            echo '<ul>';
            foreach ($ffs as $ff) {
                echo '<li>' . $ff;
                if (is_dir($dir . '/' . $ff)) listFolderFiles($dir . '/' . $ff);
                echo '</li>';
            }
            echo '</ul>';
        }

        ?>
        <footer>
            &copy; Nipponjaku <?= date('Y'); ?>. Formerly Anime Sekai.
        </footer>
    </content>
</container>
</body>
</html>