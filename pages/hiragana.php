<?php require '../includes/template_top.php' ?>

<script src="../js/Hiragana.class.js"></script>
<script src="../js/hiragana_process.js"></script>
<h2>Hiragana</h2>
<p>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
    ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
    dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
    magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</p>

<div class="learn-container">
    <div class="before-start">

        <div class="input-group input-group-lg" id="hiragana-gojuon" data-toggle="tooltip"
             title="46 main characters">
            <span class="input-group-addon left-addon jap-font">き</span>
            <span class="input-group-addon describing-addon">Gojūon</span>
            <span class="input-group-btn button-addon">
                    <button class="btn btn-default button-addon" type="button">Start</button>
                </span>
        </div>

        <div class="input-group input-group-lg" id="hiragana-dakuten" data-toggle="tooltip"
             title="25 voiced characters">
            <span class="input-group-addon left-addon jap-font">ぎ</span>
            <span class="input-group-addon describing-addon">Dakuten</span>
            <span class="input-group-btn button-addon">
                    <button class="btn btn-default button-addon" type="button">Start</button>
                </span>
        </div>

        <div class="input-group input-group-lg" id="hiragana-gojuon-dakuten" data-toggle="tooltip"
             title="all 71 characters">
            <span class="input-group-addon left-addon jap-font">きぎ</span>
            <span class="input-group-addon describing-addon">Gojūon + Dakuten</span>
            <span class="input-group-btn button-addon">
                    <button class="btn btn-default button-addon" type="button">Start</button>
                </span>
        </div>

        <div class="input-group input-group-lg" id="hiragana-yoon" data-toggle="tooltip"
             title="36 vocal combinations">
            <span class="input-group-addon left-addon jap-font">きょ</span>
            <span class="input-group-addon describing-addon">Yōon</span>
            <span class="input-group-btn button-addon">
                    <button class="btn btn-default button-addon" type="button">Start</button>
                </span>
        </div>

        <div class="input-group input-group-lg" id="hiragana-first-number" data-toggle="tooltip"
             title="1 to 71">
            <span class="input-group-addon left-text-addon">First...</span>
            <input type="number" min="1" max="71" class="form-control"
                   placeholder="number">
            <span class="input-group-btn button-addon">
                    <button class="btn btn-default button-addon" type="button">Start</button>
                </span>
        </div>

        <div class="input-group input-group-lg" id="hiragana-random-number" data-toggle="tooltip"
             title="1 to 71">
            <span class="input-group-addon left-text-addon">Random...</span>
            <input type="number" min="1" max="71" class="form-control"
                   placeholder="number">
            <span class="input-group-btn button-addon">
                    <button class="btn btn-default button-addon" type="button">Start</button>
                </span>
        </div>

        <!--                    <div class="input-group input-group-lg" id="text-convert" data-toggle="tooltip"-->
        <!--                         title="Ersetzt Roomaji durch Hiragana">-->
        <!--                        <span class="input-group-addon left-text-addon">masu - ます (いん)</span>-->
        <!--                        <input type="text" class="form-control" placeholder="Text...">-->
        <!--                        <span class="input-group-btn button-addon">-->
        <!--                            <button class="btn btn-default" type="button">Los</button>-->
        <!--                        </span>-->
        <!--                    </div>-->

    </div>

    <div class="start">
        <div id="hiragana-container">
            <div id="hiragana-box" class="jap-font"></div>
            <div class="show-box-hiragana info-box-top"><p></p></div>
            <div class="show-box-hiragana result">
                <input type="text">
                <button id="check-result">Check</button>
            </div>
            <div class="show-box-hiragana info-box-bottom"><p></p></div>
        </div>
    </div>

    <div class="end">
        <h3>Rank reached:</h3>
        <p class="rank"></p>
        <p class="advice"></p>
        <div>
            <button id="start-over-button" class="btn btn-default btn-lg">Start over</button>
        </div>
    </div>

</div>

<?php require '../includes/template_bottom.php' ?>