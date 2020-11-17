var text = (document.getElementById("myDiv").innerHTML =
  "<form> " +
  "<input type='text' class = 'inputValue'/>" +
  "<input type='button' value = 'Nhap mang' onClick= 'getValue()'/>" +
  "<p id = 'arr1Value'>" +
  "</p>" +
  "</br>" +
  "<input type='button' value = 'Nhan doi' onClick= 'nhanDoi()'/>" +
  "<input type='button' value = 'Them' onClick= 'them()'/>" +
  "<input type='button' value = 'Sua' onClick= 'sua()'/>" +
  "<input type='button' value = 'Xoa' onClick= 'xoa()'/>" +
  "<input type='button' value = 'Sap xep tang' onClick= 'sort1()'/>" +
  "<input type='button' value = 'Sap xep giam' onClick= 'sort2()'/>" +
  "</form>");

var a = document.getElementsByClassName("inputValue");
var b = a[0].value;
var arr = b.split(" ");
var arr1 = arr.toString();

function getValue() {
  var mang = prompt("Nhap yeu cau", "Hien thi mang");
  b = a[0].value;
  arr = b.split(" ");
  arr1 = arr.toString();
  if (mang != null) {
    document.getElementById("arr1Value").innerHTML = "Mang :" + arr1;
  }
}

function nhanDoi() {
  arr1 = arr1 + "," + arr1;
  document.getElementById("arr1Value").innerHTML = "Mang nhan doi:" + arr1;
}

function them() {
  var mang = prompt("Mang cu: " + arr1);
  let mang1 = mang.split(" ");
  let mang2 = mang1.toString();
  if (mang != null) {
    document.getElementById("arr1Value").innerHTML =
      "Them phan tu:" + arr1 + "," + mang2;
  }
}

function sua() {
  var mang = prompt("Mang cu: " + arr1);
  let mang1 = mang.split(" ");
  let mang2 = mang1.toString();
  if (mang != null) {
    document.getElementById("arr1Value").innerHTML = "sua mang:" + mang2;
  }
}

function xoa() {
  arr1 = "";
  document.getElementById("arr1Value").innerHTML = arr1;
}

function sort1() {
  let newArr = arr1.split(",");
  newArr.sort();
  document.getElementById("arr1Value").innerHTML = "SXT phan tu:" + newArr;
}

function sort2() {
  let newArr = arr1.split(",");
  newArr.sort();
  newArr.reverse();
  document.getElementById("arr1Value").innerHTML = "SXG phan tu:" + newArr;
}
