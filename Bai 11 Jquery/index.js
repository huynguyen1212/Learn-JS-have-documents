var Arr = Array.from(Array(10).keys()).map((i) => {
  let DV = Math.ceil(Math.random() * 10),
    DT = Math.ceil(Math.random() * 10);
  return {
    SBD: i,
    Ten: faker.name.findName(),
    Tuoi: Math.ceil(Math.random() * 100),
    Gioitinh: faker.random.boolean() ? "nam" : "nu",
    Diemvan: DV,
    Diemtoan: DT,
    Tong: DV + DT,
  };
});

var addInner = "";
Arr.forEach((value, index) => {
  addInner +=
    "<tr>" +
    "<td>" +
    value.SBD +
    "</td>" +
    "<td>" +
    value.Ten +
    "</td>" +
    "<td>" +
    value.Tuoi +
    "</td>" +
    "<td>" +
    value.Gioitinh +
    "</td>" +
    "<td>" +
    value.Diemvan +
    "<td>" +
    value.Diemtoan +
    "<td>" +
    value.Tong +
    "</tr>";
});

document.getElementById("myDiv").innerHTML =
  "<table id = 'myTable'>" +
  "<tr>" +
  "<th>SBD</th>" +
  "<th>Tên</th>" +
  "<th>Tuổi</th>" +
  "<th>Giới thiệu</th>" +
  "<th>Điểm văn</th>" +
  "<th>Điểm toán</th>" +
  "<th>Tổng</th>" +
  "</tr>" +
  addInner +
  "</table>";

var tr = $("#myDiv tr");
console.log(tr);
$(tr).hover(
  function () {
    $(this).css("background-color", "yellow");
  },
  function () {
    $(this).css("background-color", "white");
  }
);

$("#img #button1").click(function () {
  var newBgi = "./images/640px-Pete_Docter_Cannes_2015.jpg";
  $("#img1").css("background-image", "url(" + newBgi + ")");
  $("#img2").css(
    "background-image",
    "url(" + "./images/1359538428-s2.jpg" + ")"
  );
  $(".line").css("height", "30px");
  alert("Thông báo 1");
});

$("#img #button2").click(function () {
  alert("Thông báo 2");
});
