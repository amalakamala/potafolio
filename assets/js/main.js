$(document).ready(function() {


	$('.carousel.carousel-slider').carousel({fullWidth: true});

	$('.carousel').carousel();
		setInterval(function() {
		$('.carousel').carousel('next');
	}, 3000);

	$('.button-collapse').sideNav({
    	menuWidth: 300, // Default is 300
    	edge: 'left', 
    	closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    	draggable: true, // Choose whether you can drag to open on touch screens,
    });
 
    //smoove transition
    $('.mov').smoove({opacity:'0', moveY: '20px',});
});