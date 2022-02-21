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

  // Get inputs
  var first = document.getElementById("first");
  var groupFirst = document.getElementById("groupFirst");
  var last = document.getElementById("last");
  var groupLast = document.getElementById("groupLast");
  var email = document.getElementById("email");
  var groupEmail = document.getElementById("groupEmail");
  var birthday = document.getElementById("birthday");
  var groupBirthday = document.getElementById("groupBirthday");
  var quantity = document.getElementById("quantity");
  var groupQuantity = document.getElementById("groupQuantity");
  var locations = document.querySelectorAll('input[name="location"]');
  var groupLocation = document.getElementById("groupLocation");
  var checkbox1 = document.getElementById("checkbox1");
  var groupCheckbox = document.getElementById("groupCheckbox");

  // Stop propagation before check inputs
  event.preventDefault();

  // Boolean to know if form can be submit
  var error = false;

  // Check if first name have least 2 digits
  if (first.value.length < 2) {
    groupFirst.setAttribute('data-error-visible', true);
    error = true;
  } else {
    groupFirst.setAttribute('data-error-visible', false);
  }

  // Check if last name have least 2 digits
  // TODO : Check special characters and numbers 
  if (last.value.length < 2) {
    groupLast.setAttribute('data-error-visible', true);
    error = true;
  } else {
    groupLast.setAttribute('data-error-visible', false);
  }


  // Check if email is valide
  if (!validateEmail(email.value)) {
    groupEmail.setAttribute('data-error-visible', true);
    error = true;
  } else {
    groupEmail.setAttribute('data-error-visible', false);
  }

  // Check if birthday is input
  if (birthday.value.length < 2) {
    groupBirthday.setAttribute('data-error-visible', true);
    error = true;
  } else {
    groupBirthday.setAttribute('data-error-visible', false);
  }

  // Check if quantity is numérique
  if (isNaN(quantity.value) || quantity.value.length == 0) {
    groupQuantity.setAttribute('data-error-visible', true);
    error = true;
  } else {
    groupQuantity.setAttribute('data-error-visible', false);
  }

  // Check if location is check
  var locationIsSelected = false;
  for (const location of locations) {
    if (location.checked) {
      locationIsSelected = true;
      break;
    }
  }
  if (!locationIsSelected) {
    groupLocation.setAttribute('data-error-visible', true);
    error = true;
  } else {
    groupLocation.setAttribute('data-error-visible', false);
  }

  // Check if CGU is check
  if (!checkbox1.checked) {
    groupCheckbox.setAttribute('data-error-visible', true);
    error = true;
  } else {
    groupCheckbox.setAttribute('data-error-visible', false);
  }

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


