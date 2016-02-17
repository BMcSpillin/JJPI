$(document).ready(function() {
$("#litUp").hide();

  function center() {
    var lamplight = $("#lamplight");
    var litUp = $("#litUp");
    var lw = lamplight.width();
    var uw = litUp.width();
    var lh = lamplight.height();
    var uh = litUp.height();

    $("#litUp").css("left", (lw - uw)/2);
    $("#litUp").css("top", (uh - lh)/2);
  // I am having a tough time getting it to center vertically, when
  // centering horizontally was easy for some reason.  is it just
  // my math?
  };


  var glow = function() {
    $("#litUp").fadeIn(3000);
    center();
  };

  var noGlow = function() {
    $("#litUp").fadeOut(2000)
  }

  $("aside").hover(glow, noGlow);

});
