/*************************************************
 HIRAGANA PROCESS
 *************************************************/

var startButtonID;
var ht;
var tries;
var matches;
var accuracy;
var wrong;

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
        end('<span class="jap-font">ひらがな</span>');
    }
}

function check() {
    var input = _result.val();
    var correct = ht.table[0].reading;
    console.log('check');

    if (input.length <= correct.length && !wrong) {
        for (var i = 0; i < input.length; i++) {
            if (input[i] != correct[i]) {
                wrong = true;
                showTime(_task.find('p'), 'Wrong...', 1000);
                tries++;
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
    console.log('skip');
    _result.val('');
    showTime(_task.find('p'), '<jap>' + ht.table[0].character + '</jap> = ' + ht.table[0].reading, 2000);
    ht.moveFirst(3);
    tries++;
    update();
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
                start(0, 46);
                break;
            case 'dakuten':
                start(46, 5);
                break;
            case 'gojuon-dakuten':
                start(0, 71);
                break;
            case 'yoon':
                start(71, 36);
                break;
            case 'sokuon':
                start(107, 20);
                break;
            case 'ultimate':
                start(0, 127);
            // $('#hiragana-first-number').find('button').click(function () {
            //     var val = $('#hiragana-first-number').find('input[type=number]').val();
            //     if (val > 0)
            //         start(0, val);
            // });
            //
            // $('#hiragana-random-number').find('button').click(function () {
            //     var val = $('#hiragana-random-number').find('input[type=number]').val();
            //     if (val > 0)
            //         start(0, val, true)
            // });
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

    // $('#hiragana-first-number').find('input').keyup(function (e) {
    //     if (e.keyCode == 13) {
    //         $('#hiragana-first-number').find('button').trigger('click');
    //     }
    // });
    //
    // $('#hiragana-random-number').find('input').keyup(function (e) {
    //     if (e.keyCode == 13) {
    //         $('#hiragana-random-number').find('button').trigger('click');
    //     }
    // });
});