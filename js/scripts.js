$(document).ready(function(){
  $(".turtleSelect").click(function(){
    $(".turtle").show();
    $(".snake").hide();
    $(".frog").hide();
  });

  $(".snakeSelect").click(function(){
    $(".snake").show();
    $(".turtle").hide();
    $(".frog").hide();
  });

  $(".frogSelect").click(function(){
    $(".frog").show();
    $(".snake").hide();
    $(".turtle").hide();
  });
});
