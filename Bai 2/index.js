var text = document.getElementById("myDiv").innerHTML = "<form> " +
  " <input type='text' class = 'inputValue'/>" +
  "<input type='button' value = 'Submit' onClick= 'getValue()'/>" +
  "<p id = 'arr1Value'>" + "</p>" + "</br>" +

  "<input type='button' value = 'Do dai' onClick= 'dai()'/>" + "</br>" +
  "<p id = 'arr1ValueDai'>" + "</p>" + "</br>" +

  "<input type='button' value = 'Xoa' onClick= 'xoa()'/>" + "</br>" +
  "<p id = 'arr1ValueXoa'>" + "</p>" + "</br>" +

  "<input type='button' value = 'Them' onClick= 'them()'/>" + "</br>" +
  "<p id = 'arr1ValueThem'>" + "</p>" + "</br>" +

  "<input type='button' value = 'Thay the' onClick= 'thayThe()'/>" + "</br>" +
  "<p id = 'arr1ValueThayThe'>" + "</p>" + "</br>" +


  
  "<input type='button' value = 'In hoa' onClick= 'Hoa()'/>" + "</br>" +
  "<p id = 'inhoa'>" + "</p>" + "</br>" +
  
  "<input type='button' value = 'In thuong' onClick= 'Thuong()'/>" + "</br>" +
  "<p id = 'inthuong'>" + "</p>" + "</br>" +
  "</form>";

var a = document.getElementsByClassName("inputValue");

function getValue() {
  var b = a[0].value;
  var chuoi = prompt("Nhap yeu cau", "Hien thi chuoi");
  if (chuoi != null) {
    document.getElementById("arr1Value").innerHTML =
      "Chuoi :" + b;
  }
}

function dai() {
  var b = a[0].value;
  let Dodai = b.lenght;
  var dodai = Number(Dodai);
  var chuoi = prompt("Nhap yeu cau");
  if (chuoi != null) {
    document.getElementById("arr1ValueDai").innerHTML =
      "Do dai:" + dodai;
  }
}

function xoa() {
  var b = a[0].value;
  var b = b.slice(2, 4)
  var chuoi = prompt("Nhap yeu cau");
  if (chuoi != null) {
    document.getElementById("arr1ValueXoa").innerHTML =
      "Chuoi dc xoa: " + b;
  }
}

function them() {
  var b = a[0].value;
  b = b.concat("hello")
  var chuoi = prompt("Nhap yeu cau");
  if (chuoi != null) {
    document.getElementById("arr1ValueThem").innerHTML =
      "Chuoi them:" + b;
  }
}

function thayThe() {
  var b = a[0].value;
  b = b.replace("i am thank you", "okay")
  var chuoi = prompt("Nhap yeu cau");
  if (chuoi != null) {
    document.getElementById("arr1ValueThayThe").innerHTML =
      "Chuoi thay the:" + b;
  }
}

function Hoa() {
  var b = a[0].value;
  b = b.toUpperCase();
  var chuoi = prompt("Nhap yeu cau");
  if (chuoi != null) {
    document.getElementById("inhoa").innerHTML =
      "Chuoi in hoa:" + b;
  }
}

function Thuong() {
  var b = a[0].value;
  b = b.toLowerCase();
  var chuoi = prompt("Nhap yeu cau");
  if (chuoi != null) {
    document.getElementById("inthuong").innerHTML =
      "Chuoi in thuong:" + b;
  }
}