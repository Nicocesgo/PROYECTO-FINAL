$(document).ready(function() {
  $(".featured").attr("src", "assets/img/sr3.jpg")

  $(".thumb").click(function() {
    source = $(this).attr("src");
    $(".featured").attr("src", source);
  })

});
