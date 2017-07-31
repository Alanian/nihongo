function kanaToRomaji(text, isParticle) {

    if (isParticle) {
        text = text.replace(/は/g, "wa");
        text = text.replace(/へ/g, "e");
        text = text.replace(/を/g, "o");
        return text;
    }

    text = text.replace(/きゃ/g, "kya");
    text = text.replace(/キャ/g, "kya");
    text = text.replace(/きゅ/g, "kyu");
    text = text.replace(/キュ/g, "kyu");
    text = text.replace(/きょ/g, "kyo");
    text = text.replace(/キョ/g, "kyo");
    text = text.replace(/しゃ/g, "sha");
    text = text.replace(/シャ/g, "sha");
    text = text.replace(/しゅ/g, "shu");
    text = text.replace(/シュ/g, "shu");
    text = text.replace(/しょ/g, "sho");
    text = text.replace(/ショ/g, "sho");
    text = text.replace(/ちゃ/g, "cha");
    text = text.replace(/チャ/g, "cha");
    text = text.replace(/ちゅ/g, "chu");
    text = text.replace(/チュ/g, "chu");
    text = text.replace(/ちょ/g, "cho");
    text = text.replace(/チョ/g, "cho");
    text = text.replace(/にゃ/g, "nya");
    text = text.replace(/ニャ/g, "nya");
    text = text.replace(/にゅ/g, "nyu");
    text = text.replace(/ニュ/g, "nyu");
    text = text.replace(/にょ/g, "nyo");
    text = text.replace(/ニョ/g, "nyo");
    text = text.replace(/ひゃ/g, "hya");
    text = text.replace(/ヒャ/g, "hya");
    text = text.replace(/ひゅ/g, "hyu");
    text = text.replace(/ヒュ/g, "hyu");
    text = text.replace(/ひょ/g, "hyo");
    text = text.replace(/ヒョ/g, "hyo");
    text = text.replace(/みゃ/g, "mya");
    text = text.replace(/ミャ/g, "mya");
    text = text.replace(/みゅ/g, "myu");
    text = text.replace(/ミュ/g, "myu");
    text = text.replace(/みょ/g, "myo");
    text = text.replace(/ミョ/g, "myo");
    text = text.replace(/りゃ/g, "rya");
    text = text.replace(/リャ/g, "rya");
    text = text.replace(/りゅ/g, "ryu");
    text = text.replace(/リュ/g, "ryu");
    text = text.replace(/りょ/g, "ryo");
    text = text.replace(/リョ/g, "ryo");

    text = text.replace(/ぎゃ/g, "gya");
    text = text.replace(/ギャ/g, "gya");
    text = text.replace(/ぎゅ/g, "gyu");
    text = text.replace(/ギュ/g, "gyu");
    text = text.replace(/ぎょ/g, "gyo");
    text = text.replace(/ギョ/g, "gyo");
    text = text.replace(/じゃ/g, "ja");
    text = text.replace(/ジャ/g, "ja");
    text = text.replace(/じゅ/g, "ju");
    text = text.replace(/ジュ/g, "ju");
    text = text.replace(/じょ/g, "jo");
    text = text.replace(/ジョ/g, "jo");
    text = text.replace(/ぢゃ/g, "ja");
    text = text.replace(/ヂャ/g, "ja");
    text = text.replace(/ぢゅ/g, "ju");
    text = text.replace(/ヂュ/g, "ju");
    text = text.replace(/ぢょ/g, "jo");
    text = text.replace(/ヂョ/g, "jo");
    text = text.replace(/びゃ/g, "bya");
    text = text.replace(/ビャ/g, "bya");
    text = text.replace(/びゅ/g, "byu");
    text = text.replace(/ビュ/g, "byu");
    text = text.replace(/びょ/g, "byo");
    text = text.replace(/ビョ/g, "byo");
    text = text.replace(/ぴゃ/g, "pya");
    text = text.replace(/ピャ/g, "pya");
    text = text.replace(/ぴゅ/g, "pyu");
    text = text.replace(/ピュ/g, "pyu");
    text = text.replace(/ぴょ/g, "pyo");
    text = text.replace(/ピョ/g, "pyo");

    text = text.replace(/あ/g, "a");
    text = text.replace(/ア/g, "a");
    text = text.replace(/い/g, "i");
    text = text.replace(/イ/g, "i");
    text = text.replace(/う/g, "u");
    text = text.replace(/ウ/g, "u");
    text = text.replace(/え/g, "e");
    text = text.replace(/エ/g, "e");
    text = text.replace(/お/g, "o");
    text = text.replace(/オ/g, "o");
    text = text.replace(/か/g, "ka");
    text = text.replace(/カ/g, "ka");
    text = text.replace(/き/g, "ki");
    text = text.replace(/キ/g, "ki");
    text = text.replace(/く/g, "ku");
    text = text.replace(/ク/g, "ku");
    text = text.replace(/け/g, "ke");
    text = text.replace(/ケ/g, "ke");
    text = text.replace(/こ/g, "ko");
    text = text.replace(/コ/g, "ko");
    text = text.replace(/さ/g, "sa");
    text = text.replace(/サ/g, "sa");
    text = text.replace(/し/g, "shi");
    text = text.replace(/シ/g, "shi");
    text = text.replace(/す/g, "su");
    text = text.replace(/ス/g, "su");
    text = text.replace(/せ/g, "se");
    text = text.replace(/セ/g, "se");
    text = text.replace(/ソ/g, "so");
    text = text.replace(/そ/g, "so");
    text = text.replace(/た/g, "ta");
    text = text.replace(/タ/g, "ta");
    text = text.replace(/ち/g, "chi");
    text = text.replace(/チ/g, "chi");
    text = text.replace(/つ/g, "tsu");
    text = text.replace(/ツ/g, "tsu");
    text = text.replace(/て/g, "te");
    text = text.replace(/テ/g, "te");
    text = text.replace(/と/g, "to");
    text = text.replace(/ト/g, "to");
    text = text.replace(/な/g, "na");
    text = text.replace(/ナ/g, "na");
    text = text.replace(/に/g, "ni");
    text = text.replace(/ニ/g, "ni");
    text = text.replace(/ヌ/g, "nu");
    text = text.replace(/ぬ/g, "nu");
    text = text.replace(/ね/g, "ne");
    text = text.replace(/ネ/g, "ne");
    text = text.replace(/の/g, "no");
    text = text.replace(/ノ/g, "no");
    text = text.replace(/は/g, "ha");
    text = text.replace(/ハ/g, "ha");
    text = text.replace(/ひ/g, "hi");
    text = text.replace(/ヒ/g, "hi");
    text = text.replace(/ふ/g, "fu");
    text = text.replace(/フ/g, "fu");
    text = text.replace(/へ/g, "he");
    text = text.replace(/ヘ/g, "he");
    text = text.replace(/ほ/g, "ho");
    text = text.replace(/ホ/g, "ho");
    text = text.replace(/ま/g, "ma");
    text = text.replace(/マ/g, "ma");
    text = text.replace(/み/g, "mi");
    text = text.replace(/ミ/g, "mi");
    text = text.replace(/む/g, "mu");
    text = text.replace(/ム/g, "mu");
    text = text.replace(/め/g, "me");
    text = text.replace(/メ/g, "me");
    text = text.replace(/も/g, "mo");
    text = text.replace(/モ/g, "mo");
    text = text.replace(/や/g, "ya");
    text = text.replace(/ヤ/g, "ya");
    text = text.replace(/ゆ/g, "yu");
    text = text.replace(/ユ/g, "yu");
    text = text.replace(/よ/g, "yo");
    text = text.replace(/ヨ/g, "yo");
    text = text.replace(/ら/g, "ra");
    text = text.replace(/ラ/g, "ra");
    text = text.replace(/り/g, "ri");
    text = text.replace(/リ/g, "ri");
    text = text.replace(/る/g, "ru");
    text = text.replace(/ル/g, "ru");
    text = text.replace(/れ/g, "re");
    text = text.replace(/レ/g, "re");
    text = text.replace(/ろ/g, "ro");
    text = text.replace(/ロ/g, "ro");
    text = text.replace(/わ/g, "wa");
    text = text.replace(/ワ/g, "wa");
    text = text.replace(/を/g, "wo");
    text = text.replace(/ヲ/g, "wo");
    text = text.replace(/ん/g, "n");
    text = text.replace(/ン/g, "n");

    text = text.replace(/が/g, "ga");
    text = text.replace(/ガ/g, "ga");
    text = text.replace(/ぎ/g, "gi");
    text = text.replace(/ギ/g, "gi");
    text = text.replace(/ぐ/g, "gu");
    text = text.replace(/グ/g, "gu");
    text = text.replace(/げ/g, "ge");
    text = text.replace(/ゲ/g, "ge");
    text = text.replace(/ご/g, "go");
    text = text.replace(/ゴ/g, "go");
    text = text.replace(/ざ/g, "za");
    text = text.replace(/ザ/g, "za");
    text = text.replace(/じ/g, "ji");
    text = text.replace(/ジ/g, "ji");
    text = text.replace(/ず/g, "zu");
    text = text.replace(/ズ/g, "zu");
    text = text.replace(/ぜ/g, "ze");
    text = text.replace(/ゼ/g, "ze");
    text = text.replace(/ぞ/g, "zo");
    text = text.replace(/ゾ/g, "zo");
    text = text.replace(/だ/g, "da");
    text = text.replace(/ダ/g, "da");
    text = text.replace(/ぢ/g, "ji");
    text = text.replace(/ヂ/g, "ji");
    text = text.replace(/づ/g, "zu");
    text = text.replace(/ヅ/g, "zu");
    text = text.replace(/で/g, "de");
    text = text.replace(/デ/g, "de");
    text = text.replace(/ど/g, "do");
    text = text.replace(/ド/g, "do");
    text = text.replace(/ば/g, "ba");
    text = text.replace(/バ/g, "ba");
    text = text.replace(/び/g, "bi");
    text = text.replace(/ビ/g, "bi");
    text = text.replace(/ぶ/g, "bu");
    text = text.replace(/ブ/g, "bu");
    text = text.replace(/べ/g, "be");
    text = text.replace(/ベ/g, "be");
    text = text.replace(/ぼ/g, "bo");
    text = text.replace(/ボ/g, "bo");
    text = text.replace(/ぱ/g, "pa");
    text = text.replace(/パ/g, "pa");
    text = text.replace(/ぴ/g, "pi");
    text = text.replace(/ピ/g, "pi");
    text = text.replace(/ぷ/g, "pu");
    text = text.replace(/プ/g, "pu");
    text = text.replace(/ぺ/g, "pe");
    text = text.replace(/ペ/g, "pe");
    text = text.replace(/ぽ/g, "po");
    text = text.replace(/ポ/g, "po");

    text = text.replace(/ゃ/g, "ya");
    text = text.replace(/ャ/g, "ya");
    text = text.replace(/ゅ/g, "yu");
    text = text.replace(/ュ/g, "yu");
    text = text.replace(/ょ/g, "yo");
    text = text.replace(/ョ/g, "yo");

    text = text.replace(/。/g, ".");
    text = text.replace(/、/g, ",");
    text = text.replace(/「/g, "“");
    text = text.replace(/」/g, "”");
    text = text.replace("　", " ");

    for (var i = 0; i < text.length; i++) {
        if (text.charAt(i) == "ー") {
            text = text.replace("ー", text.charAt(i - 1));
        } else if (text.charAt(i) == "っ" || text.charAt(i) == "ッ") {
            text = text.charAt(i + 1) == '<' ? text.replace("っ", "tsu") : text.replace("っ", text.charAt(i + 1));
            text = text.charAt(i + 1) == '<' ? text.replace("ッ", "tsu") : text.replace("ッ", text.charAt(i + 1));
        }
    }

    return text;
}