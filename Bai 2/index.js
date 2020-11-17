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
  var mx = prompt("Khoang lay: ");
  b = b.substring(0, mx[0]) + b.substring(mx.length + 1, b.length);
  document.getElementById("arr1Value").innerHTML = "chuoi da xoa: " + b;
}

function them() {
  var b = a[0].value;
  let chuoi1 = prompt("chuoi cu: " + b);
  let chuoimoi = b.concat(chuoi1);
  document.getElementById("arr1Value").innerHTML = "Chuoi them:" + chuoimoi;
  a[0].value = chuoimoi;
}

function thayThe() {
  var b = a[0].value;
  let chuoi = prompt("chuoi cu: ", b);
  document.getElementById("arr1Value").innerHTML = "Chuoi thay the:" + chuoi;
  a[0].value = chuoi;
}

function Hoa() {
  var b = a[0].value;
  let up = b.toUpperCase();
  document.getElementById("arr1Value").innerHTML = "Chuoi in hoa:" + up;
  a[0].value = up;
}

function Thuong() {
  var b = a[0].value;
  let down = b.toLowerCase();
  document.getElementById("arr1Value").innerHTML = "Chuoi in thuong:" + down;
  a[0].value = down;
}
