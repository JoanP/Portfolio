//http://stackoverflow.com/questions/12070970/how-to-use-the-new-affix-plugin-in-twitters-bootstrap-2-1-0/13151016#13151016

$('.nav-wrapper').height($(".navbar").height()-18);
function setAffixOfssetTop(){
  //affix the navbar after scroll below header 
  var pos = $("#home").outerHeight(true);
  $('.navbar').affix({ offset: {top: pos}});
};
function resizeDivs(){
  var viewportHeight = $(window).height();
  $("#home").css("height",viewportHeight-50);
  $("#contact").css("height",viewportHeight-50);
  $(".overlay-j").css("height",$(".overlay-text").height());

};
/*function myaffix() {
  //http://cmsdiscuss.com/how-to-get-dynamic-data-offset-values-for-bootstrap-3-affix-method
  var affixoffset = $('.navbar').offset().top
  $(window).scroll(function () {
  if ($(window).scrollTop() <= affixoffset) {
    $('.navbar').removeClass('affix');
  } else {
    $('.navbar').addClass('affix');
  }
  });
};*/
function smoothScrolling(){
  $('body').scrollspy({target: ".navbar", offset: 0}); 
  // Add smooth scrolling to all links inside a navbar
  $("#myNavbar a").on('click', function(event){
  // Prevent default anchor click behavior
  event.preventDefault();
  // Store hash (#)
  var hash = this.hash;
  // Using jQuery's animate() method to add smooth page scroll
  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area (the speed of the    animation)
  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 800, function(){
    // Add hash (#) to URL when done scrolling (default click behavior)
    window.location.hash = hash;
  });
});
};
$(document).ready(function () {
  resizeDivs();
  setAffixOfssetTop();
  smoothScrolling();
      console.log($(window).height());
      console.log($("#home").height());


  $('.img-zoom').hover(function() {
        $(this).addClass('transition');
 
    }, function() {
        $(this).removeClass('transition');
    });
  $(window).on("resize", function () {
    console.log($(window).width());
    resizeDivs();
    setAffixOfssetTop();
    myaffix();
    $(".navbar").removeData('affix').removeClass('affix affix-top affix-bottom');
  });
});



/*https://raw.githubusercontent.com/neilorangepeel/Free-Social-Icons/master/Flat/PNG/Github.png*/