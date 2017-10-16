'use strict';

/*************************************************
 KANJI PROCESS
 *************************************************/

var startButtonID;
var kt;
var tries;
var matches;
var accuracy;
var wrong;
var numberOfCharacters;

var _info;
var _result;
var _task;

function start(from, number, slice) {
    slice = slice || false;
    kt = new KanjiTable(from, number, slice);
    tries = 0;
    matches = 0;
    swapScreens('.start', '.prepare');
    _info.find('.top').html('Please insert the correct reading of the Kanji (in Hiragana) in the input field on the right.');
    update();
}

function update() {
    if (kt.table.length) {
        accuracy = Math.floor(matches / tries * 100);
        _task.children('jap').html(kt.table[0].character);
        _info.find('.bottom').html('Remaining: ' + kt.table.length);
        if (!accuracy)
            accuracy = 0;
        _info.find('.bottom').append('<br>Accuracy: ' + accuracy + '%');
    } else {
        end();
    }
}

function check() {
    var input = _result.val();
    var correct = kt.table[0].reading;

    if (input.length <= correct.length) {
        if (wrong) {
            showTime(_task.find('p'), 'Wrong...', 1000);
        } else {
            for (var i = 0; i < input.length; i++) {
                if (input[i] != correct[i]) {
                    wrong = true;

                    tries++;
                }
            }
        }
    }

    if (input == correct) {
        _result.val('');
        showTime(_task.find('p'), 'Correct!', 1000);

        if (!wrong) {
            kt.removeFirst();
            matches++;
            tries++;
        } else {
            kt.moveFirst(3);
        }

        wrong = false;
    }

    update();
}

function skip() {
    _result.val('');
    showTime(_task.find('p'), '<jap>' + kt.table[0].character + '</jap> = ' + kt.table[0].reading, 2000);
    kt.moveFirst(3);
    tries++;
    update();
}

function checkMaxCharacters(max) {
    numberOfCharacters = parseInt(prompt('How many? Choose form 1 to ' + max + '.'));
    if (numberOfCharacters > max || numberOfCharacters < 1 || isNaN(numberOfCharacters))
        numberOfCharacters = max;
}

$(document).ready(function () {

    removeScreen('.start');
    removeScreen('.end');

    _info = $('.info');
    _result = $('.result');
    _task = $('.task');

    $('.start-button').click(function () {
        startButtonID = $(this).attr('id');

        switch (startButtonID) {
            case 'group1':
                checkMaxCharacters(3);
                start(0, numberOfCharacters);
                break;
        }
    });

    $('.start-over').click(function () {
        swapScreens('.prepare', '.end');
    });

    _result.keyup(function (e) {
        check();
    });

    $('.skip').click(function () {
        skip();
    });
});