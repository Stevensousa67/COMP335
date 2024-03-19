/* 
    https://www.w3schools.com/js/js_api_fetch.asp
    The Fetch API interface allows web browser to make HTTP requests to web servers.
    If you use the XMLHttpRequest Object, Fetch can do the same in a simpler way.
    Using the Fetch API to make a GET request
    https://www.w3schools.com/tags/ref_httpmethods.asp 
*/
/*
function loadDoc() {
    fetch("../info.txt")
        .then(response => {
            // Checking if the response is successful
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Returning the response text
            return response.text();
        })
        .then(data => {
            // Updating the content of the demo div with the response data
            document.getElementById("demo").innerHTML = data;
        })
        .catch(error => {
            // Handling errors
            console.error('There was a problem with the fetch operation:', error);
        });
}
*/
// Node that there is no ; at the end of .then
// fetch().then().then()
function loadDoc() {
    fetch("../info.txt")
        .then(response => response.text()) // Returning the response text
        // Updating the content of the demo div with the response data
        .then(data => document.getElementById("demo").innerHTML = data)
}

/*
async function loadDoc() {
    let myObject = await fetch ("../info.txt");
    let myText = await myObject.text(); // Returning the response text
    // Updating the content of the demo div with the response data
    document.getElementById("demo").innerHTML = myText;
}
*/

// Attaching the loadDoc function to the click event of the button
/*
window.addEventListener("load", function(){
    document.getElementById("button").addEventListener('click', loadDoc);
});
*/
window.addEventListener("load", () => {
    document.getElementById("button").addEventListener('click', loadDoc);
});