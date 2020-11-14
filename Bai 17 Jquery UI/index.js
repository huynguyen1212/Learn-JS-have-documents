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

var Arr = [
  /*{
    firstName: "huy",
    lastName: "nguyen",
    Phone: 111234,
    Email: "huynguyen@sasca.com",
  },*/
];
function addTable(Arr) {
  let addInner = "";
  Arr.forEach((value, index) => {
    addInner +=
      "<tr>" +
      "<td>" +
      "<input type = 'radio' name = 'user'>" +
      "</input>" +
      "</td>" +
      "<td>" +
      value.firstName +
      "</td>" +
      "<td>" +
      value.lastName +
      "</td>" +
      "<td>" +
      value.Phone +
      "</td>" +
      "<td>" +
      value.Email +
      "</td>" +
      "</tr>";
  });
  $("#main").empty();
  $("#main").append(addInner);
}
$(".save").click(function () {
  let a = $("#firstname");
  let b = $("#lastname");
  let c = $("#phone");
  let d = $("#email");
  let Obj = {
    firstName: a.val(),
    lastName: b.val(),
    Phone: c.val(),
    Email: d.val(),
  };
  Arr.push(Obj);
  addTable(Arr);
  Table(Arr);
  $(".easyui-dialog").dialog("close");
  a.val("");
  b.val("");
  c.val("");
  d.val("");
});

$(".edit-dialog").hide();
function tim() {
  let checkedd = $("#main input");
  let location = -1;
  for (let index = 0; index < checkedd.length; index++) {
    if ($(checkedd[index]).prop("checked")) {
      location = index;
    }
  }
  return location;
}

$("#Edit").click(function () {
  let loca = tim();
  if (loca != -1) {
    $("#editfirstname").val(Arr[loca].firstName);
    $("#editlastname").val(Arr[loca].lastName);
    $("#editphone").val(Arr[loca].Phone);
    $("#editemail").val(Arr[loca].Email);
    $(".edit-dialog").dialog();
  }
});

$(".saveedit").click(function () {
  let loca = tim();
  if (loca != -1) {
    let a = $("#editfirstname");
    let b = $("#editlastname");
    let c = $("#editphone");
    let d = $("#editemail");
    let Objedit = {
      firstName: a.val(),
      lastName: b.val(),
      Phone: c.val(),
      Email: d.val(),
    };
    Arr.splice(loca, 1, Objedit);
  }
  addTable(Arr);
  Table(Arr);
  $(".edit-dialog").dialog("close");
});

$(".removeUser").hide();
function destroyUser() {
  let loca = tim();
  if (loca != -1) {
    $(".removeUser").dialog();
    $("#ok").click(function () {
      Arr.splice(loca, 1);
      addTable(Arr);
      Table(Arr);
      $(".removeUser").dialog("close");
    });
    $("#close").click(function () {
      $(".removeUser").dialog("close");
    });
  }
}

function Table(Arr) {
  let addInner = "";
  Arr.forEach((value, index) => {
    addInner +=
      "<tr>" +
      "<td>" +
      value.firstName +
      "</td>" +
      "<td>" +
      value.lastName +
      "</td>" +
      "<td>" +
      value.Phone +
      "</td>" +
      "<td>" +
      value.Email +
      "</td>" +
      "</tr>";
  });
  $("#myTable").empty();
  $("#myTable").append(addInner);
}

$("#myInput").on("keyup", function () {
  var value = $(this).val();
  $("#myTable tr").filter(function () {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
  });
});
