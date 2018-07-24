$(document).ready(function(){$('.js--section-features').waypoint(function(direction){if(direction=='down'){$('nav').addClass('sticky')}
else{$('nav').removeClass('sticky')}},{offset:'60px;'});$('.js--scroll-to-plans').click(function(){$('html, body').animate({scrollTop:$('.js--section-plans').offset().top},1500)});$('.js--scroll-to-start').click(function(){$('html, body').animate({scrollTop:$('.js--section-features').offset().top},1000)});$(function(){$('a[href*=#]:not([href=#])').click(function(){if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&&location.hostname==this.hostname){var target=$(this.hash);target=target.length?target:$('[name='+this.hash.slice(1)+']');if(target.length){$('html,body').animate({scrollTop:target.offset().top},800);return!1}}})});$('.js--wp-1').waypoint(function(direction){$('.js--wp-1').addClass('animated fadeIn')},{offset:'50%'});$('.js--wp-2').waypoint(function(direction){$('.js--wp-2').addClass('animated fadeInUp')},{offset:'50%'});$('.js--wp-3').waypoint(function(direction){$('.js--wp-3').addClass('animated fadeIn')},{offset:'50%'});$('.js--wp-4').waypoint(function(direction){$('.js--wp-4').addClass('animated pulse')},{offset:'50%'});$('.js--wp-7').waypoint(function(direction){$('.js--wp-7').addClass('animated zoomIn')},{offset:'50%'});$('.js--wp-5').waypoint(function(direction){$('.js--wp-5').addClass('animated slideInDown')},{offset:'50%'});$('.js--wp-6').waypoint(function(direction){$('.js--wp-6').addClass('animated rollIn')},{offset:'50%'});$('.js--nav-icon').click(function(){var nav=$('.js--main-nav');var icon=$('.js-nav-icon i');nav.slideToggle(200);if(icon.hasClass('ion-navicon')){icon.addClass('ion-close-round');icon.removeClass('ion-navicon')}
else{icon.addClass('ion-navicon');icon.removeClass('ion-close-round')}});var map=new GMaps({div:'.map',lat:-6.8207009,lng:39.295,zoom:15});map.addMarker({lat:-6.8207009,lng:39.2851499,title:'Dar es salaam',infoWindow:{content:'<p>sadtehie Head Office.</p>'}})})






























