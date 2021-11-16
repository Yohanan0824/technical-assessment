$(document).ready(function () {
  // for accordion
  $(".ui.accordion").accordion();
  // hide all small tags
  $(".suggest").hide();
  $(".congrats").hide();

  $(".yes").click(function () {
    $(".congrats").fadeIn();
    $(".suggest").fadeOut();
  });
  $(".no").click(function () {
    $(".congrats").fadeOut();
    $(".suggest").fadeIn();
  });

  $(".browser0").click(function () {
    $(".q1").fadeToggle();
  });

  $(".browser1").click(function () {
    $(".q2").fadeToggle();
  });
});
