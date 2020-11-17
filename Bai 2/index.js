var text = (document.getElementById("myDiv").innerHTML =
  "<form> " +
  " <input type='text' class = 'inputValue'/>" +
  "<input type='button' value = 'Nhap chuoi' onClick= 'getValue()'/>" +
  "<p id = 'arr1Value'>" +
  "</p>" +
  "</br>" +
  "<input type='button' value = 'Do dai' onClick= 'dai()'/>" +
  "<input type='button' value = 'Xoa' onClick= 'xoa()'/>" +
  "<input type='button' value = 'Them' onClick= 'them()'/>" +
  "<input type='button' value = 'Thay the' onClick= 'thayThe()'/>" +
  "<input type='button' value = 'In hoa' onClick= 'Hoa()'/>" +
  "<input type='button' value = 'In thuong' onClick= 'Thuong()'/>" +
  "</form>");

var a = document.getElementsByClassName("inputValue");
var b = a[0].value;

function getValue() {
  var chuoi = prompt("Nhap yeu cau", "Hien thi chuoi");
  var b = a[0].value;
  if (chuoi != null) {
    document.getElementById("arr1Value").innerHTML = "Chuoi :" + b;
  }
}

function dai() {
  var b = a[0].value;
  let Dodai = b.length;
  var dodai = Number(Dodai);
  document.getElementById("arr1Value").innerHTML +=
    "</br>" + "Do dai: " + dodai;
}

function xoa() {
  var b = a[0].value;
  b = "";
  document.getElementById("arr1Value").innerHTML = b;
}

function them() {
  var b = a[0].value;
  var chuoi = prompt("chuoi cu: " + b);
  b = b.concat(chuoi);
  if (chuoi != null) {
    document.getElementById("arr1Value").innerHTML = "Chuoi them:" + b;
  }
}

function thayThe() {
  var b = a[0].value;
  var chuoi = prompt("chuoi cu: " + b);
  if (chuoi != null) {
    document.getElementById("arr1Value").innerHTML = "Chuoi thay the:" + chuoi;
  }
}

function Hoa() {
  var b = a[0].value;
  b = b.toUpperCase();
  document.getElementById("arr1Value").innerHTML = "Chuoi in hoa:" + b;
}

function Thuong() {
  var b = a[0].value;
  b = b.toLowerCase();
  document.getElementById("arr1Value").innerHTML = "Chuoi in thuong:" + b;
}
