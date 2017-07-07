function swapScreens(show, hide) {
    $(show).animate({height: 'toggle'}, 1000);
    $(hide).animate({height: 'toggle'}, 1000);
}

function removeScreen(hide){
    $(hide).animate({height: 'toggle'}, 0);
}

function end(text) {
    swapScreens('.end', '.start');
    var rank;
    var advice;

    if (accuracy >= 100) rank = 'S';
    else if (accuracy > 90) rank = 'A';
    else if (accuracy > 80) rank = 'B';
    else if (accuracy > 60) rank = 'C';
    else if (accuracy > 40) rank = 'D';
    else if (accuracy > 20) rank = 'E';
    else rank = 'F';

    if (rank == 'S') advice = 'Congratulations! You successfully mastered ' + text + '.';
    else if (rank == 'A') advice = 'Great job! Try again and master rank S.';
    else if (rank == 'B') advice = 'You are doing very well. Try to sharpen your skills a bit more.';
    else if (rank == 'C') advice = 'It\'s a good result, but there\'s still room for improvement.';
    else if (rank == 'D') advice = 'Not bad! Try again and see your results moving up.';
    else if (rank == 'E') advice = 'Maybe you should choose an easier option.';
    else advice = 'This result can have various reasons. Don\'t give up and start over!';

    $('.end').find('.rank').html(rank);
    $('.end').find('.advice').html(advice);
}

function showTime(element, text, time) {
    element.attr('style', '');
    element.css('opacity', '1');
    element.html(text);

    element.animate({
        opacity: 0
    }, time);
}

$(document).ready(function () {
    var particleClicked = false;
    $('p').find('jap[particle]').click(function () {
        particleClicked = true;
    });
    $('p').find('jap').click(function () {
        var text = $(this).html();
        var title = $(this).attr('title');
        $(this).wrap('<em title="' + title + '"></em>').parent().html(kanaToRomaji(text, particleClicked));
        particleClicked = false;
    });
});