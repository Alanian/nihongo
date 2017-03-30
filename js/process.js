function swapScreens(show, hide) {
    $(show).css("display", "initial");
    $(hide).css("display", "none");
}

function end(text) {
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

    if (rank == "S") advice = "Congratulations! You successfully mastered <span class='jap-font'>"+text+"</span>.";
    else if (rank == "A") advice = "Great job! Try again and master rank S.";
    else if (rank == "B") advice = "You are doing very well. Try to sharpen your skills a bit more.";
    else if (rank == "C") advice = "It's a good result, but there's still room for improvement.";
    else if (rank == "D") advice = "Not bad! Try again and see your results moving up.";
    else if (rank == "E") advice = "Maybe you should choose an easier option.";
    else advice = "This result can have various reasons. Don't give up and start over!";

    $(".end").find(".rank").html(rank);
    $(".end").find(".advice").html(advice);
}

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();

    $("#text-convert").find("button").click(function () {
        var val = $("#text-convert").find("input").val();
        val = val.replace(/ma/g, "ま");
        val = val.replace(/su/g, "す");
        val = val.replace(/zu/g, "ず");
        val = val.replace(/te/g, "て");
        val = val.replace(/de/g, "で");
        val = val.replace(/ru/g, "る");
        val = val.replace(/ka/g, "か");
        val = val.replace(/ga/g, "が");
        val = val.replace(/no/g, "の");
        val = val.replace(/shi/g, "し");
        val = val.replace(/na/g, "な");
        val = val.replace(/ta/g, "た");
        val = val.replace(/i/g, "い");
        val = val.replace(/n/g, "ん");
        console.log(val);
    });
});