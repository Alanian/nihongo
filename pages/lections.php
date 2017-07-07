<?php require '../includes/template_top.php' ?>

<?php
if (isset($_GET['lection'])) {
    require 'lections/lection-' . $_GET['lection'] . '.php';
} else {
    ?>
    <h1>Lections</h1>
    <p>
        So you want to learn Japanese? I hope this page will fulfill your expectations.
    </p>
    <p>
        Short and easy to understand lections are awaiting you. You don't need to have previous experience, but you have
        to understand the essence of a lection before you move to the next one. The direction was chosen considering
        people who are interested in anime and other
        <em title="a person who lives a hobby of a popular culture">otaku</em>
        stuff. So you are not going to learn business rules in the first place, but I guarantee for high-quality
        explanations combined with enjoyment.
    </p>
    <p>
        There are some things you should know before you get started. Terms you should remember are written
        <strong>bold</strong>. Japanese words are written
        <em title="not a japanese word, no translation for you">cursive</em> to differentiate them from english, hence
        you should be aware of "made" and "<em title="until; till; to">made</em>". As this page also provides a
        <a href="hiragana-training.php"><em title="a japanese writing system">Hiragana</em> trainer</a>, you
        have the chance to learn it simultaneously - japanese words will be written in
        <em title="the japanese writing systems Hiragana and Katakana">Kana</em>. If you can't read it, just click on it
        and it will turn in readable letters. You can move your mouse over every cursive word to get its meaning.
        <br>Try it:
        <jap title="dog">いぬ</jap>
        <jap title="combining particle (= and; with)">と</jap>
        <jap title="cat">ねこ</jap>
        .
    </p>
    <p>
        This page is still in progress, so try to keep up. If you have suggestions for improvement or found a mistake or
        just want to criticise my terrible english, please contact me.
    </p>
    <div class="button-group">
        <a href="lections.php?lection=1" class="button">Start Lection</a>
    </div>
    <?php
}
?>

<?php require '../includes/template_bottom.php' ?>