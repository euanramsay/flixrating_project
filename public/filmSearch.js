var FilmSearch = function() {
  console.log("film search");
  document.getElementById("main").innerHTML = "";
  var message = document.createElement('p');
  var films = JSON.parse(localStorage.selection);
  message.innerText = "Searching...";
  main.appendChild(message);
}