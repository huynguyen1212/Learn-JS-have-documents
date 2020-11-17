function tim() {
  var images = $("#menu img");
  var arr = [];
  for (let i = 0; i < images.length; i++) {
    var srcImg = $(images[i]).attr("src");
    arr.push(srcImg);
  }
  $("#newMenu").html(arr);
}
