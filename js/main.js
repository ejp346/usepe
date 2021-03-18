
$(document).ready(function() {

var controller = new ScrollMagic.Controller();
  var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 200})
          // animate color and top border in relation to scroll position
          .setTween("#expand", {width: "102%"}) // the tween durtion can be omitted and defaults to 1
          //.addIndicators({name: "2 (duration: 300)"}) // add indicators (requires plugin)
          .addTo(controller);
          scene.triggerHook(0.7);

var controller = new ScrollMagic.Controller();
  var scene = new ScrollMagic.Scene({triggerElement: "#trigger2", duration: 200})
          // animate color and top border in relation to scroll position
          .setTween("#expandtwo", {width: "102%"}) // the tween durtion can be omitted and defaults to 1
          //.addIndicators({name: "2 (duration: 300)"}) // add indicators (requires plugin)
          .addTo(controller);
          scene.triggerHook(0.5);

  $(window).scroll(function () {
if ($(window).scrollTop() >= 30) {
$('.nav').css('background','white');
$('.nav').css('box-shadow','0 2px 8px 0 rgba(0,0,0,0.1)');
$('.scrollnav').css('display','block');
$('.restnav').css('display','none');
} else {
$('.nav').css('background','transparent');
$('.nav').css('box-shadow','none');
$('.scrollnav').css('display','none');
$('.restnav').css('display','block');
}
});

  });