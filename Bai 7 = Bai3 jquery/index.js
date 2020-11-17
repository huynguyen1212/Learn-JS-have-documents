function tim() {
  var checkedd = $("input");
  for (let index = 0; index < checkedd.length; index++) {
    console.log(index, $(checkedd[index]).prop("checked"));
  }
}
