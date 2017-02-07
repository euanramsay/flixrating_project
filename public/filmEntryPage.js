var FilmEntryPage = function() {
  console.log("film entry page")
  document.getElementById("main").innerHTML = "";
  var br_one = document.createElement("br");
  var br_two = document.createElement("br");
  var br_three = document.createElement("br");
  var film_one = document.createElement("input");
  film_one.setAttribute("type", "text");
  film_one.setAttribute("placeholder", "Type film one title here");
  var film_two = document.createElement("input");
  film_two.setAttribute("type", "text");
  film_two.setAttribute("placeholder", "Type film two title here");
  var film_three = document.createElement("input");
  film_three.setAttribute("type", "text");
  film_three.setAttribute("placeholder", "Type film three title here");
  var button = document.createElement("button");
  button.innerText = "Submit";
  button.addEventListener ("click", function() {
    var film_list = JSON.parse(localStorage.selection);
    film_list[0].title = film_one.value;
    film_list[1].title = film_two.value;
    film_list[2].title = film_three.value;
    localStorage.selection = JSON.stringify(film_list);
    console.log(film_list);
    new FilmSearch();
  });
  main.appendChild(film_one);
  main.appendChild(br_one);
  main.appendChild(film_two);
  main.appendChild(br_two);
  main.appendChild(film_three);
  main.appendChild(br_three);
  main.appendChild(button);
};