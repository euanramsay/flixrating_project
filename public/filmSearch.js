var listing = [];

var FilmSearch = function() {
  document.getElementById("main").innerHTML = "";
  var message = document.createElement('p');
  var films = JSON.parse(localStorage.selection);
  message.innerText = "Searching...";
  main.appendChild(message);

  var film_list = JSON.parse(localStorage.selection);
  title_one = film_list[0].title;
  title_two = film_list[1].title;
  title_three = film_list[2].title;

  var film_array = [title_one, title_two, title_three];

  search(film_array, function() {
    console.log(listing);
    new FilmEntryPage;
  });

}


function search(array, callback) {
  var step = 0;
  for (step = 0; step < array.length; step++) {
    apiSearch(array[step]);
  }
  callback();
}

var apiSearch = function(title) {
  var url = 'http://www.omdbapi.com/?t=' + title + '&plot=full&r=json'
  console.log(url);
  makeRequest(url, requestComplete);
}

var makeRequest = function(url, callback) {
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = callback;
  request.send();
}

var requestComplete = function() {
  console.log("Success!");
  // if (this.status != 200) return;
  var jsonString = this.responseText;
  var film_info = JSON.parse(jsonString);
  listing.push(film_info);

}


