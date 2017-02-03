var FilmEntryPage = function() {
  console.log("film entry page")
  document.getElementById("main").innerHTML = "";
  var form = document.createElement("form");
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
  var submit = document.createElement("button");
  submit.innerText = "Submit";
  submit.addEventListener ("click", function() {
    new FilmEntryPage();
  });
  var first_film = film_one.value;
  main.appendChild(form);
  form.appendChild(film_one);
  form.appendChild(br_one);
  form.appendChild(film_two);
  form.appendChild(br_two);
  form.appendChild(film_three);
  form.appendChild(br_three);
  form.appendChild(submit);
  console.log(first_film);
};