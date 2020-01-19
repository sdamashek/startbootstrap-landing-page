function submitToAPI(e) {
    e.preventDefault();
    var URL = "https://jujca31s7a.execute-api.us-east-1.amazonaws.com/tempusacademy/emailsignup";
    if ($("#email-input").val()=="") {
        alert ("Please enter your email.");
        return;
    }

    var email = $("#email-input").val();
    var data = {
      email : email,
    };

    $.ajax({
      type: "POST",
      url : URL,
      dataType: "json",
      crossDomain: "true",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(data),
      success: function () {
        $('#successModal').modal({});
      },
      error: function () {
        $('#errorModal').modal({});
      }});
}
