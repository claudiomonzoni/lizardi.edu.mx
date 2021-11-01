// contacto
window.$ = require('jquery');

$(document).ready(function () {

$("#contactoBtn").click(function (e) {
    var name = $("#nameC").val();
    var email = $("#emailC").val();
    var phone = $("#phoneC").val();
    var message = $("#messageC").val();

    $("#msj").empty(); // To empty previous error/success message.
    // Checking for blank fields.
    if (name == "" ||  email == "") {
      alert("Please fill the fields of Name, Lastname or Email");
    } else {
      // Returns successful data submission message when the entered information is stored in database.

      $.post(
        "contacto.php",
        {
          name,
          email,
          phone,
          message,
        },
        function (data) {
          $("#msj").append(data); // Append returned message to message paragraph.

          if (
            data ==
            "Thanks for contacting us, we will respond as soon as possible"
          ) {
            $("#formaContacto")[0].reset(); // To reset form fields on success.
          }
        }
      );
    }

    e.preventDefault();
  });

})