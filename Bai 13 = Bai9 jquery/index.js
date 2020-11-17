var check1 = $(".input1");
var check2 = $(".input2");
var tb = "thông báo";
$(".button2").hide();
$("#customers .button1").click(function () {
  if (
    (check1.val() == "" && check2.val() == "") ||
    (check1.val() != "huyro1212000@gmail.com" && check2.val() != "huy")
  ) {
    tb = "Sai thông tin đăng nhập";
    check1.css("background-color", "red");
    check2.css("background-color", "red");
  } else if (
    (check1.val() == "" && check2.val() != "") ||
    check1.val() != "huyro1212000@gmail.com"
  ) {
    tb = "Sai thông tin đăng nhập";
    check2.css("background-color", "unset");
    check1.css("background-color", "red");
  } else if (
    (check2.val() == "" && check1.val() != "") ||
    check2.val() != "huy"
  ) {
    tb = "Sai thông tin đăng nhập";
    check1.css("background-color", "unset");
    check2.css("background-color", "red");
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
