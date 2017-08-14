<form action="downloader.php" method="post">
    <label> URL
        <input type="text" name="url">
    </label>
    <input type="submit" value="load">
</form>

<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    ini_set('max_execution_time', 300);

    function getRandomName()
    {
        $randomMora = [
            'sa', 'ko', 'mi', 'ri', 'do', 'chi', 'fu', 'su', 'to', 'no',
            'ya', 'wa', 'shi', 'ka', 'mo', 're', 'i', 'na', 'yo', 'ge'
        ];
        $randomName = $randomMora[array_rand($randomMora)] . $randomMora[array_rand($randomMora)] . $randomMora[array_rand($randomMora)];
        mkdir('downloads/' . $randomName);
        return $randomName;
    }

    $randomName = getRandomName();

    $source = file_get_contents($_POST['url']) or die('This URL doesn\'t exist.');
    $index = 1;

    while ($position = strpos($source, '"')) {
        $closingQuotePosition = strpos($source, '"', $position + 1);
        $url = substr($source, $position + 1, $closingQuotePosition - $position - 1);
        $ending = substr($url, count($url) - 5);

        $isImage = strpos($url, '.jpg') || strpos($url, '.png') || strpos($url, '.gif') || strpos($url, '.bmp');
        if ($isImage) {
            if (strpos($url, 'http') === false) $url = 'http:' . $url;
            $downloadFolder = 'downloads/' . $randomName . '/' . $randomName . '-' . $index . $ending;
            file_put_contents($downloadFolder, file_get_contents($url));
            $index++;
        }

        $source = substr($source, $closingQuotePosition + 1);
    }

    echo $index . ' elements created in ' . $randomName;
}