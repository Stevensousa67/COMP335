function checkPhone() {
    let phone = document.getElementById("phone");
  let pos = phone.value.search(/^\d{3}-\d{3}-\d{4}$/);
  if (pos === -1) {
/*        alert("The phone number you entered (" + phone.value + ") is not in the correct form. \n" +
            "The correct form is: ddd-ddd-dddd \n" + 
            "Please go back and fix your phone number"); */
    alert(`The phone number you entered ${phone.value} is not in the correct form. \n
          The correct form is :ddd-ddd-dddd \n
          Please go back and fix your phone number` );
     return false;  // to prevent the form from being submitted. Details later
  }
  else
     return true;
}

// Refer to https://www.w3schools.com/js/js_string_templates.asp

function checkName() {
  let name = document.getElementById("name");
  let pos = name.value.search(/^[A-Z][a-z]+, [A-Z][a-z]+$/);
  
  if (pos === -1) {
/*       alert("The name you entered (" + name.value + ") is not in the correct form. \n" +
        "The correct form is: " + "Last-name, First-name \n" + 
        "It is case sensitive and there is one space after comma"); */
    alert(`The name you entered ${name.value} is not in the correct form. \n
          The correct form is :Last name, First name \n
          It is case sensitive and there is one space after comma`);
    return false;
  }
  else
    return true;
}

function checkPassword() {
  const password = document.getElementById("password");
  const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;
  if (!regex.test(password.value))
    alert("failed");
}
// Register listeners
window.addEventListener('load', function(event) {
    document.getElementById("name").addEventListener("change",checkName);
    document.getElementById("phone").addEventListener("change",checkPhone);
});