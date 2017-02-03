var StartPage = function() {
  console.log("startPage func")
  var main = document.getElementById('main');
  var question = document.createElement('p');
  question.innerText = "What is the best film from each decade?";
  var button = document.createElement('button');
  button.innerText = "Begin"
  main.appendChild(question);
  question.append(button);
  button.addEventListener ("click", function() {
    alert("did something");
  });
}