let wins = 0;
let loses = 0;
let score = 0;
let valueGoal;

function setup() {
  var x = $(".goal");
  var valueGoal = Math.floor(Math.random() * (120 - 19) + 19);
  x.html("Target :<br />" + valueGoal)

  var gemValue1 = Math.floor(Math.random() * (12 - 1) + 1);
  console.log(gemValue1);
  var gemValue2 = Math.floor(Math.random() * (12 - 1) + 1);
  console.log(gemValue2);
  var gemValue3 = Math.floor(Math.random() * (12 - 1) + 1);
  console.log(gemValue3);
  var gemValue4 = Math.floor(Math.random() * (12 - 1) + 1);
  console.log(gemValue4);

  $(".gem1").click(addGem1);
  function addGem1() {
    var x = $(".score");
    score = score + gemValue1;
    x.html("Score :<br />" + score)
  }

  $(".gem2").click(addGem2);
  function addGem2() {
    var x = $(".score");
    score = score + gemValue2;
    x.html("Score :<br />" + score)
  }

  $(".gem3").click(addGem3);
  function addGem3() {
    var x = $(".score");
    score = score + gemValue3;
    x.html("Score :<br />" + score)
  }

  $(".gem4").click(addGem4);
  function addGem4() {
    var x = $(".score");
    score = score + gemValue4;
    x.html("Score :<br />" + score)
  }

  $(".gem1,.gem2,.gem3,.gem4").click(checkValue);
  function checkValue() {
    if (score > valueGoal) {
      loses++;
      alert("Try Again!");
      var x = $(".score");
      score = 0;
      x.html("Score :<br />" + score);
      console.log("score" + score);
      setup();
    }
    if (score === valueGoal) {
      wins++;
      alert("You Win!");
      var x = $(".score");
      score = 0;
      x.html("Score :<br />" + score);
      console.log("score" + score);
      setup();
    }
  }
  var winsDiv = $(".wins");
  winsDiv.html("Wins : " + wins)
  var losesDiv = $(".loses");
  losesDiv.html("Loses : " + loses)
}
