let wins = 0;
let loses = 0;
let score = 0;
let valueGoal;
let gemValue1 = 0;
let gemValue2 = 0;
let gemValue3 = 0;
let gemValue4 = 0;

function mute() {
  document.getElementById('soundtrack').muted=!document.getElementById('soundtrack').muted;
}

function setup() {

  var x = $(".goal");
  var valueGoal = Math.floor(Math.random() * (120 - 19) + 19);
  x.html("Target :<br />" + valueGoal)
    var gemValue1 = Math.floor(Math.random() * (12 - 1) + 1);
    var gemValue2 = Math.floor(Math.random() * (12 - 1) + 1);
    var gemValue3 = Math.floor(Math.random() * (12 - 1) + 1);
    var gemValue4 = Math.floor(Math.random() * (12 - 1) + 1);
    while(gemValue1 === gemValue4) {
      var gemValue1 = Math.floor(Math.random() * (12 - 1) + 1);
    }
    while(gemValue2 === gemValue4 || gemValue2 === gemValue1) {
      var gemValue2 = Math.floor(Math.random() * (12 - 1) + 1);
    }
    while(gemValue3 === gemValue4 || gemValue3 === gemValue2 || gemValue3 === gemValue1) {
      var gemValue3 = Math.floor(Math.random() * (12 - 1) + 1);
    }
    console.log(gemValue1);
    console.log(gemValue2);
    console.log(gemValue3);
    console.log(gemValue4);

    // var gem1 = $(".gem1");
    // var gem2 = $(".gem2");
    // var gem3 = $(".gem3");
    // var gem4 = $(".gem4");

    // $(gem1 & gem2 & gem3 & gem4).click(function () {
    //   var x = $(".score");
    //   score = score + gemValue1;
    //   x.html("Score :<br />" + score)
    //   var y = $(".score");
    //   score = score + gemValue2;
    //   y.html("Score :<br />" + score)
    //   var z = $(".score");
    //   score = score + gemValue3;
    //   z.html("Score :<br />" + score)
    //   var q = $(".score");
    //   score = score + gemValue4;
    //   q.html("Score :<br />" + score)
    // });

  $(".gem1").click(addGem1);
  function addGem1() {
    var x = $(".score");
    score = score + gemValue1;
    x.html("Score :<br />" + score);
  }

  $(".gem2").click(addGem2);
  function addGem2() {
    var x = $(".score");
    score = score + gemValue2;
    x.html("Score :<br />" + score);
  }

  $(".gem3").click(addGem3);
  function addGem3() {
    var x = $(".score");
    score = score + gemValue3;
    x.html("Score :<br />" + score);
  }

  $(".gem4").click(addGem4);
  function addGem4() {
    var x = $(".score");
    score = score + gemValue4;
    x.html("Score :<br />" + score);
  }

  $(".gem1,.gem2,.gem3,.gem4").click(checkValue);
  function checkValue() {
    if (score > valueGoal) {
      loses++;
      alert("Try Again!");
      var x = $(".score");
      score = 0;
      x.html("Score :<br />" + score);
      $(".gem1,.gem2,.gem3,.gem4").off();
      setup();
    }
    if (score === valueGoal) {
      wins++;
      $.playSound('assets/audio/gem-bag.mp3')
      alert("You Win!");
      var x = $(".score");
      score = 0;
      x.html("Score :<br />" + score);
      $(".gem1,.gem2,.gem3,.gem4").off();
      setup();
    }
  }
  var winsDiv = $(".wins");
  winsDiv.html("Wins : &nbsp;" + wins)
  var losesDiv = $(".loses");
  losesDiv.html("Loses : " + loses)
}
