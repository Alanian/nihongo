function kanjiToKana(text) {

    text = text.replace(/日本語/g, "にほんご");
    text = text.replace(/日本/g, "にほん");
    text = text.replace(/勉強/g, "べんきょう");
    text = text.replace(/時間/g, "じかん");
    text = text.replace(/私/g, "わたし");
    text = text.replace(/人/g, "ひと");

    text = text.replace(/行/g, "い");

    return text;
}