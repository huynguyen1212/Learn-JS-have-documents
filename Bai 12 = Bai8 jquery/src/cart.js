var addInner2 = "";
var arr = JSON.parse(localStorage.getItem("datacart"));
arr.forEach((value, index) => {
  addInner2 +=
    "<tr>" +
    "<td>" +
    "<img src='" +
    value.img +
    "'/>" +
    "</td>" +
    "<td>" +
    value.name +
    "</td>" +
    "<td>" +
    value.price +
    "</td>" +
    "</tr>";
});

$("#cart-items").append(addInner2);

$(".clear").click(function () {
  localStorage.setItem("datacart", JSON.stringify([]));
  window.location.reload();
});
