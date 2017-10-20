'use strict';

/*************************************************
 KANJI PROCESS
 *************************************************/

// values
var kt;
var tries;
var matches;
var accuracy;
var isWrong;
var startButtonID;

// html blocks
var _description;
var _result;
var _task;
var _progress;

/*************************************************
 START from start index to number of characters
 *************************************************/
function start(from, number) {
    // creating kanji table and fill
    kt = new KanjiTable(from, number);

    tries = 0;
    matches = 0;

    // hide prepare block and show start block
    swapScreens('.start', '.prepare');

    // show info once
    _description.html('Please insert the correct reading of the Kanji (in Hiragana) in the input field on the right.');

    clean();

    update();
}

/*************************************************
 UPDATE renders updated blocks and checks for end
 *************************************************/
function update() {
    // kanji table not empty
    if (kt.table.length) {
        accuracy = Math.floor(matches / tries * 100);

        // shows new character
        _task.html('<jap>' + kt.table[0].character + '</jap>');

        _progress.html('Remaining: ' + kt.table.length);

        // accuracy not set yet
        if (!accuracy) accuracy = 0;

        _progress.append('<br>Accuracy: ' + accuracy + '%');
    } else {
        end();
    }
}

/*************************************************
 CHECK checks input and renders result
 *************************************************/
function check() {
    // inputted value
    var input = _result.val();

    // gets correct value
    var correct = kt.table[0].reading;

    if (input.length <= correct.length) {
        // checks every letter
        for (var i = 0; i < input.length; i++) {
            if (input[i] !== correct[i]) {
                _description.html('<p>Wrong...</p>');
                if (!isWrong) tries++;
                isWrong = true;
            } else {
                _description.html('<p>Right direction...</p>');
            }
        }
    }

    if (input === correct) {
        clean();
        _description.html('<jap>' + kt.table[0].character + '</jap><p><b>Meaning</b>: ' + kt.table[0].meanings + '</p>');

        if (!isWrong) {
            kt.removeFirst();
            matches++;
            tries++;
        } else {
            kt.moveFirst(5);
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

    _description.html('<jap>' + kt.table[0].character + '</jap><p><b>Reading</b>: <roma>' + kt.table[0].reading + '</roma></p>');

    // moves incorrect task for 5 rounds
    kt.moveFirst(5);

    tries++;

    update();
}

/*************************************************
 CLEAN cleans the input field
 *************************************************/
function clean() {
    _result.val('');
}

/*************************************************
 MAIN PROCESS
 *************************************************/
$(document).ready(function () {
    //hides unavailable blocks
    removeScreen('.start');
    removeScreen('.end');

    // sets blocks
    _description = $('.description');
    _result = $('.result');
    _task = $('.task');
    _progress = $('.progress');

    // triggers by clicking an option
    $('.start-button').click(function () {
        // gets id of the option clicked
        startButtonID = $(this).attr('id');

        // starts training with appropriate slice
        switch (startButtonID) {
            case 'group1':
                start(0, 20);
                break;
            case 'group2':
                start(21, 20);
                break;
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