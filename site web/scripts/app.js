$(window).load(function() {
 var theWindow = $(window),
 fond = $('.background'),
 ratioImage = $bg.width() / $bg.height();
 function redimensionnerFond() {

 if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
 $fond.removeClass().addClass('touteLaHauteur');
 } else {
 $fond.removeClass().addClass('bgwidth');
 }
 }

 theWindow.resize(redimensionnerFond).trigger(resize);
});
