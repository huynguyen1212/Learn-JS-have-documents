var a = $("#nhap");
var b = $("#check");
$("#dialog").hide();
$(b).click(function () {
  if (a.val() !== "abc") {
    $("#dialog").dialog();
  } else {
    $("#dialog").hide();
  }
});

$(document).ready(function () {
  $("a.login-window").click(function () {
    var loginBox = $(this).attr("href");
    $(loginBox).fadeIn(300);
    $("body").append('<div id="over">');
    $("#over").fadeIn(300);
    return false;
  });
  $(document).on("click", "a.close, #over", function () {
    $("#over, .login").fadeOut(300, function () {
      $("#over").remove();
    });
    return false;
  });
});

var $dialog = $('<div id="myDialog"></div>')
  .html(
    '<form> <span>Sender Email</span> <input id="senderemailAddresss" type="text" class="w3-input w3-border" placeholder="abc@example.com" size="25"><br> <span>Receiver Email</span> <input id="receiveremailAddresss" class="w3-input w3-border" type="text" placeholder="bcd@example.com" size="25"><br><span>Title</span><input id="title" class="w3-input w3-border" type="text"> <br><span>Messgae</span> <textarea id="message" class="w3-input w3-border"  style="height:60px type="text" rows="4" cols="20"></form>'
  )
  .dialog({
    autoOpen: false,
    modal: true,
    height: 500,
    width: 500,
    draggable: false,
    title: "Send Mail",
    buttons: {
      Send: function () {
        $(this).dialog("close");
      },
      Cancel: function () {
        $(this).dialog("close");
      },
    },
    open: function (event, ui) {
      $(".ui-dialog-titlebar-close", ui.dialog | ui).hide();
      $(this).find("#title");
      $(this)
        .find(text)
        .val(
          "Message is :" +
            test1 +
            " \n " +
            "\n new line :" +
            test2 +
            "\n again new line " +
            test3
        );

      $(this).css("overflow", "auto");
    },
  });
$("#title").val("");
$dialog.dialog("open");
