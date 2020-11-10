var check = $("#customers input");
var tb = "thông báo";
$(".button2").hide();
$("#customers .button1").click(function () {
  if (check.val() == "Nhập username" || check.val() == "Nhập password") {
    tb = "Sai thông tin đăng nhập";
    check.css("background-color", "red");
  } else {
    tb = "Chúc mừng, bạn đã đăng nhập thành công";
    $(".button2").show();
    $(".button1").hide();
    $("input").hide();
    var un1 = $(".input1").val();
    var un2 = $(".input2").val();
    $(".div1").html(un1);
    $(".div2").html(un2);
  }
  $("#customers .tb").html(tb);
});
