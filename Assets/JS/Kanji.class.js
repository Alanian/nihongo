'use strict';

/*************************************************
 KANJI CLASS
 *************************************************/

function Kanji(character, reading, meanings) {
    this.character = character;
    this.reading = reading;
    this.meanings = meanings;
}

/*************************************************
 KANJITABLE CLASS
 *************************************************/

function KanjiTable(from, number) {
    this.table = [];
    this.fill(from, number);
    this.shuffle();
}

KanjiTable.prototype.add = function (characters, reading, meanings) {
    this.table.push(new Kanji(characters, reading, meanings));
};

KanjiTable.prototype.fill = function (from, number) {
    var original = this;
    $.ajax({
        url: 'https://raw.githubusercontent.com/Alanian/nihongo/master/Assets/Data/kanji.txt',
        async: false,
        success: function (data) {
            var lines = data.split('\n');
            from = (typeof from === 'undefined' || from > lines.length || from < 0) ? 0 : from;
            var len = (typeof number === 'undefined' || number > lines.length - from || number <= 0) ? lines.length : from + number;
            for (var i = from; i < len; i++) {
                var _split = lines[i].split(';');
                original.add(_split[0], _split[1], _split[2]);
            }
        }
    });
};

KanjiTable.prototype.shuffle = function () {
    var temp, rand;
    for (var i = this.table.length; i; i--) {
        rand = Math.floor(Math.random() * i);
        temp = this.table[i - 1];
        this.table[i - 1] = this.table[rand];
        this.table[rand] = temp;
    }
};

KanjiTable.prototype.removeFirst = function () {
    this.table.shift();
};

KanjiTable.prototype.moveFirstToEnd = function () {
    this.table.push(this.table[0]);
    this.removeFirst();
};

KanjiTable.prototype.moveFirst = function (index) {
    index++;
    if (this.table.length <= index) {
        this.moveFirstToEnd();
    } else {
        this.table.splice(index, 0, this.table[0]);
        this.removeFirst();
    }
};