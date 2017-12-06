function kanjiToKana(text) {

    text = text.replace(/日本語/g, "にほんご");
    text = text.replace(/日本/g, "にほん");
    text = text.replace(/勉強/g, "べんきょう");
    text = text.replace(/時間/g, "じかん");
    text = text.replace(/私/g, "わたし");
    text = text.replace(/人/g, "ひと");

    text = text.replace(/行く/g, "いく");
    text = text.replace(/来る/g, "くる");
    text = text.replace(/帰る/g, "かえる");

    return text;
}