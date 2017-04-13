/*************************************************
 PROCESS
 *************************************************/

var ht;
var tries;
var matches;
var accuracy;
var wrong;

function start(from, number, slice) {
    slice = slice || false;
    ht = new HiraganaTable(from, number, slice);
    tries = 0;
    matches = 0;
    swapScreens(".start", ".before-start");
    $(".info-box-top").find("p").html("Please insert the correct reading of the Hiragana shown on the left.");
    update();
}

function update() {
    if (ht.table.length) {
        accuracy = Math.floor(matches / tries * 100);
        $("#hiragana-box").html(ht.table[0].character);
        $(".info-box-bottom").find("p").html("Hiragana remaining: " + ht.table.length + "");
        if (!accuracy)
            accuracy = 0;
        $(".info-box-bottom").find("p").append("<br>Accuracy: " + accuracy + "%");
    } else {
        end("<span class='jap-font'>ひらがな</span>");
    }
}

function check() {
    var input = $(".result").find("input").val();
    var correct = ht.table[0].reading;

    if (input.length <= correct.length && !wrong) {
        for (var i = 0; i < input.length; i++) {
            if (input[i] != correct[i]){
                wrong = true;
                tries++;
            }
        }
    }

    if (input == correct) {
        $(".result").find("input").val("");
        $(".info-box-top").find("p").html("Correct!");
        ht.removeFirst();

        if(!wrong){
            matches++;
            tries++;
        }

        wrong = false;
    }

    update();
}

function skip() {
    $(".info-box-top").find("p").html("<span class='jap-font'>" + ht.table[0].character + "</span> = " + ht.table[0].reading);
    ht.moveFirst(3);
    tries++;
    update();
}

$(document).ready(function () {

    $("#hiragana-gojuon").find("button").click(function () {
        start(0, 46);
    });

    $("#hiragana-dakuten").find("button").click(function () {
        start(46, 25);
    });

    $("#hiragana-gojuon-dakuten").find("button").click(function () {
        start(0, 71);
    });

    $("#hiragana-yoon").find("button").click(function () {
        start(71, 36);
    });

    $("#hiragana-first-number").find("button").click(function () {
        var val = $("#hiragana-first-number").find("input[type=number]").val();
        if (val > 0)
            start(0, val);
    });

    $("#hiragana-random-number").find("button").click(function () {
        var val = $("#hiragana-random-number").find("input[type=number]").val();
        if (val > 0)
            start(0, val, true)
    });

    swapScreens(".before-start", ".start");
    swapScreens("", ".end");

    $("#start-over-button").click(function () {
        swapScreens(".before-start", ".end");
    });

    // $(".result").keyup(function (e) {
    //     if (e.keyCode == 13) {
    //         $("#check-result").trigger("click");
    //     }
    // });

    $(".result").keyup(function (e) {
        check();
    });

    $("#skip").click(function () {
        skip();
    });

    $("#hiragana-first-number").find("input").keyup(function (e) {
        if (e.keyCode == 13) {
            $("#hiragana-first-number").find("button").trigger("click");
        }
    });

    $("#hiragana-random-number").find("input").keyup(function (e) {
        if (e.keyCode == 13) {
            $("#hiragana-random-number").find("button").trigger("click");
        }
    });
});