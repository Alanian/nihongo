<?php require '../includes/template_top.php' ?>

    <h1>Japanisch lernen mit Nipponjaku</h1>
    <h2>Image Sprites</h2>
    <p>
        The practice of spriting images within CSS includes using one background image across multiple elements. The
        goal here is to cut down the number of HTTP requests made by using multiple background images.
    </p>
    <p>
        To create a sprite take a handful of background images, ones that are commonly used, and arrange them into one
        single image. Then using CSS add the sprite as a background image to an element, and use the background-position
        property to display the correct background image.
    </p>
    <p>
        Think of the background image sliding around behind elements, only to expose the proper background image on a
        given element. For example, if an element is 16 pixels wide by 16 pixels tall it can only expose a background
        image of 16 pixels by 16 pixels, with the rest of the background image being hidden.
    </p>
    <h2><jap>翌要</jap></h2>
    <p>
        <jap>
            日本をめ世界カ国・地域（平成年）で実しており、日本語を母語としない人を対象とした日本語の試験としては最も受験者の多い試験である。だれでも受験できる。
            日本をめ世界カ国・地域（平成年）で実しており、日本語を母語としない人を対象とした日本語の試験としては最も受験者の多い試験である。だれでも受験できる。
            日本をめ世界カ国・地域（平成年）で実しており、日本語を母語としない人を対象とした日本語の試験としては最も受験者の多い試験である。だれでも受験できる。
        </jap>
    </p>
<?php require '../includes/template_bottom.php' ?>