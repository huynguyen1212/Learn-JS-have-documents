var text = document.getElementById("myDiv").innerHTML = "<form> " +
  " <input type='text' class = 'inputValue'/>" +
  "<input type='button' value = 'Submit' onClick= 'getValue()'/>" +
  "<p id = 'arr1Value'>" + "</p>" + "</br>" +
  "<input type='button' value = 'Nhan doi' onClick= 'nhanDoi()'/>" + "</br>" +
  "<p id = 'arr1ValueNhanDoi'>" + "</p>" + "</br>" +
  "<input type='button' value = 'Them' onClick= 'them()'/>" + "</br>" +
  "<p id = 'arr1ValueThem'>" + "</p>" + "</br>" +
  "<input type='button' value = 'Sua' onClick= 'sua()'/>" + "</br>" +
  "<p id = 'arr1ValueSua'>" + "</p>" + "</br>" +
  "<input type='button' value = 'Xoa' onClick= 'xoa()'/>" + "</br>" +
  "<p id = 'arr1ValueXoa'>" + "</p>" + "</br>" +

  "<input type='button' value = 'Sap xep tang' onClick= 'sort1()'/>" + "</br>" +
  "<p id = 'arr1SXT'>" + "</p>" + "</br>" +
  "<input type='button' value = 'Sap xep giam' onClick= 'sort2()'/>" + "</br>" +
  "<p id = 'arr1SXG'>" + "</p>" + "</br>" +
  "</form>";

var a = document.getElementsByClassName("inputValue");

function getValue() {
  var b = a[0].value;
  var arr = b.split(' ');
  var arr1 = arr.toString();
  var mang = prompt("Nhap yeu cau", "Hien thi mang");
  if (mang != null) {
    document.getElementById("arr1Value").innerHTML =
      "Mang :" + arr1;
  }
}


function nhanDoi() {
  var b = a[0].value;
  var arr = b.split(' ');
  var nhandoi = arr[1] * 2;
  var mang = prompt("Nhap yeu cau");
  if (mang != null) {
    document.getElementById("arr1ValueNhanDoi").innerHTML =
      "Phan tu 2 nhan doi:" + nhandoi;
  }
}


function them() {
  var b = a[0].value;
  var arr = b.split(' ');
  arr.splice(2, 0, "10");
  var mang = prompt("Nhap yeu cau");
  if (mang != null) {
    document.getElementById("arr1ValueThem").innerHTML =
      "Them phan tu:" + arr;
  }
}


function sua() {
  var b = a[0].value;
  var arr = b.split(' ');
  arr[1] = 5;
  var mang = prompt("Nhap yeu cau");
  if (mang != null) {
    document.getElementById("arr1ValueSua").innerHTML =
      "Sua mang:" + arr;
  }
}


function xoa() {
  var b = a[0].value;
  var arr = b.split(' ');
  arr.splice(3, 1)
  var mang = prompt("Nhap yeu cau");
  if (mang != null) {
    document.getElementById("arr1ValueXoa").innerHTML =
      "Xoa phan tu:" + arr;
  }
}

function sort1() {
  var b = a[0].value;
  var arr = b.split(' ');
  arr.sort();
  var mang = prompt("Nhap yeu cau");
  if (mang != null) {
    document.getElementById("arr1SXT").innerHTML =
      "SXT phan tu:" + arr;
  }
}

function sort2() {
  var b = a[0].value;
  var arr = b.split(' ');
  arr.sort();
  arr.reverse();
  var mang = prompt("Nhap yeu cau");
  if (mang != null) {
    document.getElementById("arr1SXG").innerHTML =
      "SXG phan tu:" + arr;
  }}