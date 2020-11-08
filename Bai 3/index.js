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

var Arr2 = [...Arr];
Arr2 = Arr2.sort((a, b) => a.Diemvan - b.Diemvan);
var DVan =
  "<tr>" +
  "<td>" +
  Arr2[Arr2.length - 1].SBD +
  "</td>" +
  "<td>" +
  Arr2[Arr2.length - 1].Ten +
  "</td>" +
  "<td>" +
  Arr2[Arr2.length - 1].Tuoi +
  "</td>" +
  "<td>" +
  Arr2[Arr2.length - 1].Gioitinh +
  "</td>" +
  "<td>" +
  Arr2[Arr2.length - 1].Diemvan +
  "</td>" +
  "<td>" +
  Arr2[Arr2.length - 1].Diemtoan +
  "</td>" +
  "<td>" +
  Arr2[Arr2.length - 1].Tong +
  "</td>" +
  "</tr>";

var Arr3 = [...Arr];
Arr3 = Arr3.sort((a, b) => a.Diemtoan - b.Diemtoan);
var DToan =
  "<tr>" +
  "<td>" +
  Arr3[Arr3.length - 1].SBD +
  "</td>" +
  "<td>" +
  Arr3[Arr3.length - 1].Ten +
  "</td>" +
  "<td>" +
  Arr3[Arr3.length - 1].Tuoi +
  "</td>" +
  "<td>" +
  Arr3[Arr3.length - 1].Gioitinh +
  "</td>" +
  "<td>" +
  Arr3[Arr3.length - 1].Diemvan +
  "</td>" +
  "<td>" +
  Arr3[Arr3.length - 1].Diemtoan +
  "</td>" +
  "<td>" +
  Arr3[Arr3.length - 1].Tong +
  "</td>" +
  "</tr>";
var Arr4 = [...Arr];
Arr4 = Arr4.sort((a, b) => a.Tong - b.Tong);
var Toong =
  "<tr>" +
  "<td>" +
  Arr4[Arr4.length - 1].SBD +
  "</td>" +
  "<td>" +
  Arr4[Arr4.length - 1].Ten +
  "</td>" +
  "<td>" +
  Arr4[Arr4.length - 1].Tuoi +
  "</td>" +
  "<td>" +
  Arr4[Arr4.length - 1].Gioitinh +
  "</td>" +
  "<td>" +
  Arr4[Arr4.length - 1].Diemvan +
  "</td>" +
  "<td>" +
  Arr4[Arr4.length - 1].Diemtoan +
  "</td>" +
  "<td>" +
  Arr4[Arr4.length - 1].Tong +
  "</td>" +
  "</tr>";

document.getElementById("myDiv").innerHTML =
  "<table id = 'myTable'>" +
  "<tr>" +
  "<th>SBD</th>" +
  "<th>Tên</th>" +
  "<th>Tuổi</th>" +
  "<th>Giới thiệu</th>" +
  "<th>Điểm văn <button onClick= 'sortTable(4)'>Sort</button> <button onClick= 'sortTableReverse(4)'>Sort Reverse</button></th>" +
  "<th>Điểm toán <button onClick= 'sortTable(5)'>Sort</button> <button onClick= 'sortTableReverse(5)'>Sort Reverse</button></th>" +
  "<th>Tổng <button onClick= 'sortTable(6)'>Sort</button> <button onClick= 'sortTableReverse(6)'>Sort Reverse</button></th>" +
  "</tr>" +
  addInner +
  "</table>" +
  "</br>" +
  "<table id = 'tableTop'>" +
  "<tr>" +
  "<th>SBD</th>" +
  "<th>Tên</th>" +
  "<th>Tuổi</th>" +
  "<th>Giới thiệu</th>" +
  "<th>Điểm văn</th>" +
  "<th>Điểm toán</th>" +
  "<th>Tổng</th>" +
  "</tr>" +
  DVan +
  DToan +
  Toong +
  "</table>";

function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      if (Number(x.innerHTML) > Number(y.innerHTML)) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

function sortTableReverse(n) {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      if (Number(x.innerHTML) < Number(y.innerHTML)) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
