var arrCart = [];
var arrPro = [
  {
    img:
      "https://i.pinimg.com/originals/47/4a/32/474a32757e5d8a3df1858fbcb67a8164.jpg",
    name: "Product " + Math.ceil(Math.random() * 10),
    price: Math.ceil(Math.random() * 100),
  },
  {
    img:
      "https://i.pinimg.com/originals/47/4a/32/474a32757e5d8a3df1858fbcb67a8164.jpg",
    name: "Product " + Math.ceil(Math.random() * 10),
    price: Math.ceil(Math.random() * 100),
  },
  {
    img:
      "https://i.pinimg.com/originals/47/4a/32/474a32757e5d8a3df1858fbcb67a8164.jpg",
    name: "Product " + Math.ceil(Math.random() * 10),
    price: Math.ceil(Math.random() * 100),
  },
  {
    img:
      "https://i.pinimg.com/originals/47/4a/32/474a32757e5d8a3df1858fbcb67a8164.jpg",
    name: "Product " + Math.ceil(Math.random() * 10),
    price: Math.ceil(Math.random() * 100),
  },
];

var addInner = "";
arrPro.forEach((value, index) => {
  addInner +=
    "<div class='col-lg-3 col-md-6 mb-4'>" +
    "<div class='card'>" +
    "<img class='card-img-top' src=" +
    value.img +
    ">" +
    "<div class='card-body'>" +
    "<h4 class='card-title'>" +
    value.name +
    "</h4>" +
    "<p class='card-text'> Price: $" +
    value.price +
    "<p>" +
    "</div>" +
    "<input type='submit' data-id='" +
    index +
    "' class='btn btn-primary' value='Add to Cart' />" +
    "</div>" +
    "</div>";
});

$(".inner").append(addInner);

$("input[type='submit']").click(function () {
  let a = $(this).attr("data-id");
  console.log(a, $(this));
  console.log(arrPro[a]);
  arrCart = JSON.parse(localStorage.getItem("datacart")) || [];
  arrCart.push(arrPro[a]);
  localStorage.setItem("datacart", JSON.stringify(arrCart));
  if (arrCart.length >= 1) {
    let count = $(".cicle");
    count.css("display", "block");
    let c = arrCart.length;
    count[0].innerHTML = c;
    console.log(count);
  }
});