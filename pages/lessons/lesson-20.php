<h1>Lesson <?= $_GET['lesson']; ?> - Big Test Hitotsu</h1>
<p>
    I'm glad you managed to get up to here. This isn't actually a lesson and you can skip it if you wish. However, I
    strongly recommend you to accomplish this test since it's a requirement for further lessons and concepts. This test
    helps you to recover the whole section if you take a break from learning. I personally do such tests weekly to keep
    my brain in shape.
</p>
<form class="big-test" action="big-test-check/hitotsu.php" method="post">
    <div class="test-block">
        <h3>Spell out the words</h3>

        <div class="test-element">
            <span><jap>まこと<meaning>truth</meaning></jap></span>
            <input value="ma ko to" disabled>
        </div>

        <div class="test-element">
            <span><jap>うらやましい<meaning>be envious</meaning></jap></span>
            <input name="spelling[]">
        </div>

        <div class="test-element">
            <span><jap>りゅうしゃん<meaning>a fictional word</meaning></jap></span>
            <input name="spelling[]">
        </div>

        <div class="test-element">
            <span><jap>ちょっこさ<meaning>a fictional word</meaning></jap></span>
            <input name="spelling[]">
        </div>
    </div>

    <div class="test-block">
        <h3>Determine the verb group</h3>

        <div class="test-element">
            <span><jap>わらう<meaning>to laugh; to smile</meaning></jap></span>
            <select name="verb_group[]"><option></option><option>suru</option><option>kuru</option><option>lvl1</option><option>lvl5</option></select>
        </div>

        <div class="test-element">
            <span><jap>あける<meaning>to open</meaning></jap></span>
            <select name="verb_group[]"><option></option><option>suru</option><option>kuru</option><option>lvl1</option><option>lvl5</option></select>
        </div>

        <div class="test-element">
            <span><jap>よろこぶ<meaning>to be pleased; to enjoy</meaning></jap></span>
            <select name="verb_group[]"><option></option><option>suru</option><option>kuru</option><option>lvl1</option><option>lvl5</option></select>
        </div>

        <div class="test-element">
            <span><jap>くる<meaning>to come</meaning></jap></span>
            <select name="verb_group[]"><option></option><option>suru</option><option>kuru</option><option>lvl1</option><option>lvl5</option></select>
        </div>

        <div class="test-element">
            <span><jap>おちる<meaning>to fall</meaning></jap></span>
            <select name="verb_group[]"><option></option><option>suru</option><option>kuru</option><option>lvl1</option><option>lvl5</option></select>
        </div>

        <div class="test-element">
            <span><jap>なる<meaning>to become</meaning></jap></span>
            <select name="verb_group[]"><option></option><option>suru</option><option>kuru</option><option>lvl1</option><option>lvl5</option></select>
        </div>

        <div class="test-element">
            <span><jap>する<meaning>to do; to make</meaning></jap></span>
            <select name="verb_group[]"><option></option><option>suru</option><option>kuru</option><option>lvl1</option><option>lvl5</option></select>
        </div>

        <div class="test-element">
            <span><jap>いきのこる<meaning>to survive</meaning></jap></span>
            <select name="verb_group[]"><option></option><option>suru</option><option>kuru</option><option>lvl1</option><option>lvl5</option></select>
        </div>
    </div>

    <div class="test-block">
        <h3>Insert the <em>Ren'yōkei</em> of the respective verb</h3>

        <div class="test-element">
            <span><jap>やく<meaning>to bake; to grill</meaning></jap></span>
            <input value="yaki" disabled>
        </div>

        <div class="test-element">
            <span><jap>できる<meaning>to be able to do</meaning></jap></span>
            <input name="ryk[]">
        </div>

        <div class="test-element">
            <span><jap>くる<meaning>to come</meaning></jap></span>
            <input name="ryk[]">
        </div>

        <div class="test-element">
            <span><jap>うたう<meaning>to sing</meaning></jap></span>
            <input name="ryk[]">
        </div>
    </div>

    <div class="test-block">
        <h3>Insert the <em>masu</em>-form of the respective verb</h3>

        <div class="test-element">
            <span><jap>すすむ<meaning>to go forward</meaning></jap></span>
            <input value="susumimasu" disabled>
        </div>

        <div class="test-element">
            <span><jap>もつ<meaning>to hold; to own</meaning></jap></span>
            <input name="masu[]">
        </div>

        <div class="test-element">
            <span><jap>いじめる<meaning>to bully</meaning></jap></span>
            <input name="masu[]">
        </div>

        <div class="test-element">
            <span><jap>する<meaning>to do; to make</meaning></jap></span>
            <input name="masu[]">
        </div>
    </div>

    <div class="test-block">
        <h3>Translate following sentences using the <em>masu</em>-form (ignore the subject)</h3>

        <div class="test-element double">
            <span>They came. <jap>【くる】<meaning>to come</meaning></jap></span>
            <input value="kimashita" disabled>
        </div>

        <div class="test-element double">
            <span>You don't laugh.<jap>【わらう】<meaning>to laugh</meaning></jap></span>
            <input name="masu_forms[]">
        </div>

        <div class="test-element double">
            <span>She didn't go.<jap>【くる】<meaning>to come</meaning></jap></span>
            <input name="masu_forms[]">
        </div>

        <div class="test-element double">
            <span>I had fun.<jap>【よろこぶ】<meaning>to be pleased; to enjoy</meaning></jap></span>
            <input name="masu_forms[]">
        </div>

        <div class="test-element double">
            <span>My dad didn't survive.<jap>【いきのこる】<meaning>to survive</meaning></jap></span>
            <input name="masu_forms[]">
        </div>

        <div class="test-element double">
            <span>The wall will fall.<jap>【おちる】<meaning>to fall</meaning></jap></span>
            <input name="masu_forms[]">
        </div>
    </div>

    <div class="test-block">
        <h3>Determine the verb group</h3>

        <div class="test-element">
            <span><jap>わらう<meaning>to laugh; to smile</meaning></jap></span>
            <select name="verb_group[]"><option></option><option>suru</option><option>kuru</option><option>lvl1</option><option>lvl5</option></select>
        </div>

        <div class="test-element">
            <span><jap>あける<meaning>to open</meaning></jap></span>
            <select name="verb_group[]"><option></option><option>suru</option><option>kuru</option><option>lvl1</option><option>lvl5</option></select>
        </div>

        <div class="test-element">
            <span><jap>よろこぶ<meaning>to be pleased; to enjoy</meaning></jap></span>
            <select name="verb_group[]"><option></option><option>suru</option><option>kuru</option><option>lvl1</option><option>lvl5</option></select>
        </div>

        <div class="test-element">
            <span><jap>くる<meaning>to come</meaning></jap></span>
            <select name="verb_group[]"><option></option><option>suru</option><option>kuru</option><option>lvl1</option><option>lvl5</option></select>
        </div>

        <div class="test-element">
            <span><jap>おちる<meaning>to fall</meaning></jap></span>
            <select name="verb_group[]"><option></option><option>suru</option><option>kuru</option><option>lvl1</option><option>lvl5</option></select>
        </div>

        <div class="test-element">
            <span><jap>なる<meaning>to become</meaning></jap></span>
            <select name="verb_group[]"><option></option><option>suru</option><option>kuru</option><option>lvl1</option><option>lvl5</option></select>
        </div>

        <div class="test-element">
            <span><jap>する<meaning>to do; to make</meaning></jap></span>
            <select name="verb_group[]"><option></option><option>suru</option><option>kuru</option><option>lvl1</option><option>lvl5</option></select>
        </div>

        <div class="test-element">
            <span><jap>いきのこる<meaning>to survive</meaning></jap></span>
            <select name="verb_group[]"><option></option><option>suru</option><option>kuru</option><option>lvl1</option><option>lvl5</option></select>
        </div>
    </div>

</form>

partikel o
partikel ga
partikel
partikel no

sentence construction