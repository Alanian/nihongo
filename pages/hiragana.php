<!DOCTYPE html>
<html lang="de">
<?php require '../includes/head.html' ?>
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

                        <div class="col-sm-offset-3 col-sm-6">
                            <div class="input-group" id="hiragana-gojuon">
                                <span class="input-group-addon left-addon">き</span>
                                <span class="input-group-addon describing-addon">Gojūon</span>
                                <span class="input-group-btn button-addon">
                                    <button class="btn btn-default" type="button">Los</button>
                                </span>
                            </div>
                        </div>

                        <div class="col-sm-offset-3 col-sm-6">
                            <div class="input-group" id="hiragana-dakuten">
                                <span class="input-group-addon left-addon">ぎ</span>
                                <span class="input-group-addon describing-addon">Dakuten</span>
                                <span class="input-group-btn button-addon">
                                    <button class="btn btn-default" type="button">Los</button>
                                </span>
                            </div>
                        </div>

                        <div class="col-sm-offset-3 col-sm-6">
                            <div class="input-group" id="gojuon-dakuten-gojuon">
                                <span class="input-group-addon left-addon">きぎ</span>
                                <span class="input-group-addon describing-addon">Gojūon + Dakuten</span>
                                <span class="input-group-btn button-addon">
                                    <button class="btn btn-default" type="button">Los</button>
                                </span>
                            </div>
                        </div>

                        <div class="col-sm-offset-3 col-sm-6">
                            <div class="input-group" id="yoon-gojuon">
                                <span class="input-group-addon left-addon">きょ</span>
                                <span class="input-group-addon describing-addon">Yōon</span>
                                <span class="input-group-btn button-addon">
                                    <button class="btn btn-default" type="button">Los</button>
                                </span>
                            </div>
                        </div>

                        <div class="col-sm-offset-3 col-sm-6">
                            <div class="input-group" id="hiragana-first-number">
                                <span class="input-group-addon left-text-addon">Die ersten</span>
                                <input type="number" min="1" max="107" class="form-control" placeholder="Bitte eine Zahl eingeben">
                                <span class="input-group-btn">
                                    <button class="btn btn-default" type="button">Los</button>
                                </span>
                            </div>
                        </div>

                        <div class="col-sm-offset-3 col-sm-6">
                            <div class="input-group" id="hiragana-random-number">
                                <span class="input-group-addon left-text-addon">Zufällige</span>
                                <input type="number" min="1" max="107" class="form-control" placeholder="Bitte eine Zahl eingeben">
                                <span class="input-group-btn">
                                    <button class="btn btn-default" type="button">Los</button>
                                </span>
                            </div>
                        </div>

                </div>

                <div class="start">

                    <!--            <div id="hiragana-container">-->
                    <!--                <div id="info-box-top" class="show-box"></div>-->
                    <!--                <div id="start">-->
                    <!--                    <div id="hiragana-box" class="show-box">-->
                    <!--                    </div>-->
                    <!--                    <div class="show-box">-->
                    <!--                        <input id="hiragana-reading">-->
                    <!--                    </div>-->
                    <!--                    <div class="show-box">-->
                    <!--                        <button id="hiragana-submit" class="jp-button">Submit</button>-->
                    <!--                    </div>-->
                    <!--                </div>-->
                    <!--                <div id="end">-->
                    <!--                    <div class="show-box">-->
                    <!--                        <button id="hiragana-start" class="jp-button">Start</button>-->
                    <!--                    </div>-->
                    <!--                </div>-->
                    <!--                <div id="info-box-bottom" class="show-box"></div>-->
                    <!--            </div>-->

                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>
