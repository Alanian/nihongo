'use strict';

function swapScreens(show, hide) {
    $(show).animate({height: 'toggle'}, 1000);
    $(hide).animate({height: 'toggle'}, 1000);
}

function removeScreen(hide) {
    $(hide).animate({height: 'toggle'}, 0);
}

function getEndRank(accuracy){
    var interval = 100 / 28;

    if (accuracy >= 100 - interval) return 'S';
    else if (accuracy > 100 - interval * 3) return  'A';
    else if (accuracy > 100 - interval * 6) return  'B';
    else if (accuracy > 100 - interval * 10) return  'C';
    else if (accuracy > 100 - interval * 15) return  'D';
    else if (accuracy > 100 - interval * 21) return  'E';
    return  'F';
}

function endHiragana(){
    var rank = getEndRank(accuracy);
    rank = rank == 'S' && numberOfCharacters != 127 ? 'A' : rank;
    var advice;

    switch (rank) {
        case 'S':
            advice = 'Congratulations! You successfully mastered <jap>ひらがな</jap>.';
            break;
        case 'A':
            advice = 'Great job! You\'ve got the hang of it.<br>Try the ultimate challange and master rank S.';
            break;
        case 'B':
            advice = 'You are doing very well. Try to sharpen your skills a bit more.';
            break;
        case 'C':
            advice = 'It\'s a good result, but there\'s still room for improvement.';
            break;
        case 'D':
            advice = 'Not bad! Try again and see your results moving up.';
            break;
        case 'E':
            advice = 'Maybe you should choose an easier option.';
            break;
        case 'F':
            advice = 'This result can have various reasons. Don\'t give up and start over!';
    }

    end(rank, accuracy, advice);
}

function endKanji() {
    var rank = getEndRank(accuracy);
    var advice;

    switch (rank) {
        case 'S':
            advice = 'Congratulations! You successfully mastered <jap>漢字</jap>.';
            break;
        case 'A':
            advice = 'Great job! You\'ve got the hang of it.<br>Seek perfection master rank S.';
            break;
        case 'B':
            advice = 'You are doing very well. Try to sharpen your skills a bit more.';
            break;
        case 'C':
            advice = 'It\'s a good result, but there\'s still room for improvement.';
            break;
        case 'D':
            advice = 'Not bad! Try again and see your results moving up.';
            break;
        case 'E':
            advice = 'Maybe you should choose an easier option.';
            break;
        case 'F':
            advice = 'This result can have various reasons. Don\'t give up and start over!';
    }

    end(rank, accuracy, advice);
}

function end(rank, accuracy, advice) {
    swapScreens('.end', '.start');

    $('.end').find('.rank').html(rank);
    $('.end').find('.rank-accuracy').html(accuracy + '%')
    $('.end').find('.advice').html(advice);
}

function showTime(element, text, time) {
    element.stop();
    element.attr('style', '');
    element.css('opacity', '1');
    element.html(text);

    element.animate({
        opacity: 0
    }, time);
}

$(document).ready(function () {
    $('jap').hover(function () {
        var meaning = $(this).find('meaning');
        var width = meaning.width();
        meaning.css('margin-left', '-' + (width / 2 + 16) + 'px');
    });

    $('.kana-table').find('td').hover(function () {
        var meaning = $(this).find('meaning');
        var width = meaning.width();
        meaning.css('margin-left', '-' + (width / 2 + 16) + 'px');
        meaning.css('margin-bottom', '-27px');
    });

    $('roma').hover(function () {
        var meaning = $(this).find('meaning');
        var width = meaning.width();
        meaning.css('margin-left', '-' + (width / 2 + 16) + 'px');
        meaning.css('margin-bottom', '-8px');
    });

    var particleClicked = false;
    $('p').find('jap[particle]').click(function () {
        particleClicked = true;
    });
    $('p').find('jap').click(function () {
        var text = $(this).html();
        var kanaText = kanjiToKana(text);
        if (text == kanaText) $(this).wrap('<roma></roma>').parent().html(kanaToRomaji(kanaText, particleClicked));
        else $(this).html(kanaText);
        particleClicked = false;
    });
    $('form').find('jap[particle]').click(function () {
        particleClicked = true;
    });
    $('form').find('jap').click(function () {
        var text = $(this).html();
        var kanaText = kanjiToKana(text);
        if (text == kanaText) $(this).wrap('<roma></roma>').parent().html(kanaToRomaji(kanaText, particleClicked));
        else $(this).html(kanaText);
        particleClicked = false;
    });
});