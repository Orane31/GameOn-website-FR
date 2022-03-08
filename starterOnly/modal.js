function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalBtnClose = document.querySelectorAll(".modal-btn-close");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
modalBtnClose.forEach((btn) => btn.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// ########################################################################################
// Validate input before submit
// ########################################################################################
const modalForm = document.getElementById("formReserve");
const successDiv = document.getElementById("successDiv");
modalForm.addEventListener("submit", validateDataOnSubmit);

// Function to check if input form are validate
function validateDataOnSubmit(event) {

  console.log("fonciton ok")
  // Get inputs
  var first = document.getElementById("first");
  var firstError = document.getElementById("firstError");
  var last = document.getElementById("last");
  var lastError = document.getElementById("lastError");
  var email = document.getElementById("email");
  var emailError = document.getElementById("emailError");
  var birthday = document.getElementById("birthday");
  var birthdayError = document.getElementById("birthdayError");
  var quantity = document.getElementById("quantity");
  var quantityError = document.getElementById("quantityError");
  var locations = document.querySelectorAll('input[name="location"]');
  var locationError = document.getElementById("locationError");
  var checkbox1 = document.getElementById("checkbox1");
  var checkboxError = document.getElementById("groupCheckbox");

  // Stop propagation before check inputs
  event.preventDefault();

  // Boolean to know if form can be submit
  var error = false;

  // Set style of input and error message if check fails
  function setErrorMsgStyle(msg, input, isError) {
    if (isError) {
      error = true
      msg.style.display = 'block';
      if (input == locations) {
        return
      } else {
        input.style.borderColor = 'red';
      }

    } else {
      msg.style.display = 'none';
    }
  }

  // Check if first name have least 2 digits
  setErrorMsgStyle(firstError, first, (first.value.length < 2));

  // Check if last name have least 2 digits
  // TODO : Check special characters and numbers 
  setErrorMsgStyle(lastError, last, (last.value.length < 2));

  // Check if email is valide
  setErrorMsgStyle(emailError, email, (!validateEmail(email.value)));

  // Check if birthday is input
  setErrorMsgStyle(birthdayError, birthday, (birthday.value.length != 10));

  // Check if quantity is numérique
  setErrorMsgStyle(quantityError, quantity, (isNaN(quantity.value) || quantity.value.length == 0));

  // Check as least one location is checked
  var locationIsSelected = false;
  for (const location of locations) {
    if (location.checked) {
      locationIsSelected = true;
      break;
    }
  }

  setErrorMsgStyle(locationError, locations, (!locationIsSelected));


  // Check if CGU is accepted
  setErrorMsgStyle(checkboxError, checkbox1, (!checkbox1.checked));


  // if no error, send form
  if (!error) {
    // modalForm.submit();
    modalForm.hidden = true;
    successDiv.hidden = false;
  }

}

// Function to check email validation
function validateEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
}


