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