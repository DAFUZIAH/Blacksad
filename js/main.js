var buttonAbout = document.querySelectorAll('.about');
var buttonSummary = document.querySelectorAll('.summary');
var textAbout = document.querySelectorAll('.second-text');
var textSummary = document.querySelectorAll('.first-text');
var officeButton = document.querySelector('.button-to-office');
var officeScene = document.querySelector('.police-office');
var page = document.querySelector('html');
var jakeButton = document.querySelector('.button-to-jake');
var jakeStrips = document.querySelector('.jake');
var bagStrips = document.querySelector('.bag');
var leonButton = document.querySelector('.button-to-inspect')
var card = document.querySelector('.card');
var collectButton = document.querySelector('.button-to-collect');
var sixthCaption = document.querySelector('.sixth-caption');
var graveButton = document.querySelector('.button-to-grave');
var grave = document.querySelector('.grave');
var shootButton = document.querySelector('.button-to-video');
var video = document.querySelector('.teaser');
var startButton = document.querySelector('.header-content-button-circle');
var firstCaption = document.querySelector('.first-caption');

for(i=0; i<buttonAbout.length; i++){
  buttonAbout[i].addEventListener('click', function(){
    var albumNr = this.getAttribute('data-album');
    buttonAbout[albumNr].classList.add( 'is-colored' );
    textAbout[albumNr].classList.remove( 'is-removed' );
    buttonSummary[albumNr].classList.remove( 'is-colored' );
    textSummary[albumNr].classList.add( 'is-removed' );
  })

  buttonSummary[i].addEventListener('click', function(){
    var albumNr = this.getAttribute('data-album');
    buttonAbout[albumNr].classList.remove( 'is-colored' );
    textAbout[albumNr].classList.add( 'is-removed' );
    buttonSummary[albumNr].classList.add( 'is-colored' );
    textSummary[albumNr].classList.remove( 'is-removed' );
  })
}

startButton.addEventListener('click', function() {
  firstCaption.scrollIntoView();
})

officeButton.addEventListener('click', function() {
  officeScene.classList.remove('is-removed');
  page.classList.remove('has-no-scroll');
  officeScene.scrollIntoView();
})

jakeButton.addEventListener('click', function(){
  jakeStrips.classList.add('is-visible');
  bagStrips.classList.add('is-visible');
  page.classList.remove('has-no-scroll');
})

leonButton.addEventListener('click', function(){
  card.classList.add('is-visible');
  page.classList.remove('has-no-scroll');
})

collectButton.addEventListener('click', function(){
  page.classList.remove('has-no-scroll');
  sixthCaption.scrollIntoView();
})

graveButton.addEventListener('click', function(){
  page.classList.remove('has-no-scroll');
  grave.classList.add('is-visible');
  grave.scrollIntoView();
})

shootButton.addEventListener('click', function(){
  page.classList.remove('has-no-scroll');
  video.scrollIntoView();
})

$('.header').mousemove(function(e) {
  var x = (e.pageX * -1 / 50), y = (e.pageY * -1 / 50);
  $(this).css('background-position', x + 'px ' + y + 'px');
});

$('.shop').mousemove(function(e) {
  var x = (e.pageX * -1 / 50), y = (e.pageY * -1 / 50);
  $(this).css('background-position', x + 'px ' + y + 'px');
});