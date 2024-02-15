/*
    http://www.w3schools.com/html/html5_geolocation.asp
    https://www.w3schools.com/js/js_api_geolocation.asp
    http://wiki.openstreetmap.org/wiki/Nominatim  
*/
/* 
This wouldn't work since javascript doesn't know "currentLocation" until the document loaded
let x = document.getElementById("currentLocation");
*/
let x;
function getLocation() {
  // navigator is provided by DOM : latitude and longitude
  if (navigator.geolocation) {
    // showPosition is callback function: getCurrentPosition passes position (aka event handler)
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;

  fetch("http://nominatim.openstreetmap.org/reverse?" +
            "format=json&lat=" + position.coords.latitude + "&lon=" + position.coords.longitude)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      if (data.address.house_number) {
        document.getElementById("address").value = data.address.house_number + " ";
      }
      document.getElementById("address").value += data.address.road;
      document.getElementById("city").value = (data.address.town) ? data.address.town : data.address.city;
      document.getElementById("state").value = data.address.state;
      document.getElementById("zip").value = data.address.postcode;
      // Convert a JavaScript object into a string with JSON.stringify()
      // https://www.w3schools.com/js/js_json_intro.asp
      document.getElementById("location").innerHTML = JSON.stringify(data);
    })
    .catch(error => {
      console.error("Fetch error:", error);
    });
}
window.addEventListener("load", ()=> {
  x = document.getElementById("currentLocation");
  document.getElementById("autoFill").addEventListener("click",getLocation);
});