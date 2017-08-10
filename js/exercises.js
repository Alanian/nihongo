'use strict';

var solutions = [5, 2, 4, 0, 205, 2272325277714, 0, 0, 0, 0, 17, 0, 0, 0, 309, 0, 0, 0, 0, 0];

$(document).ready(function () {
    $('body').on('mouseenter', '.exercise-block', function () {

        $('.exercise-button').click(function () {
            var exercise = parseInt($(this).attr('id').replace('exercise-', ''));
            var options = $('input[id]').length;
            var result = '';
            for (var i = 1; i <= options; i++) result += $('#' + i).is(':checked') ? '1' : '0';
            result = parseInt(result, 2);

            console.log(result);

            var resultBox = $('.result');
            if (solutions[exercise - 1] == result) {
                resultBox.html('Congrats! You\'ve chosen the right answers.');
                resultBox.css('color', '#30ad30');
                $('.exercise-next-button').css('visibility', 'visible');
            } else {
                resultBox.html('Your result is incorrect. Re-read the lesson or contact me if I made a mistake.');
                resultBox.css('color', '#ad3030');
            }

            $('.exercise-next-button').click(function () {
                window.location.replace('lessons.php?lesson=' + (exercise + 1));
            });
        });

        $('jap').hover(function () {
            var meaning = $(this).find('meaning');
            var width = meaning.width();
            meaning.css('margin-left', '-' + (width / 2 + 16) + 'px');
        });

        $('em').hover(function () {
            var meaning = $(this).find('meaning');
            var width = meaning.width();
            meaning.css('margin-left', '-' + (width / 2 + 16) + 'px');
            meaning.css('margin-bottom', '-8px');
        });

        var particleClicked = false;
        $('span').find('jap[particle]').click(function () {
            particleClicked = true;
        });
        $('span').find('jap').click(function () {
            var text = $(this).html();
            var kanaText = kanjiToKana(text);
            if (text == kanaText) $(this).wrap('<em></em>').parent().html(kanaToRomaji(kanaText, particleClicked));
            else $(this).html(kanaText);
            particleClicked = false;
        });
    });
});