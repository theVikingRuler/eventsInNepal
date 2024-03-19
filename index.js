// Slideshow

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}


// Filter By City
$(document).ready(function(){
  $("select#filterByCity").click(function(){
    var idOfCity = $(this).find('option:selected').val();
    if(idOfCity === "All") {
      $("body").find("div.event-card").removeClass("hidden");
    }
    if(idOfCity === "Kathmandu") {
      $("body").find("div.event-card").addClass("hidden");
      $("body").find(".Kathmandu").removeClass("hidden");
    }
    if(idOfCity === "Nepalgunj") {
      $("body").find("div.event-card").addClass("hidden");
      $("body").find(".Nepalgunj").removeClass("hidden");
    }
    if(idOfCity === "Bhaktapur") {
      $("body").find("div.event-card").addClass("hidden");
      $("body").find(".Bhaktapur").removeClass("hidden");
    }
  })
});