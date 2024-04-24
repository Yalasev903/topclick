$("#sendMail").on("click", function() {
var email = $("#email").val().trim();
var name = $("#name").val().trim();
var phone = $("#phone").val().trim();
var message = $("#message").val().trim();

if (email == "") {
     $("#errorMess").text("Введите email");
     return false;
} else if (name == "") {
     $("#errorMess").text("Введите Имя");
     return false;
} else if (phone == "") {
     $("#errorMess").text("Введите Телефон");
     return false;
} else if (message.length < 5) {
     $("#errorMess").text("Введите Сообщение");
     return false;
}

$("#errorMes").text("");

$.ajax({
     url: 'ajax/mail.php',
     type: 'POST',
     cache: false,
     data: { 'name': name, 'email': email, 'phone': phone, 'message': message },
     dataType: 'html',
     beforeSend: function() {
          $("#sendMail").prop("disabled", true);
     },
     success: function(data) {
     if(!data)
alert("Ошибка! Сообщение не отправлено");
          else
          $("#mailForm").trigger("reset");

$("#sendMail").prop("disabled", false);
     }
});

});