var targetNumber = Math.floor(Math.random() *100)
  
    $("#number-to-guess").text(targetNumber);
  
    var counter = 0;
  
  
    var numberOptions = [Math.floor(Math.random()* 10), Math.floor(Math.random()* 10),Math.floor(Math.random()* 10) ];
    $("#cry1").on("click", function() {
        counter += Math.floor(Math.random()* 10)
        alert("Your new score is: " + counter);
    })
    $("#cry2").on("click", function() {
        counter += Math.floor(Math.random()* 10)
        alert("Your new score is: " + counter);
    })

    $("#cry3").on("click", function() {
        counter += Math.floor(Math.random()* 10)
        alert("Your new score is: " + counter);
    })

    $("#cry4").on("click", function() {
        counter += Math.floor(Math.random()* 10)
        alert("Your new score is: " + counter);
    })
     if (counter === targetNumber){
        alert("You win!")
}
else if (counter >= targetNumber) {
alert("You lose!!");
}