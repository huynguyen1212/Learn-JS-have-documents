document.getElementById("myDiv").innerHTML =
  "<table id = 'myTable'>" +
  "<tr>" +
  "<th>SBD</th>" +
  "<th>Tên</th>" +
  "<th>Tuổi</th>" +
  "<th>Giới tính</th>" +
  "<th>Điểm môn văn</th>" +
  "<th>Điểm môn toán</th>" +
  "<th>Tổng điểm</th>" +
  "</tr>" +
  "<tr>" +
  "<td>01</td>" +
  "<td>NV A</td>" +
  "<td>15</td>" +
  "<td>Nam</td>" +
  "<td>7</td>" +
  "<td>8</td>" +
  "<td>15</td>" +
  "</tr>" +
  "<tr>" +
  "<td>02</td>" +
  "<td>NV B</td>" +
  "<td>15</td>" +
  "<td>Nam</td>" +
  "<td>7</td>" +
  "<td>9</td>" +
  "<td>16</td>" +
  "</tr>" +
  "<tr>" +
  "<td>03</td>" +
  "<td>NV C</td>" +
  "<td>16</td>" +
  "<td>Nữ</td>" +
  "<td>8</td>" +
  "<td>8</td>" +
  "<td>16</td>" +
  "</tr>" +
  "<tr>" +
  "<td>04</td>" +
  "<td>NV C</td>" +
  "<td>16</td>" +
  "<td>Nam</td>" +
  "<td>7</td>" +
  "<td>10</td>" +
  "<td>17</td>" +
  "</tr>" +
  "<tr>" +
  "<td>05</td>" +
  "<td>NV D</td>" +
  "<td>15</td>" +
  "<td>Nữ</td>" +
  "<td>9</td>" +
  "<td>8</td>" +
  "<td>17</td>" +
  "</tr>" +
  "<tr>" +
  "<td>06</td>" +
  "<td>NV E</td>" +
  "<td>17</td>" +
  "<td>Nữ</td>" +
  "<td>8</td>" +
  "<td>9</td>" +
  "<td>17</td>" +
  "</tr>" +
  "<tr>" +
  "<td>07</td>" +
  "<td>NV F</td>" +
  "<td>18</td>" +
  "<td>Nam</td>" +
  "<td>10</td>" +
  "<td>10</td>" +
  "<td>20</td>" +
  "</tr>" +
  "<tr>" +
  "<td>08</td>" +
  "<td>NV G</td>" +
  "<td>16</td>" +
  "<td>Nữ</td>" +
  "<td>7</td>" +
  "<td>8</td>" +
  "<td>15</td>" +
  "</tr>" +
  "<tr>" +
  "<td>09</td>" +
  "<td>NV H</td>" +
  "<td>17</td>" +
  "<td>Nam</td>" +
  "<td>8</td>" +
  "<td>8</td>" +
  "<td>16</td>" +
  "</tr>" +
  "<tr>" +
  "<td>10</td>" +
  "<td>NV I</td>" +
  "<td>18</td>" +
  "<td>Nữ</td>" +
  "<td>9</td>" +
  "<td>9</td>" +
  "<td>18</td>" +
  "</tr>" +
  "<tr>" +
  "<th></th>" +
  "<th></th>" +
  "<th></th>" +
  "<th></th>" +
  "<th><button onClick= 'sortTable(4)'>Sort</button></th>" +
  "<th><button onClick= 'sortTable(5)'>Sort</button></th>" +
  "<th><button onClick= 'sortTable(6)'>Sort</button></th>" +
  "</tr>" +
  "<tr>" +
  "<th></th>" +
  "<th></th>" +
  "<th></th>" +
  "<th></th>" +
  "<th><button onClick= 'sortTableReverse(4)'>Sort Reverse</button></th>" +
  "<th><button onClick= 'sortTableReverse(5)'>Sort Reverse</button></th>" +
  "<th><button onClick= 'sortTableReverse(6)'>Sort Reverse</button></th>" +
  "</tr>" +
  "</table>" +
  "<table id='second_table'>" +
  "<tr>" +
  "<th>Văn cao nhất</th>" +
  "<th>Toán cao nhất</th>" +
  "<th>Tổng cao nhất</th>" +
  "</tr>" +
  "<tr id = 'topVan'>" +
  "</tr>" +
  "<tr id = 'topToan'>" +
  "</tr>" +
  "<tr id = 'topTong'>" +
  "</tr>" +
  "</table>";

function onTop(topMon, n) {
  var table, rows, i, x, y, Top;
  table = document.getElementById("second_table");
  while (true) {
    rows = table.rows;
    for (i = 1; i < rows.length - 1; i++) {
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      Top = x;
      if (Number(x.innerHTML) < Number(y.innerHTML)) {
        Top = y;
      }
    }
  }
  document.getElementById("topMon").innerHTML = rows[i];
}
onTop("topVan", 4);
onTop("topToan", 5);
onTop("topTong", 6);

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
