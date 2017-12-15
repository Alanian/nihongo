'use strict';

function swapScreens(show, hide) {
    $(show).animate({height: 'toggle'}, 1000);
    $(hide).animate({height: 'toggle'}, 1000);
}

function removeScreen(hide) {
    $(hide).animate({height: 'toggle'}, 0);
}

function getEndRank(accuracy) {
    var interval = 100 / 28;

    if (accuracy >= 100 - interval) return 'S';
    else if (accuracy > 100 - interval * 3) return 'A';
    else if (accuracy > 100 - interval * 6) return 'B';
    else if (accuracy > 100 - interval * 10) return 'C';
    else if (accuracy > 100 - interval * 15) return 'D';
    else if (accuracy > 100 - interval * 21) return 'E';
    return 'F';
}

function endHiragana() {
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
    // $('jap').hover(function () {
    //     var meaning = $(this).find('meaning');
    //     var width = meaning.width();
    //     meaning.css('margin-left', '-' + (width / 2 + 16) + 'px');
    // });
    //
    // $('.kana-table').find('td').hover(function () {
    //     var meaning = $(this).find('meaning');
    //     var width = meaning.width();
    //     meaning.css('margin-left', '-' + (width / 2 + 16) + 'px');
    //     meaning.css('margin-bottom', '-27px');
    // });
    //
    var content = $('content');
    var html;

    content.find('span').hover(
        function () {
            var meaning = $(this).attr('content');
            html = $(this).html();
            if (meaning) $(this).html(html + '<p>' + meaning + '</p>');
            var width = $(this).outerWidth();
            $(this).find('p').css('min-width', Math.floor(width) + 'px');
        },
        function () {
            $(this).html(html);
        }
    );

    content.find('span.jap').click(function () {

        alert($(this).outerWidth());

        var particle = $(this).hasClass('particle');

        var text = $(this).html();
        var roma = kanaToRomaji(text, particle);

        if (text === roma) {
            $(this).html(kanjiToKana(text));
            alert(html);
        } else {
            $(this).removeClass('jap');
            $(this).html(roma);
        }
    });

    //
    // $('span:after').css('color', 'red');
    // $(this).attr('data-content', 'hallo');
    // var width = meaning.width();
    // meaning.css('margin-left', '-' + (width / 2 + 16) + 'px');
    // meaning.css('margin-bottom', '-8px');


    // var meaning = $(this).find('meaning');


    // function getRandomInt(min, max) {
    //     return Math.floor(Math.random() * (max - min + 1)) + min;
    // }

    // function getRandomColor() {
    //     var min = 0;
    //     var max = 255;
    //     return 'rgb(' + getRandomInt(min, max) + ',' + getRandomInt(min, max) + ',' + getRandomInt(min, max) + ')';
    // }
    //
    // function getRandomColorBright() {
    //     var min = 150;
    //     var max = 255;
    //     return 'rgb(' + getRandomInt(min, max) + ',' + getRandomInt(min, max) + ',' + getRandomInt(min, max) + ')';
    // }
    //
    // function getRandomColorDark() {
    //     var min = 0;
    //     var max = 100;
    //     return 'rgb(' + getRandomInt(min, max) + ',' + getRandomInt(min, max) + ',' + getRandomInt(min, max) + ')';
    // }


    // function getHSL() {
    //     var c = getRandomInt(0, 360);
    //     var s = getRandomInt(0, 100);
    //     var h = getRandomInt(10, 80);
    //
    //     var bg = 'hsl(' + c + ',' + s + '%,' + h + '%)';
    //     var bd = 'hsl(' + c + ',' + s + '%,' + (h - 10) + '%)';
    //     var co = 'hsl(' + c + ',' + s + '%,' + (h + 20) + '%)';
    //
    //     return [bd, bg, co];
    // }
    //
    // function getHex(min, max) {
    //     return '#' + getRandomInt(min, max).toString(16) + getRandomInt(min, max).toString(16) + getRandomInt(min, max).toString(16);
    // }

    // $('content').find('span').hover(function () {
    //     // $(this).css('border-color', getHSLA());
    //     // $(this).css('background-color', getHSLA());
    //     // $(this).css('color', getHSLA());
    //     // var meaning = $(this).attr('meaning');
    //     // $(this).after('<meaning>'+meaning+'</meaning>');
    //     // $(this).attr('data-content', 'hallo');
    //     // var width = meaning.width();
    //     // meaning.css('margin-left', '-' + (width / 2 + 16) + 'px');
    //     // meaning.css('margin-bottom', '-8px');
    //
    //
    //     // var meaning = $(this).find('meaning');
    //
    // });

    // $('content').find('.main').mousedown(function () {
    //     var hsl = getHSL();
    //     $(this).css('border-color', hsl[0]);
    //     $(this).css('background-color', hsl[1]);
    //     $(this).css('color', hsl[2]);
    //     // var meaning = $(this).attr('meaning');
    //     // $(this).after('<meaning>'+meaning+'</meaning>');
    //     // $(this).attr('data-content', 'hallo');
    //     // var width = meaning.width();
    //     // meaning.css('margin-left', '-' + (width / 2 + 16) + 'px');
    //     // meaning.css('margin-bottom', '-8px');
    //
    //
    //     // var meaning = $(this).find('meaning');
    //
    // });
});