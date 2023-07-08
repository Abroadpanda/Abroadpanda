

// code fragment
var data = {
    "service_id": "ContactForm",
    "template_id": "template_yol9p6e",
    "user_id": "FJcmCCz_Lw6dvmgXp",
    "template_params": {
      "username": "kevin",
      "g-recaptcha-response": "abroad_panda_mail"
    }
  };
  
  $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json'
  }).done(function() {
    alert('Your mail is sent!');
  }).fail(function(error) {
    alert('Oops... ' + JSON.stringify(error));
  });
  