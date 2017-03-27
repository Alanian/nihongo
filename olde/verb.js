/*************************************************
 PROCESS
 *************************************************/

var vt;
var tries;
var matches;
var form;
var rightForm;
var mixed;

var forms = ["masu", "nai", "tai", "te"];

function swapScreens(show, hide) {
    $(show).css("display", "initial");
    $(hide).css("display", "none");
}

function start() {
    vt = new VerbTable();
    tries = 0;
    matches = 0;
    swapScreens("#start", "#end");
    $("#info-box-top").removeClass();
    $("#info-box-top").addClass("blank-screen");
    $("#info-box-top").html("Please insert the correct form of the Verb shown beneath.");
    update();
}

function end() {
    swapScreens("#end", "#start");
    $("#info-box-top").removeClass();
    $("#info-box-top").addClass("black-screen");
    $("#info-box-top").html("You've done well!");
    $("#info-box-bottom").html("Reached: " + Math.floor(matches / tries * 100) + "%");
}

function update() {
    if (mixed) {
        var actualForm = form;
        while (form == actualForm)
            form = forms[Math.floor(Math.random() * forms.length)];
    }

    switch (form) {
        case "masu":
            rightForm = vt.table[0].getMasuForm();
            break;
        case "nai":
            rightForm = vt.table[0].getNaiForm();
            break;
        case "tai":
            rightForm = vt.table[0].getTaiForm();
            break;
        case "te":
            rightForm = vt.table[0].getTeForm();
            break;
    }

    $("#verb-box").html(vt.table[0].stem + vt.table[0].ending + " + " + form);
    $("#meaning-box").html("Meaning: " + vt.table[0].meaning);
    $("#info-box-bottom").html("Verbs remaining: " + vt.table.length);
    $("#verb-reading").val("");
}

$(document).ready(function () {
    $("#start").css("display", "none");
    $("#info-box-top").html("Press the button!");

    $(".jp-start").click(function () {
        mixed = false;
        form = $(this).val();
        if (form == "mixed")
            mixed = true;
        start();
    });

    $("#verb-submit").click(function () {
        var input = $("#verb-reading").val();

        if (input == rightForm) {
            $("#info-box-top").html("Correct!");
            $("#info-box-top").removeClass();
            $("#info-box-top").addClass("correct-screen");
            vt.removeFirst();
            matches++;
        } else {
            $("#info-box-top").html("Wrong! It was <i>" + rightForm + "</i>.");
            $("#info-box-top").removeClass();
            $("#info-box-top").addClass("wrong-screen");
            vt.moveFirstToEnd();
        }

        tries++;

        if (vt.table.length) {
            update();
            $("#info-box-bottom").append("<br>Accuracy: " + Math.floor(matches / tries * 100) + "%");
        } else {
            end();
        }
    });

    $("#verb-reading").keyup(function (e) {
        if (e.keyCode == 13) {
            $("#verb-submit").trigger("click");
        }
    });
});