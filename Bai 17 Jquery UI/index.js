function tab(obj) {
  $("#tabs ul li").removeClass("active");
  $(obj).addClass("active");
  var id = $(obj).find("a").attr("href");
  $(".tab_item").hide();
  $(id).show();
}
$("#tabs ul li").click(function () {
  tab(this);
  return false;
});

$(".easyui-dialog").hide();
var count = $(".fitem input");
function newUser() {
  $(".easyui-dialog").dialog();
}

$(".save").click(function () {
  let a = $(".firstname").val();
  let b = $(".lastname").val();
  let c = $(".phone").val();
  let d = $(".email").val();
  console.log(a, b, c, d);
  $("#dg").append(
    "<tbody>" +
      "<tr>" +
      "<td>" +
      a +
      "</td>" +
      "<td>" +
      b +
      "</td>" +
      "<td>" +
      c +
      "</td>" +
      "<td>" +
      d +
      "</td>" +
      "</tr>" +
      "</tbody>"
  );
  // a = "";
  // b = "";
  // c = "";
  // d = "";
});

$(".edit-dialog").hide();
function editUser() {
  $(".edit-dialog").dialog();
}

$(".removeUser").hide();
function destroyUser() {
  $(".removeUser").dialog();
}
