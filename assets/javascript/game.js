$(document).ready(function(){

  // DEFINE GLOBAL VARIABLES

  var targetQuota;
  var yourQuota;
  var message;
  var bonus;
  var demerits;
  var crystalValue;
  var diamond;
  var ruby;
  var opal;
  var sapphire;

  startGame();

  // START GAME AND SET UP BOARD COUNT

  function startGame(){
    bonus = 0;
    demerits = 0;
    resetGame();
  }

  // MATH FOR RANDOM INTEGER TO ASSIGN TO GEMSTONES

  function randomNumber(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }  

  // RESET GAME VARIABLES
  function resetGame(){
    // MATH FOR RANDOM INTEGER TO ASSIGN TO TARGETQUOTA AT GAME START
    targetQuota=randomNumber(19,120);
    $("#targetQuota").text(targetQuota);
    // ASSIGN ZERO VALUE TO YOURQUOTA AT GAME START
    yourQuota = 0;
    $("#yourQuota").text(yourQuota);
    // MATH FOR RANDOM INTEGER TO ASSIGN TO DIAMOND AT GAME START
    diamond=randomNumber(1,12);
    $("#diamond").attr("value",diamond);
    // MATH FOR RANDOM INTEGER TO ASSIGN TO RUBY AT GAME START
    ruby=randomNumber(1,12);
    $("#ruby").attr("value",ruby);
    // MATH FOR RANDOM INTEGER TO ASSIGN TO OPAL AT GAME START
    opal=randomNumber(1,12);
    $("#opal").attr("value",opal);
    // MATH FOR RANDOM INTEGER TO ASSIGN TO SAPPHIRE AT GAME START
    sapphire=randomNumber(1,12);
    $("#sapphire").attr("value",sapphire);
  }

  // CLICK LISTENER TO COMPILE POINTS AND MESSAGE USER OF WIN OR LOSS - BONUS OR DEMERIT
  $(".gem").on("click",function(){
    crystalValue=$(this).attr("value");

    yourQuota=yourQuota + parseInt(crystalValue);
    $("#yourQuota").text(yourQuota);

    if(yourQuota===targetQuota){
      bonus = bonus + 10;
      $("#bonus").text(bonus);
      $("#message").text("You hit your quota! Great Work!");
      resetGame();
    } else if (yourQuota >= targetQuota){
      demerits = demerits + 1;
      $("#demerits").text(demerits);
      $("#message").text("Arrrgh! You mined way more than we needed!");
      resetGame();
    } else if (demerits === 3){
      alert("You got too many demerits! You're fired!! Just kidding, but we do have to take back your bonus. Time to start from scratch...");
      restartGame();
    }

    // RESTART GAME VARIABLES
    function restartGame(){
      bonus = 0;
      $("#bonus").text(bonus);
      demerits = 0;
      $("#demerits").text(demerits);
      message = "Alright, get back to work!";
      $("#message").text(message);
    }
  });
});