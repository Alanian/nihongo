'use strict';

/*************************************************
 HIRAGANA PROCESS
 *************************************************/

var startButtonID;
var ht;
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
    ht = new HiraganaTable(from, number, slice);
    tries = 0;
    matches = 0;
    swapScreens('.start', '.prepare');
    _info.find('.top').html('Please insert the correct reading of the Hiragana in the input field on the right.');
    update();
}

function update() {
    if (ht.table.length) {
        accuracy = Math.floor(matches / tries * 100);
        _task.children('jap').html(ht.table[0].character);
        _info.find('.bottom').html('Remaining: ' + ht.table.length);
        if (!accuracy)
            accuracy = 0;
        _info.find('.bottom').append('<br>Accuracy: ' + accuracy + '%');
    } else {
        end();
    }
}

function check() {
    var input = _result.val();
    var correct = ht.table[0].reading;

    if(input.length <= correct.length){
        if(wrong){
            showTime(_task.find('p'), 'Wrong...', 1000);
        }else{
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
            ht.removeFirst();
            matches++;
            tries++;
        } else {
            ht.moveFirst(3);
        }

        wrong = false;
    }

    update();
}

function skip() {
    _result.val('');
    showTime(_task.find('p'), '<jap>' + ht.table[0].character + '</jap> = ' + ht.table[0].reading, 2000);
    ht.moveFirst(3);
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
            case 'gojuon':
                checkMaxCharacters(46);
                start(0, numberOfCharacters);
                break;
            case 'dakuten':
                checkMaxCharacters(25);
                start(46, numberOfCharacters);
                break;
            case 'gojuon-dakuten':
                numberOfCharacters = 71;
                start(0, numberOfCharacters);
                break;
            case 'yoon':
                numberOfCharacters = 36;
                start(71, numberOfCharacters);
                break;
            case 'sokuon':
                numberOfCharacters = 20;
                start(107, numberOfCharacters);
                break;
            case 'ultimate':
                numberOfCharacters = 127;
                start(0, numberOfCharacters);
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