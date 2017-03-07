<!DOCTYPE html>
<html lang="de">
<?php require '../includes/head.html' ?>
<script>
  $(document).ready(function(){
    $.ajax({
      url : "../data/hiragana.txt",
      dataType: "text",
      success : function (data) {
        var lines = data.split("\n");
        for (var i = 0, len = lines.length; i < len; i++) {
          var split = lines[i].split(" ");                                 
          var string = "<p>"+ split[0] + " <=> "+ split[1] + "</p>";
          $(".container").append(string);
        }
      }
    });
  });      
</script>
<body>
<div class="container">
</div>
</body>
</html>
