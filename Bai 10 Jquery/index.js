function tim() {
  var inp = $("input");
  console.log(inp);
  for (let index = 0; index < inp.length; index++) {
    if ($(inp[index]).val() == 0) {
      $(inp[index]).addClass("error");
    }
  }
}
