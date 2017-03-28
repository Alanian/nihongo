/*************************************************
 PROCESS
 *************************************************/

var ht;
var tries;
var matches;

function swapScreens(show, hide) {
    $(show).css("display", "initial");
    $(hide).css("display", "none");
}

function start(from, number, slice) {
    slice = slice || false;
    ht = new HiraganaTable(from, number, slice);
    tries = 0;
    matches = 0;
    swapScreens(".start", ".before-start");
    $(".info-box-top").html("Please insert the correct reading of the hiragana shown beneath.");
    update();
}

function end() {
    swapScreens(".before-start", ".start");
    // $("#info-box-top").removeClass();
    // $("#info-box-top").addClass("black-screen");
    // $("#info-box-top").html("You've done well!");
    // $("#info-box-bottom").html("Reached: " + Math.floor(matches / tries * 100) + "%");
}

function update() {
    $("#hiragana-box").html(ht.table[0].character);
    $(".info-box-bottom").html("Hiragana remaining: " + ht.table.length);
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

    $("#check-result").click(function () {
        var input = $(".result").find("input").val();

        if (input == ht.table[0].reading) {
            $(".info-box-top").html("Correct!");
            ht.removeFirst();
            matches++;
        } else {
            $(".info-box-top").html("Wrong! It was <i>" + ht.table[0].reading + "</i>.");
            ht.moveFirst(3);
        }

        tries++;

        if (ht.table.length) {
            update();
            $(".info-box-bottom").append("<br>Accuracy: " + Math.floor(matches / tries * 100) + "%");
        } else {
            end();
        }
    });

    $(".result").keyup(function (e) {
        if (e.keyCode == 13) {
            $("#check-result").trigger("click");
        }
    });
});