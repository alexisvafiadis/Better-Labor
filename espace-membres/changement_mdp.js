var password = document.getElementById("password")
  , confirm_password = document.getElementById("confirmpassword");

enableSubmitButton();

function validatePassword() {
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Les mots de passe ne correspondent pas!");
    return false;
  } else {
    confirm_password.setCustomValidity('');
    return true;
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

function enableSubmitButton() {
  document.getElementById('submitButton').disabled = false;
  document.getElementById('loader').style.display = 'none';
}

function disableSubmitButton() {
  document.getElementById('submitButton').disabled = true;
  document.getElementById('loader').style.display = 'unset';
}

function validateSignupForm() {
  var form = document.getElementById('signupForm');
  
  for(var i=0; i < form.elements.length; i++){
      if(form.elements[i].value === '' && form.elements[i].hasAttribute('required')){
        console.log('Certains champs sont requis!');
        return false;
      }
    }
  
  if (!validatePassword()) {
    return false;
  }
  
  onPasswordChange();
}

function onPasswordChange() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    
    disableSubmitButton();
    
    if (this.readyState == 4 && this.status == 200) {
      enableSubmitButton();
    }
    else {
      console.log('AJAX call failed!');
      setTimeout(function(){
        enableSubmitButton();
      }, 1000);
    }
    
  };
  
  xhttp.open("GET", "changement_mdp.php", true);
  xhttp.send();
}