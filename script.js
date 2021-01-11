$(window).scroll(function() {    
  var scroll = $(window).scrollTop();
  var objectSelect = $("#separadorcapa2");
  var objectPosition = objectSelect.offset().top;
  if (scroll > objectPosition) {
      $(".encurtamos").addClass("encurtamosanimado");
  } else {
      $(".encurtamos").removeClass("encurtamosanimado");
  }
});



$(window).scroll(function() {    
  var scroll = $(window).scrollTop();
  var objectSelect = $("#separadorcapa2");
  var objectPosition = objectSelect.offset().top;
  if (scroll > objectPosition) {
      $(".distancias").addClass("distanciasanimado");
  } else {
      $(".distancias").removeClass("distanciasanimado");
  }
});


$(window).scroll(function() {    
  var scroll = $(window).scrollTop();
  var objectSelect = $("#ref1");
  var objectPosition = objectSelect.offset().top;
  if (scroll > objectPosition) {
      $(".faixa2").addClass("faixa2animado");
  } else {
      $(".faixa2").removeClass("faixa2animado");
  }
});


$(window).scroll(function() {
  var scrollBottom = $(window).scrollTop() + $(window).height();    
  var scroll = $(window).scrollTop();
  var objectSelect = $(".nomecontato");
  var objectPosition = objectSelect.offset().top;
  if (scrollBottom > objectPosition) {
      $(".fala").addClass("falaanimado");
  } else {
      $(".fala").removeClass("falaanimado");
  }
});



//VIDEO VIDEO VIDEO 
$("video").click(function(e){

  // handle click if not Firefox (Firefox supports this feature natively)
  if (typeof InstallTrigger === 'undefined') {

      // get click position 
      var clickY = (e.pageY - $(this).offset().top);
      var height = parseFloat( $(this).height() );

      // avoids interference with controls
      if (clickY > 0.82*height) return;

      // toggles play / pause
      this.paused ? this.play() : this.pause();
  }
});



let video = document.getElementById("video");

let stopButton = document.getElementById("html5-video-stop");

function stopVideo() {
  video.pause();
  video.currentTime = 0;
}

stopButton.addEventListener('click', stopVideo);


function myFunction() {
  var x = document.getElementById("video");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


function myFunction2() {
  var x = document.getElementById("video");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


$(".logocapa").click(function(){
  $("#separadorvideo").addClass("separadorvideochange");
});

$(".logocapa").click(function(){
  $("#separadorvideo").removeClass("separadorvideochange");
});

//POPUPS

//STU
$(".stu").click(function(){
  $("#popup-bg-stu").addClass("popup-bg-stu-change");
});

$(".close-stu").click(function(){
  $("#popup-bg-stu").removeClass("popup-bg-stu-change");
});


//RTM
$(".rtm").click(function(){
  $("#popup-bg-rtm").addClass("popup-bg-rtm-change");
});

$(".close-rtm").click(function(){
  $("#popup-bg-rtm").removeClass("popup-bg-rtm-change");
});


//BTC
$(".btc").click(function(){
  $("#popup-bg-btc").addClass("popup-bg-btc-change");
});

$(".close-btc").click(function(){
  $("#popup-bg-btc").removeClass("popup-bg-btc-change");
});


//MANGOLAB
$(".mangolab").click(function(){
  $("#popup-bg-mangolab").addClass("popup-bg-mangolab-change");
});

$(".close-mangolab").click(function(){
  $("#popup-bg-mangolab").removeClass("popup-bg-mangolab-change");
});


//TOCA12
$(".toca12").click(function(){
  $("#popup-bg-toca12").addClass("popup-bg-toca12-change");
});

$(".close-toca12").click(function(){
  $("#popup-bg-toca12").removeClass("popup-bg-toca12-change");
});


//DIGITALAWARDS
$(".digitalawards").click(function(){
  $("#popup-bg-digitalawards").addClass("popup-bg-digitalawards-change");
});

$(".close-digitalawards").click(function(){
  $("#popup-bg-digitalawards").removeClass("popup-bg-digitalawards-change");
});


//PJB
$(".pjb").click(function(){
  $("#popup-bg-pjb").addClass("popup-bg-pjb-change");
});

$(".close-pjb").click(function(){
  $("#popup-bg-pjb").removeClass("popup-bg-pjb-change");
});


















/* 

document.getElementById('stu').addEventListener("click", function() {

  document.querySelector('.popup-bg').style.display = "flex";

});

document.querySelector('.close').addEventListener("click", function() {
	document.querySelector('.popup-bg').style.display = "none";
});


*/