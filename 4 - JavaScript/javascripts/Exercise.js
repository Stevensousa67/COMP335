function checkPassword() {
    const password1 = document.getElementById("password1");
    const password2 = document.getElementById("password2");
    if (!password1.value.test(password2.value)) {
        document.getElementsByTagName("p").innerHTML = "Passwords do not match";
    }
    else
        document.getElementsByTagName("p").innerHTML = "Passwords match";
}

// Register listeners
window.addEventListener('load', ()=>{
    document.getElementById("password1").addEventListener("change", password1);
    document.getElementById("password2").addEventListener("change", password2);
})