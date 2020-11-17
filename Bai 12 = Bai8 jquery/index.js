function flyToElement(flyer, flyingTo) {
  var $func = $(this);

  // Nhân bản đối tượng(hình ảnh) sẽ bay vào giỏ hàng
  var flyerClone = $(flyer).clone();

  // Thiết lập đối tượng nhân bản này trùng với đối tượng thực tế
  $(flyerClone)
    .css({
      position: "absolute",
      top: $(flyer).offset().top + "px",
      left: $(flyer).offset().left + "px",
      opacity: 1,
      "z-index": 1000,
    })
    .appendTo($("body"));

  // Lấy về tọa độ của giỏ hàng
  var gotoX = $(flyingTo).offset().left;
  var gotoY = $(flyingTo).offset().top;

  // Hiệu ứng bay vào giỏ hàng
  $(flyerClone).animate(
    {
      opacity: 0.4,
      left: gotoX,
      top: gotoY,
      width: $(flyingTo).width(),
      height: $(flyingTo).height(),
    },
    700,
    function () {
      // Hiệu ứng rung lắc khi sản phẩm đã bay vào giỏ hàng
      $(flyingTo).effect("shake", function () {
        // Ẩn đối tượng sản phẩm bay vào giỏ hàng và delete nó
        $(flyerClone).fadeOut("fast", function () {
          $(flyerClone).remove();
        });
      });
    }
  );
}
// $(function () {
//   $(".btn-add-cart").click(function () {
//     var $_this = $(this);
//     var itemImg = $(this).closest(".thumbnail").find("img").eq(0);
//     flyToElement($(itemImg), $(".cart_anchor"));
//   });
// });

var arr = [];
$(".right").click(function () {
  let a = $(this).parents(".product");
  arr.push(a[0]);
  console.log(arr);
  $(".main").empty();
  // for (let i = 0; i < arr.length; i++) {
  //   $(".main").append(arr);
  // }
});
