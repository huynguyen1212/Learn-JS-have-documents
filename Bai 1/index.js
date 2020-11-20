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
  arr1 = arr1 + "," + mang2;
}

function sua() {
  var mang = prompt("Mang cu: ", arr1);
  let mang1 = mang.split(" ");
  let mang2 = mang1.toString();
  if (mang != null) {
    document.getElementById("arr1Value").innerHTML = "sua mang:" + mang2;
  }
  arr1 = mang2;
}

function xoa() {
  arr1 = arr1.split(",");
  var vitri = prompt("Xoa tu ? den ?: ");
  arr1 =
    arr1.splice(0, vitri[0]) +
    arr1.splice(vitri[vitri.length - 1], arr1.length - 1);
  document.getElementById("arr1Value").innerHTML = "mang da xoa: " + arr1;
  arr1 = arr1.toString();
}

function sort1() {
  if (typeof arr1 == "string") {
    let newArr1 = arr1.split(",");
    newArr1.sort();
    document.getElementById("arr1Value").innerHTML = "SXT phan tu:" + newArr1;
    arr1 = newArr1;
  } else {
    arr1.sort();
    document.getElementById("arr1Value").innerHTML = "SXG phan tu:" + arr1;
    arr1 = arr1;
  }
}

function sort2() {
  if (typeof arr1 == "string") {
    let newArray2 = arr1.split(",");
    newArray2.sort();
    newArray2.reverse();
    document.getElementById("arr1Value").innerHTML = "SXG phan tu:" + newArray2;
    arr1 = newArray2;
  } else {
    arr1.reverse();
    document.getElementById("arr1Value").innerHTML = "SXG phan tu:" + arr1;
    arr1 = arr1;
  }
}
