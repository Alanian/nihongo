<?php require '../includes/template_top.php' ?>

<?php
$no_match = false;
if (isset($_GET['lection'])):
    if ($_GET['lection'] == 1):
        require 'lections/lection-' . $_GET['lection'] . '.php';
        ?>
        <div class="button-group">
            <a href="lections.php?lection=hitotsu" class="button">Overview</a>
            <a href="exercises/exercise-<?= $_GET['lection']; ?>.php" rel="modal:open">Proceed</a>
        </div>
        <?php
    elseif (($_GET['lection'] > 20)):
        ?>
        <h1>Lection <?= $_GET['lection']; ?> - Coming Soon</h1>
        <?php
    elseif (($_GET['lection'] > 1)):
        require 'lections/lection-' . $_GET['lection'] . '.php';
        ?>
        <div class="button-group">
            <a href="lections.php?lection=<?= $_GET['lection'] - 1; ?>" class="button">Previous Lection</a>
            <a href="exercises/exercise-<?= $_GET['lection']; ?>.php" rel="modal:open">Proceed</a>
        </div>
        <?php
    elseif (($_GET['lection'] == 'hitotsu')):
        require 'lections/hitotsu.php';
        ?>
        <div class="button-group">
            <a href="lections.php?lection=1" class="button">Start</a>
        </div>
        <?php
    else:
        $no_match = true;
    endif;
else:
    $no_match = true;
endif;
if ($no_match):
    ?>
    <h1>Lections</h1>
    <p>
        So you want to learn Japanese? I hope this page will fulfil your expectations.
    </p>
    <p>
        Short and easy to understand lections are awaiting you. You don't need to have previous experience, but you have
        to understand the essence of a lection before you move to the next one. The direction was chosen considering
        people who are interested in anime and other
        <em>otaku<meaning> a person who lives a hobby of a popular culture</meaning></em>
        stuff. So you are not going to learn business rules in the first place, but I guarantee for high-quality
        explanations combined with enjoyment.
    </p>
    <p>
        There are some things you should know before you get started:<br>
        Japanese words are written <em>cursive</em> to differentiate them from English, hence you should be aware of
        "made" and "<em>made<meaning>until; till; to</meaning></em>". As this page also provides a
        <a href="hiragana-training.php"><em>Hiragana<meaning>a Japanese writing system</meaning></em>-trainer</a>,
        you have the chance to learn it simultaneously - Japanese words will be written in
        <em>Kana<meaning>the Japanese writing systems Hiragana and Katakana</meaning></em>.
        If you can't read it, just click on it and it will turn in readable letters.
        You can move your mouse over almost every cursive/Japanese word to get its meaning.
        <br>Move your mouse over it and then click it:
        <jap>いぬ<meaning>dog</meaning></jap>
        <jap>と<meaning>combining particle (and; with)</meaning></jap>
        <jap>ねこ<meaning>cat</meaning></jap>.
    </p>
    <p>
        This page is still in progress, so try to keep up. If you have suggestions for improvement or find a mistake or
        just want to criticise my terrible English, please contact me.
    </p>
    <div class="button-group">
        <a href="lections.php?lection=hitotsu" class="button">Start Lection</a>
    </div>
    <?php
endif;
?>

<?php require '../includes/template_bottom.php'; ?>