/*************************************************
 PROCESS
 *************************************************/

var ht;
var tries;
var matches;
var accuracy;

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
    $(".info-box-top").find("p").html("Please insert the correct reading of the Hiragana shown on the left.");
    update();
}

function end() {
    swapScreens(".end", ".start");
    var rank;
    var advice;

    if (accuracy >= 100) rank = "S";
    else if (accuracy > 90) rank = "A";
    else if (accuracy > 80) rank = "B";
    else if (accuracy > 60) rank = "C";
    else if (accuracy > 40) rank = "D";
    else if (accuracy > 20) rank = "E";
    else rank = "F";

    if (rank == "S") advice = "You successfully mastered <span class='jap-font'>ひらがな</span>!";
    else if (rank == "A") advice = "Great job! Try again and master rank S.";
    else if (rank == "B") advice = "You are doing very well. Try to sharpen your skills a bit more.";
    else if (rank == "C") advice = "It's a good result, but there's still room for improvement.";
    else if (rank == "D") advice = "Not bad! Try again and see your results move up.";
    else if (rank == "E") advice = "Maybe you should choose an easier option.";
    else advice = "This result can have various reasons. Don't give up and start over!";

    $(".end").find(".rank").html(rank);
    $(".end").find(".advice").html(advice);
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
            end();
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