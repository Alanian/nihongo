/*************************************************
 PROCESS
 *************************************************/

var ht;
var tries;
var matches;
var accuracy;

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
    $("#hiragana-box").html(ht.table[0].character);
    $(".info-box-bottom").find("p").html("Hiragana remaining: " + ht.table.length + "");
    $(".result").find("input").val("");
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

    $("#check-result").click(function () {
        var input = $(".result").find("input").val();

        if (input == ht.table[0].reading) {
            $(".info-box-top").find("p").html("Correct!");
            ht.removeFirst();
            matches++;
        } else {
            $(".info-box-top").find("p").html("Wrong! <span class='jap-font'>" + ht.table[0].character + "</span> = " + ht.table[0].reading);
            ht.moveFirst(3);
        }

        tries++;

        if (ht.table.length) {
            update();
            accuracy = Math.floor(matches / tries * 100);
            $(".info-box-bottom").find("p").append("<br>Accuracy: " + accuracy + "%");
        } else {
            end("ひらがな");
        }
    });

    $("#start-over-button").click(function () {
       swapScreens(".before-start", ".end");
    });

    $(".result").keyup(function (e) {
        if (e.keyCode == 13) {
            $("#check-result").trigger("click");
        }
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