<?php require '../includes/template_top.php' ?>

    <script src="../js/Hiragana.class.js"></script>
    <script src="../js/hiragana_process.js"></script>

    <h1>Hiragana</h1>

    <p>
        Hiragana was developed from
        <em>kanji<meaning>chinese characters</meaning></em>,
        that were used for pronunciation only without considering their meaning.
        As fast-writing got common, these
        <em>kanji<meaning>chinese characters</meaning></em>
        got deformed and simplified.
    </p>
    <p>
        This writing system consists of 46 main characters and 25 voiced characters. Knowing the pronunciation of these
        gives you the skill to say <strong>everything</strong> possible in japanese.
    </p>
    <p>
        You can put a character from the i-column add a small version of the y-row together to get a doubled vocal
        syllable.
        This "fusion" removes the <strong>i</strong> (or <strong>iy</strong> on irregular) from the new one.<br>
        <jap>き<meaning>ki</meaning></jap> +
        <jap>ゃ<meaning>ya ( a bit smaller as the original )</meaning></jap> =
        <jap>きゃ<meaning>kya</meaning></jap><br>
        <jap>し<meaning>shi</meaning></jap> +
        <jap>ょ<meaning>yo ( a bit smaller as the original )</meaning></jap> =
        <jap>しょ<meaning>sho</meaning></jap><br>
        <jap>じ<meaning>ji</meaning></jap> +
        <jap>ょ<meaning>yo ( a bit smaller as the original )</meaning></jap> =
        <jap>じょ<meaning>jo</meaning></jap>
    </p>
    <p>
        Consonants can also be doubled. Therefore you put a small <strong>tsu</strong> and a consonantal character together.<br>
        <jap>だ<meaning>da</meaning></jap> +
        <jap>っ<meaning>tsu ( a bit smaller as the original )</meaning></jap> +
        <jap>た<meaning>ta</meaning></jap> =
        <jap>だった<meaning>datta</meaning></jap><br>
        <jap>と<meaning>to</meaning></jap> +
        <jap>っ<meaning>tsu ( a bit smaller as the original )</meaning></jap> +
        <jap>し<meaning>shi</meaning></jap> =
        <jap>とっし<meaning>tosshi</meaning></jap><br>
        <jap>ま<meaning>ma</meaning></jap> +
        <jap>っ<meaning>tsu ( a bit smaller as the original )</meaning></jap> +
        <jap>ち<meaning>chi</meaning></jap> =
        <jap>まっち<meaning>macchi</meaning></jap><br>
    </p>

<?php require 'container/hiragana-table.html'; ?>

<?php require 'container/yoon-table.html'; ?>

<?php require '../includes/template_bottom.php' ?>