$(document).ready(function(){
  $(".button").click(function() {
    event.preventDefault();
    var animals = $("input:radio[name=animals]:checked").val();
    if (animals === "turtles") {
      $(".turtle").show();
      $(".snake").hide();
      $(".frog").hide();
    } else if (animals === "snakes") {
      $(".snake").show();
      $(".turtle").hide();
      $(".frog").hide();
    } else {
      $(".frog").show();
      $(".turtle").hide();
      $(".snake").hide();
    }
  });
});
