function checkPassword() {
    const password = document.getElementById("password2");
    /*
    at least one upper case, one number, one symbol and minimum length of 8
    ^: asserts the start of the string.
    (?=.*[A-Z]): positive lookahead to ensure that the string contains at least one uppercase letter.
    (?=.*\d): positive lookahead to ensure that the string contains at least one digit.
    (?=.*[^\w\s]): positive lookahead to ensure that the string contains at least one symbol that is not a word character or whitespace.
    .{8,}: ensures that the string has a minimum length of 8 characters.
    $: asserts the end of the string.
    */
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;
    if (!regex.test(password2.value))
        alert("Your password must have at least one upper case, one number, one symbol and minimum length of 8");
}
window.addEventListener('load', function(event) {
  document.getElementById("password2").addEventListener("change",checkPassword);
});
/*
window.addEventListener('load', function() {
  document.getElementById("password2").addEventListener("change",checkPassword);
});
*/
/*
window.addEventListener("load", ()=> {
  document.getElementById("password2").addEventListener('change',checkPassword);
});
*/