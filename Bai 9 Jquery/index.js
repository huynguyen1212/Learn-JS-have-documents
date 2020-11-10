function tim() {
  var images = $("#menu img");
  for (let i = 0; i < images.length; i++) {
    var srcImg = $(images[i]).attr("src");
    $("#newMenu").html(srcImg);
  }
}
