$(document).ready(function() {
	$("#welcome").slideDown(1000);
	$(this).mousedown(function(event) {
    switch (event.which) {
        case 3:
            alert('Wops. Right click disabled! Don\'t hate me! :( ');
            break;
    	}
	});


//Search Engine div
	$('.searchEngine').mouseenter(function() {
		$(this).animate({
			height: '+=80px',
			width: "+=80px",
		});
		$(".textoSea").show("slow");
	});
	$(".searchEngine").mouseleave(function(){
		$(this).animate({
			height: "-=80px",
			width: "-=80px"
		});
		$(".textoSea").hide("slow");
	});
	$(".searchEngine").click(function(){
		window.open('https://github.com/Frankusky/MotorBusqueda')
	});
	
//Inventory div
	$('.inventario').mouseenter(function() {
		$(this).animate({
			height: '+=80px',
			width: "+=80px",
		});
		$(".textoInv").show("slow");
	});
	$(".inventario").mouseleave(function(){
		$(this).animate({
			height: "-=80px",
			width: "-=80px"
		});
		$(".textoInv").hide("slow");
	});
	$(".inventario").click(function(){
		window.open('https://github.com/Frankusky/Proyecto-maquina')
	});
	
//This portafolio div
	$('.portafolio').mouseenter(function() {
		$(this).animate({
			height: '+=80px',
			width: "+=80px",
		});
		$(".textoPor").show("slow");
	});
	$(".portafolio").mouseleave(function(){
		$(this).animate({
			height: "-=80px",
			width: "-=80px"
		});
		$(".textoPor").hide("slow");
	});
	$(".portafolio").click(function(){
		window.open('https://github.com/Frankusky/frontend-portfolio')
	});
	
//battleship div
	$('.battleship').mouseenter(function() {
		$(this).animate({
			height: '+=80px',
			width: "+=80px",
		});
		$(".textoBat").show("slow");
	});
	$(".battleship").mouseleave(function(){
		$(this).animate({
			height: "-=80px",
			width: "-=80px"
		});
		$(".textoBat").hide("slow");
	});
	$(".battleship").click(function(){
		window.open('https://github.com/Frankusky/Proyecto-final')
	});

//Adivinador div
	$('.adivinator').mouseenter(function() {
		$(this).animate({
			height: '+=80px',
			width: "+=80px",
		});
		$(".textoAdi").show("slow");
	});
	$(".adivinator").mouseleave(function(){
		$(this).animate({
			height: "-=80px",
			width: "-=80px"
		});
		$(".textoAdi").hide("slow");
	});
	$(".adivinator").click(function(){
		window.open('https://github.com/Frankusky/Proyecto-adivinador')
	});

//Correo div
	$('.correo').mouseenter(function() {
		$(this).animate({
			height: '+=80px',
			width: "+=80px",
		});
		$(".textoCap").show("slow");
	});
	$(".correo").mouseleave(function(){
		$(this).animate({
			height: "-=80px",
			width: "-=80px"
		});
		$(".textoCap").hide("slow");
	});
	$(".correo").click(function(){
		window.open('https://github.com/Frankusky/Proyecto-enviar-correo')
	});

//footer div
	$(".footer").hover(function(event){
		$(".footer").effect( "bounce", "slow");
	});
	$(".footer").click(function(){
		window.open('http://fb.me/Frankusky')
	});
	
//mario animation
	var mario = $('.mario');
	var width = $(window).width();
	var height = mario.height();

	mario.each(function foo() {
	var left = (Math.random() * width) | 0;
	var time = Math.random() * (800 - 400) + 5000 | 0;
	while (left>(width-150)||left<150){
		left = (Math.random() * width) | 0;
	}

    $(this).animate({
        left: left,
    }, time, foo);
});
});