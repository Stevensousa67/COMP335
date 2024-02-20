function uploadFile(event){
    // reference: https://www.w3schools.com/jsref/event_preventdefault.asp
    event.preventDefault(); // prevent form default event which refreshes the page
    
    fetch('http://localhost:3000/upload', {
      method: 'POST',
      body: new FormData(document.getElementById("upload")) // Get the form data
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text(); // assuming response is text
    })
    .then(data => {
      console.log("Upload file successed");
      document.getElementById("result").innerHTML = "<br /> Upload file succeed!! <br /> <h3>" + data + "</h3>";
    })
    .catch(error => {
      console.error("Fetch error:", error);
      document.getElementById("result").innerHTML = "<br /> Upload file failed!! <br />";
    });
}

window.addEventListener("load", () => {
  document.getElementById("submit").addEventListener("click", uploadFile);
});