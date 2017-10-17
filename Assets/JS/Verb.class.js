'use strict';

/*************************************************
 VERB CLASS
 *************************************************/

function Verb(group, stem, ending, meaning) {
    this.group = group;
    this.stem = stem;
    this.ending = ending;
    this.meaning = meaning;
}

/***** Main Forms *****/

Verb.prototype.getMizenkei = function () {
    return this.getMainForm(['shi', 'ko', '', 'ra', 'wa', 'ta', 'ka', 'ga', 'sa', 'na', 'ma', 'ba']);
};

Verb.prototype.getRenyoukei = function () {
    return this.getMainForm(['shi', 'ki', '', 'ri', 'i', 'chi', 'ki', 'gi', 'shi', 'ni', 'mi', 'bi']);
};

Verb.prototype.getTeForm = function () {
    if (this.stem + this.ending == 'iku')
        return 'itte';
    else
        return this.getMainForm(['shite', 'kite', 'te', 'tte', 'tte', 'tte', 'ite', 'ide', 'shite', 'nde', 'nde', 'nde']);
};

Verb.prototype.getMainForm = function (groups) {
    switch (this.group) {
        case 'suru':
            return groups[0];
        case 'kuru':
            return groups[1];
        case 'v1':
            return this.stem + groups[2];
        case 'v5':
            switch (this.ending) {
                case 'ru':
                    return this.stem + groups[3];
                case 'u':
                    return this.stem + groups[4];
                case 'tsu':
                    return this.stem + groups[5];
                case 'ku':
                    return this.stem + groups[6];
                case 'gu':
                    return this.stem + groups[7];
                case 'su':
                    return this.stem + groups[8];
                case 'nu':
                    return this.stem + groups[9];
                case 'mu':
                    return this.stem + groups[10];
                case 'bu':
                    return this.stem + groups[11];
            }
    }
};

/***** Extended Forms *****/

Verb.prototype.getNaiForm = function () {
    return this.getMizenkei() + 'nai';
};

Verb.prototype.getMasuForm = function () {
    return this.getRenyoukei() + 'masu';
};

Verb.prototype.getTaiForm = function () {
    return this.getRenyoukei() + 'tai';
};

/*************************************************
 VERBTABLE CLASS
 *************************************************/

function VerbTable() {
    this.table = [];
    this.fill();
    this.shuffle();
}

VerbTable.prototype.add = function (group, stem, ending, meaning) {
    this.table.push(new Verb(group, stem, ending, meaning));
};

VerbTable.prototype.fill = function (number) {
    var original = this;
    $.ajax({
        url: 'https://raw.githubusercontent.com/Alanian/nihongo/master/Assets/Data/verbs.txt',
        async: false,
        success: function (data) {
            var lines = data.split('\n');
            var len = (typeof number === 'undefined' || number > lines.length || number < 1) ? lines.length : number;
            for (var i = 0; i < len; i++) {
                var split = lines[i].split(';');
                original.add(split[0], split[1], split[2], split[3]);
            }
        }
    });
};

VerbTable.prototype.shuffle = function () {
    var temp, rand;
    for (var i = this.table.length; i; i--) {
        rand = Math.floor(Math.random() * i);
        temp = this.table[i - 1];
        this.table[i - 1] = this.table[rand];
        this.table[rand] = temp;
    }
};

VerbTable.prototype.removeFirst = function () {
    this.table.shift();
};

VerbTable.prototype.moveFirstToEnd = function () {
    this.table.push(this.table[0]);
    this.removeFirst();
};

VerbTable.prototype.moveFirst = function (index) {
    index++;
    if (this.table.length <= index) {
        this.moveFirstToEnd();
    } else {
        this.table.splice(index, 0, this.table[0]);
        this.removeFirst();
    }
};