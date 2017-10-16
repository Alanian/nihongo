/*************************************************
 PROCESS
 *************************************************/

var vt;
var tries;
var matches;
var accuracy;
var form;
var rightForm;
var mixed;

var forms = ["masu", "nai", "tai", "te"];

function start(number) {
    vt = new VerbTable();
    if (number < vt.table.length) vt.table = vt.table.slice(0, number);
    tries = 0;
    matches = 0;
    swapScreens(".start", ".before-start");
    $(".info-box-top").find("p").html("Please insert the correct form of the verb shown above.");
    update();
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

    $("#verbs-box").html(vt.table[0].stem + vt.table[0].ending + " + " + form);
    $(".meaning-box").find("p").html("Meaning: " + vt.table[0].meaning);
    $(".info-box-bottom").find("p").html("Verbs remaining: " + vt.table.length);
    $(".result").find("input").val("");
}

$(document).ready(function () {
    swapScreens(".before-start", ".start");
    swapScreens("", ".end");

    $("#verb-masu").find("button").click(function () {
        mixed = false;
        form = "masu";
        start(10);
    });
    $("#verb-nai").find("button").click(function () {
        mixed = false;
        form = "nai";
        start(10);
    });
    $("#verb-tai").find("button").click(function () {
        mixed = false;
        form = "tai";
        start(10);
    });
    $("#verb-te").find("button").click(function () {
        mixed = false;
        form = "te";
        start(10);
    });
    $("#verb-mixed").find("button").click(function () {
        mixed = true;
        var val = $("#verb-mixed").find("input[type=number]").val();
        if (val > 0) start(val);
    });


    $("#check-result").click(function () {
        var input = $(".result").find("input").val();

        if (input == rightForm) {
            $(".info-box-top").find("p").html("Correct!");
            vt.removeFirst();
            matches++;
        } else {
            $(".info-box-top").find("p").html("Wrong! " + vt.table[0].stem + vt.table[0].ending + " + " + form + " = " + rightForm);
            vt.moveFirst(3);
        }

        tries++;

        if (vt.table.length) {
            update();
            accuracy = Math.floor(matches / tries * 100);
            $(".info-box-bottom").find("p").append("<br>Accuracy: " + accuracy + "%");
        } else {
            if (mixed) end("all the forms");
            else end("the " + form + "-form");
        }
    });

    $("#start-over-button").click(function () {
        swapScreens(".before-start", ".end");
    });

    $("#verb-mixed").find("input").keyup(function (e) {
        if (e.keyCode == 13) {
            $("#verb-mixed").find("button").trigger("click");
        }
    });

    $(".result").keyup(function (e) {
        if (e.keyCode == 13) {
            $("#check-result").trigger("click");
        }
    });
});