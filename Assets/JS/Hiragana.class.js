'use strict';

/*************************************************
 HIRAGANA CLASS
 *************************************************/

function Hiragana(character, reading) {
    this.character = character;
    this.reading = reading;
}

/*************************************************
 HIRAGANATABLE CLASS
 *************************************************/

function HiraganaTable(from, number, slice) {
    slice = slice || false;
    this.table = [];
    if (slice) {
        this.fill(0, 71);
        this.shuffle();
        this.table = this.table.slice(0, number);
    }else{
        this.fill(from, number);
        this.shuffle();
    }
}

HiraganaTable.prototype.add = function (character, reading) {
    this.table.push(new Hiragana(character, reading));
};

HiraganaTable.prototype.fill = function (from, number) {
    var original = this;
    $.ajax({
        url: 'https://raw.githubusercontent.com/Alanian/nihongo/master/Data/hiragana.txt',
        async: false,
        success: function (data) {
            var lines = data.split('\n');
            from = (typeof from === 'undefined' || from > lines.length || from < 0) ? 0 : from;
            var len = (typeof number === 'undefined' || number > lines.length - from || number <= 0) ? lines.length : from + number;
            for (var i = from; i < len; i++) {
                var _split = lines[i].split(' ');
                original.add(_split[0], _split[1]);
            }
        }
    });
};

HiraganaTable.prototype.shuffle = function () {
    var temp, rand;
    for (var i = this.table.length; i; i--) {
        rand = Math.floor(Math.random() * i);
        temp = this.table[i - 1];
        this.table[i - 1] = this.table[rand];
        this.table[rand] = temp;
    }
};

HiraganaTable.prototype.removeFirst = function () {
    this.table.shift();
};

HiraganaTable.prototype.moveFirstToEnd = function () {
    this.table.push(this.table[0]);
    this.removeFirst();
};

HiraganaTable.prototype.moveFirst = function (index) {
    index++;
    if (this.table.length <= index) {
        this.moveFirstToEnd();
    } else {
        this.table.splice(index, 0, this.table[0]);
        this.removeFirst();
    }
};