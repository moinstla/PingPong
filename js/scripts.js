var pingPong = function(userInput) {
  var numbersArray = [];

  for (i = 1; i<= userInput; i += 1) {
    numbersArray.push(i);
  };
  var pingPongArray =
  numbersArray.map(function(number){
    if ((number % 3 === 0) && (number % 5 !== 0)) {
      return "ping";
    } else if ((number % 5 === 0) && (number % 3 !== 0)) {
      return "pong";
    } else if ((number % 15 === 0)){
      return "pingpong";
    } else {
      return number
    }
    });
$(".result").text(pingPongArray);
};



$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#userNumber").val());
    var result = pingPong(userInput);
    //$(".result").text(?????);




  });
});
