'use strict';

/*************************************************
 HIRAGANA PROCESS
 *************************************************/

// values
var ht;
var tries;
var matches;
var accuracy;
var isWrong;
var startButtonID;
var numberOfCharacters;

// html blocks
var _info;
var _result;
var _task;
var _progress;

/*************************************************
 START from start index to number of characters
 *************************************************/
function start(from, number) {
    // creating kanji table and fill
    ht = new HiraganaTable(from, number);

    tries = 0;
    matches = 0;

    // hide prepare block and show start block
    swapScreens('.start', '.prepare');

    // show info once
    _info.html('Please insert the correct reading of the Hiragana in the input field on the right.');

    clean();

    update();
}

/*************************************************
 UPDATE renders updated blocks and checks for end
 *************************************************/
function update() {
    // kanji table not empty
    if (ht.table.length) {
        accuracy = Math.floor(matches / tries * 100);

        // shows new character
        _task.html('<jap>' + ht.table[0].character + '</jap>');

        _progress.html('Remaining: ' + ht.table.length);

        // accuracy not set yet
        if (!accuracy) accuracy = 0;

        _progress.append('<br>Accuracy: ' + accuracy + '%');
    } else {
        endHiragana();
    }
}

/*************************************************
 CHECK checks input and renders result
 *************************************************/
function check() {
    // inputted value
    var input = _result.val();

    // gets correct value
    var correct = ht.table[0].reading;

    if (input.length <= correct.length) {
        // checks every letter
        for (var i = 0; i < input.length; i++) {
            if (input[i] !== correct[i]) {
                _info.html('<p>Wrong...</p>');
                if (!isWrong) tries++;
                isWrong = true;
            } else {
                _info.html('<p>Right direction...</p>');
            }
        }
    }

    if (input === correct) {
        clean();
        _info.html('<p>Correct!<p>');

        if (!isWrong) {
            ht.removeFirst();
            matches++;
            tries++;
        } else {
            ht.moveFirst(3);
        }

        isWrong = false;
    }

    update();
}

/*************************************************
 SKIP renders correct result
 *************************************************/
function skip() {
    clean();

    _info.html('<jap>' + ht.table[0].character + '</jap><p><b>Reading</b>: <roma>' + ht.table[0].reading + '</roma></p>');

    // moves incorrect task for 5 rounds
    ht.moveFirst(3);

    tries++;

    update();
}

/*************************************************
 CLEAN cleans the input field
 *************************************************/
function clean() {
    _result.val('');
}

function checkMaxCharacters(max) {
    numberOfCharacters = parseInt(prompt('How many? Choose form 1 to ' + max + '.'));
    if (numberOfCharacters > max || numberOfCharacters < 1 || isNaN(numberOfCharacters))
        numberOfCharacters = max;
}

/*************************************************
 MAIN PROCESS
 *************************************************/
$(document).ready(function () {
    //hides unavailable blocks
    removeScreen('.start');
    removeScreen('.end');

    // sets blocks
    _info = $('.info');
    _result = $('.result');
    _task = $('.task');
    _progress = $('.progress');

    // triggers by clicking an option
    $('.start-button').click(function () {
        // gets id of the option clicked
        startButtonID = $(this).attr('id');

        // starts training with appropriate slice
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

    // hides training and shows options
    $('.start-over').click(function () {
        swapScreens('.prepare', '.end');
    });

    // triggers checking input by pressing a keyboard button
    _result.keyup(function () {
        check();
    });

    // triggers skipping character by clicking the "I have no idea" button
    $('.skip').click(function () {
        skip();
    });
});