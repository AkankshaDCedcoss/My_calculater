function insert(num) {
  $("#display").val($("#display").val() + num);
}
function equal() {
  $("#display").val(eval($("#display").val()));
}
function clr() {
  $("#display").val(" ");
}
var count = 0;
$("#button2").click(function () {
  count++;
  if (count % 2 == 0) {
    $("#display").val("+" + $("#display").val());
  } else {
    $("#display").val("-" + $("#display").val());
  }
});

