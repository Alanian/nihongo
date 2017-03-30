<?php require '../includes/template_top.php' ?>

    <script src="../js/Verb.class.js"></script>
    <script src="../js/verbs_process.js"></script>
    <h2>Japanese verbs</h2>
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

            <div class="input-group input-group-lg" id="verb-masu" data-toggle="tooltip"
                 title="most common politeness form">
                <span class="input-group-addon left-addon jap-font">～ます</span>
                <span class="input-group-addon describing-addon">~masu form</span>
                <span class="input-group-btn button-addon">
                    <button class="btn btn-default button-addon" type="button">Start</button>
                </span>
            </div>

            <div class="input-group input-group-lg" id="verb-nai" data-toggle="tooltip"
                 title="form for negating a verb">
                <span class="input-group-addon left-addon jap-font">～ない</span>
                <span class="input-group-addon describing-addon">~nai form</span>
                <span class="input-group-btn button-addon">
                    <button class="btn btn-default button-addon" type="button">Start</button>
                </span>
            </div>

            <div class="input-group input-group-lg" id="verb-tai" data-toggle="tooltip"
                 title="form for expressing one's intentions">
                <span class="input-group-addon left-addon jap-font">～たい</span>
                <span class="input-group-addon describing-addon">~tai form</span>
                <span class="input-group-btn button-addon">
                    <button class="btn btn-default button-addon" type="button">Start</button>
                </span>
            </div>

            <div class="input-group input-group-lg" id="verb-te" data-toggle="tooltip"
                 title="most important grammatical form">
                <span class="input-group-addon left-addon jap-font">～て</span>
                <span class="input-group-addon describing-addon">~te form</span>
                <span class="input-group-btn button-addon">
                    <button class="btn btn-default button-addon" type="button">Start</button>
                </span>
            </div>


            <div class="input-group input-group-lg" id="verb-mixed" data-toggle="tooltip"
                 title="all forms random mixed">
                <span class="input-group-addon left-text-addon">Mixed...</span>
                <input type="number" min="1" class="form-control" placeholder="number">
                <span class="input-group-btn button-addon">
                    <button class="btn btn-default button-addon" type="button">Start</button>
                </span>
            </div>

        </div>

        <div class="start">
            <div id="verbs-container">
                <div id="verbs-box"></div>
                <div class="show-box info-box-top"><p></p></div>
                <div class="show-box meaning-box"><p></p></div>
                <div class="show-box result">
                    <input type="text">
                    <button id="check-result">Check</button>
                </div>
                <div class="show-box info-box-bottom"><p></p></div>
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