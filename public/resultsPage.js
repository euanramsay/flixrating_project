var ResultsPage = function() {
  console.log("results page")
  document.getElementById("main").innerHTML = "";
  var title = document.createElement("p");
  var br_one = document.createElement("br");
  var sixties = document.createElement("p");
  var seventies = document.createElement("p");
  var eighties = document.createElement("p");
  var nineties = document.createElement("p");
  var twothousands = document.createElement("p");
  var br_two = document.createElement("br");
  var button = document.createElement("button");
  title.innerText = "Your top films of all time:";
  sixties.innerText = "1960s - The Great Escape";
  seventies.innerText = "1970s - Star Wars";
  eighties.innerText = "1980s - Empire of the Sun";
  nineties.innerText = "1990s - The Shawshank Redemption";
  twothousands.innerText = "2000s - Amelie";
  button.innerText = "Start Again";
  button.addEventListener ("click", function() {
    console.log(finished);
    new StartPage();
  });
  
  main.appendChild(title);
  main.appendChild(br_one);
  main.appendChild(sixties);
  main.appendChild(seventies);
  main.appendChild(eighties);
  main.appendChild(nineties);
  main.appendChild(twothousands);
  main.appendChild(br_two);
  main.appendChild(button);
};