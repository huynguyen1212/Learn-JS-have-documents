$(document).ready(function () {
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      $("#all").append("<div class='x'></div>");
    }
  }
  $(".x").mouseover(function () {
    $(this).css("background", "orange");
  });
  $(".x").mouseout(function () {
    $(this).css("background", "");
  });
  var a = 0;
  $(".x").click(function () {
    if ($(this).html() == "") {
      a++;
      if (a % 2 == 0) {
        $(this).css("color", "black");
        $(this).html("X");
      } else {
        $(this).css("color", "black");
        $(this).html("O");
      }
    } else alert("Không hợp lệ");
  });

  $("#hide").click(function () {
    $("#all").hide();
  });
  $("#show").click(function () {
    $("#all").show();
  });
  $("#toggle").click(function () {
    $("#all").toggle();
  });
});
