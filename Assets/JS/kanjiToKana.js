function kanjiToKana(text) {

    var words = [
        ["日本語", "にほんご"], ["日本", "にほん"], ["勉強", "べんきょう"], ["時間", "じかん"], ["私", "わたし"], ["人", "ひと"],
        ["行く","いく" ], ["来る", "くる"], ["帰る", "かえる"], ["暗い", "くらい"], ["便利", "べんり"], ["的", "てき"],
        ["理解", "りかい"], ["解る", "わかる"], ["敗北", "はいぼく"]
    ];

    for (var i = 0; i < words.length; i++) {
        var regex = new RegExp(words[i][0], 'g');
        text = text.replace(regex, words[i][1]);
    }

    return text;
}