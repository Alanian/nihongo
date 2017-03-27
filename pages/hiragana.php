<!DOCTYPE html>
<html lang="de" xmlns="http://www.w3.org/1999/html">
<?php require '../includes/head.html' ?>
<script src="../js/Hiragana.class.js"></script>
<script src="../js/hiragana_process.js"></script>
<body>
<?php require '../includes/title-img.html' ?>

<div class="container">

    <div class="row">
        <?php require '../includes/sidebar.html' ?>
        <div class="col-sm-10 content">
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
                         title="46 Grundzeichen">
                        <span class="input-group-addon left-addon">き</span>
                        <span class="input-group-addon describing-addon">Gojūon</span>
                        <span class="input-group-btn button-addon">
                            <button class="btn btn-default button-addon" type="button">Los</button>
                        </span>
                    </div>

                    <div class="input-group input-group-lg" id="hiragana-dakuten" data-toggle="tooltip"
                         title="25 stimmhafte Zeichen">
                        <span class="input-group-addon left-addon">ぎ</span>
                        <span class="input-group-addon describing-addon">Dakuten</span>
                        <span class="input-group-btn button-addon">
                            <button class="btn btn-default button-addon" type="button">Los</button>
                        </span>
                    </div>

                    <div class="input-group input-group-lg" id="hiragana-gojuon-dakuten" data-toggle="tooltip"
                         title="Alle 71 Zeichen">
                        <span class="input-group-addon left-addon">きぎ</span>
                        <span class="input-group-addon describing-addon">Gojūon + Dakuten</span>
                        <span class="input-group-btn button-addon">
                            <button class="btn btn-default button-addon" type="button">Los</button>
                        </span>
                    </div>

                    <div class="input-group input-group-lg" id="hiragana-yoon" data-toggle="tooltip"
                         title="36 doppelvokalische Verbindungen">
                        <span class="input-group-addon left-addon">きょ</span>
                        <span class="input-group-addon describing-addon">Yōon</span>
                        <span class="input-group-btn button-addon">
                            <button class="btn btn-default button-addon" type="button">Los</button>
                        </span>
                    </div>

                    <div class="input-group input-group-lg" id="hiragana-first-number" data-toggle="tooltip"
                         title="1-71">
                        <span class="input-group-addon left-text-addon">Die ersten...</span>
                        <input type="number" min="1" max="71" class="form-control"
                               placeholder="Bitte eine Zahl eingeben">
                        <span class="input-group-btn button-addon">
                            <button class="btn btn-default button-addon" type="button">Los</button>
                        </span>
                    </div>

                    <div class="input-group input-group-lg" id="hiragana-random-number" data-toggle="tooltip"
                         title="1-71">
                        <span class="input-group-addon left-text-addon">Zufällige...</span>
                        <input type="number" min="1" max="71" class="form-control"
                               placeholder="Bitte eine Zahl eingeben">
                        <span class="input-group-btn button-addon">
                            <button class="btn btn-default button-addon" type="button">Los</button>
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
                        <div id="info-box-top" class="show-box"></div>
                            <div id="hiragana-box" class="show-box">
                            </div>
                            <div class="show-box">
                                <input id="hiragana-reading">
                            </div>
                            <div class="show-box">
                                <button id="check-result" class="jp-button">Submit</button>
                            </div>
                        <div id="info-box-bottom" class="show-box"></div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>
