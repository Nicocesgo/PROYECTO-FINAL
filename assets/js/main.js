$(document).ready(function() {
  $(".featured").attr("src", "assets/img/sr3.jpg")

  $(".thumb").click(function() {
    source = $(this).attr("src");
    $(".featured").attr("src", source);
  })

  $(".boton_enviar").click(function(){
    var a = $(".form_msn").append('<h3>Gracias por tu mensaje<h3>');
    a.prepend('<h3>Registro Exitoso</h3>');
  })

});
