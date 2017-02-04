var StartPage = function() {
  console.log("startPage func")
  var main = document.getElementById('main');
  var question = document.createElement('p');
  question.innerText = "What is the best film from each decade?";
  var button = document.createElement('button');
  button.addEventListener ("click", function() {
    new FilmEntryPage();
  });
  button.innerText = "Begin"
  main.appendChild(question);
  question.append(button);
  localStorage.selection = JSON.stringify(films_object);
  console.log(localStorage.selection);
}

var films_object = [
{"film_id": "1", "decade":"1960s","title":""},
{"film_id": "2", "decade":"1960s","title":""},
{"film_id": "3", "decade":"1960s","title":""}, 
{"film_id": "4", "decade":"1970s","title":""}, 
{"film_id": "5", "decade":"1970s","title":""}, 
{"film_id": "6", "decade":"1970s","title":""}, 
{"film_id": "7", "decade":"1980s","title":""}, 
{"film_id": "8", "decade":"1980s","title":""}, 
{"film_id": "9", "decade":"1980s","title":""}, 
{"film_id": "10", "decade":"1990s","title":""}, 
{"film_id": "11", "decade":"1990s","title":""}, 
{"film_id": "12", "decade":"1990s","title":""}, 
{"film_id": "13", "decade":"2000s","title":""}, 
{"film_id": "14", "decade":"2000s","title":""}, 
{"film_id": "15", "decade":"2000s","title":""}
];
