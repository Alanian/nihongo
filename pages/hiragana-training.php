<?php require '../includes/template_top.php' ?>

    <script src="../js/Hiragana.class.js"></script>
    <script src="../js/hiragana_process.js"></script>

    <h1>Hiragana Training</h1>

    <p>
        Use this training program to improve your Hiragana reading skills. If the "Gojūon" option is too hard for you,
        try the "First..." option with a small number like five and increase it steadily.
    </p>
    <p>
        Please enjoy and don't give up!
    </p>

    <div class="training">
        <div class="prepare">
            <div class="button-group">
                <button id="gojuon" class="start-button">
                    <header>Gojūon</header>
                    <section>46 basic characters</section>
                    <footer><jap>き と ふ し は</jap></footer>
                </button>
                <button id="dakuten" class="start-button">
                    <header>Dakuten</header>
                    <section>25 voiced variations</section>
                    <footer><jap>ぎ ど ぷ じ ば</jap></footer>
                </button>
                <button id="yoon" class="start-button">
                    <header>Yōon</header>
                    <section>36 vocal combinations</section>
                    <footer><jap>にゃ しょ きゅ</jap></footer>
                </button>
            </div>
            <div class="button-group">
                <button id="gojuon-dakuten" class="start-button double">
                    <header>Gojūon & Dakuten</header>
                    <section>all 71 tones of native Japanese</section>
                    <footer><jap>き と ふ し は ぎ ど ぷ じ ば</jap></footer>
                </button>
                <button id="sokuon" class="start-button">
                    <header>Sokuon</header>
                    <section>20 double consonants</section>
                    <footer><jap>っと っし っぽ</jap></footer>
                </button>
            </div>
            <div class="button-group">
                <button id="ultimate" class="start-button triple">
                    <header>Ultimate Challenge</header>
                    <section>Gojūon & Dakuten & Yōon & Sokuon</section>
                    <footer><jap>たっとちゅうばん</jap></footer>
                </button>
            </div>
        </div>
        <div class="start">
            <div class="info">
                <p class="top"></p>
                <p class="bottom"></p>
            </div>
            <div class="task">
                <p></p>
                <jap></jap>
            </div>
            <div class="input">
                <input type="text" class="result" placeholder="Reading">
                <button class="skip">I have no idea</button>
            </div>
        </div>
        <div class="end">
            <h3>Rank reached:</h3>
            <p class="rank"></p>
            <p class="advice"></p>
            <div class="button-group">
                <a class="start-over button">Start Over</a>
            </div>
        </div>
    </div>

<?php require '../includes/template_bottom.php' ?>