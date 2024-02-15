function checkPassword() {
    console.log("Im here");
    let text = document.getElementById("text");
    const password1 = document.getElementById("password1");
    const password2 = document.getElementById("password2");

    if (password1.value == "" || password2.value == "") {
        text.innerText = "You did not enter a password. Enter one now.";
        text.style.color = "blue";
    }
    else if (password1.value != password2.value) {
        text.innerText = "The two passwords you entered are not the same. Try again.";
        text.style.color = "red";
    }
    else{
        text.innerText = "Hooray! You have matched passwords!";
        text.style.color = "green";
    }
}
// Register listeners
window.addEventListener('load', () => {
    document.getElementById("button").addEventListener("click", checkPassword);
})
