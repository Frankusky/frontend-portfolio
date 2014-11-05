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
	$('#searchEngine').mouseenter(function() {
		$(this).animate({
			height: '+=80px',
			width: "+=80px",
		});
		$("#textoSea").show("slow");
	});
	$("#searchEngine").mouseleave(function(){
		$(this).animate({
			height: "-=80px",
			width: "-=80px"
		});
		$("#textoSea").hide("slow");
	});
	$("#searchEngine").click(function(){
		window.open('https://github.com/Frankusky/MotorBusqueda')
	});
	
//Inventory div
	$('#inventario').mouseenter(function() {
		$(this).animate({
			height: '+=80px',
			width: "+=80px",
		});
		$("#textoInv").show("slow");
	});
	$("#inventario").mouseleave(function(){
		$(this).animate({
			height: "-=80px",
			width: "-=80px"
		});
		$("#textoInv").hide("slow");
	});
	$("#inventario").click(function(){
		window.open('https://github.com/Frankusky/MotorBusqueda')
	});
	
//This portafolio div
	$('#portafolio').mouseenter(function() {
		$(this).animate({
			height: '+=80px',
			width: "+=80px",
		});
		$("#textoPor").show("slow");
	});
	$("#portafolio").mouseleave(function(){
		$(this).animate({
			height: "-=80px",
			width: "-=80px"
		});
		$("#textoPor").hide("slow");
	});
	$("#portafolio").click(function(){
		window.open('https://github.com/Frankusky/frontend-portfolio')
	});
	
//battleship div
	$('#battleship').mouseenter(function() {
		$(this).animate({
			height: '+=80px',
			width: "+=80px",
		});
		$("#textoBat").show("slow");
	});
	$("#battleship").mouseleave(function(){
		$(this).animate({
			height: "-=80px",
			width: "-=80px"
		});
		$("#textoBat").hide("slow");
	});
	$("#battleship").click(function(){
		window.open('https://github.com/Frankusky/Proyecto-final')
	});
});