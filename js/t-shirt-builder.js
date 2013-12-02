$('.colors').click(function() {
	
	var color_that_was_clicked = $(this).css('background-color');
	
	$('#canvas').css('background-color', color_that_was_clicked);
	
});



$('.style').click(function() {
	      
	var style_that_was_clicked = $(this).css('background-image');
	console.log(style_that_was_clicked);
	$('#canvas').css('background-image', style_that_was_clicked);
	
});

$('.logos').click(function() {

	//var new_image = "<img src='"++"'></img>";
	//$('#canvas').html(new_image);

	// Clone whatever logor was clicked
	var new_image = $(this).clone();

	new_image.addClass('logos_on_shirt');

	// Place the clone in the canvas
	$('#canvas').prepend(new_image);
	$('.logos_on_shirt').resizable().draggable();


									

});

$('#shirttext').keyup(function() {

	// Find out what is in the field
	var value = $(this).val();
	

	
	// Place the message in the card
	$('#shirttext-output').html(value).draggable();

});
 
		// changes text color and size
$(function(){

    $('#white-text').click(function(){
			
        $('#shirttext-output').animate({ color: 'white' }, 'fast');

   });		
	
	$('#black-text').click(function(){
			
        $('#shirttext-output').animate({ color: 'black' }, 'fast');

   });		
   
   $('#red-text').click(function(){
			
        $('#shirttext-output').animate({ color: 'red' }, 'fast');

   });		
	
	
	$('#sm').click(function(){
			
        $('#shirttext-output').animate({ fontSize: '30px' }, 'fast');

   });		
   
   $('#med').click(function(){
			
        $('#shirttext-output').animate({ fontSize: '50px' }, 'fast');

   });		
   
   $('#lrg').click(function(){
			
        $('#shirttext-output').animate({ fontSize: '70px' }, 'fast');

   });		
	
});





$('#refresh-btn').click(function(){
	$('#canvas').css('background-color', 'white');
	$('#canvas').css('background-image', '');
	
	$('#shirttext-output').html("");
	$('#shirttext').html("");
	$('.logos_on_shirt').remove();
	$('#shirttext').input("");
});

var total = 0;

function toShoppingCart(no, descr, prize)
{
	var myAmount = document.getElementById('amount_'+no);
	if(myAmount)
	{
		myAmount.value = parseInt(myAmount.value) + 1;
	}
	else
	{
		var html = '<div id="product_'+no+'"><input type="text" class="amount" name="prod_'+no+'" rel="'+prize+'" id="amount_'+no+'" value="1" />  '+
		descr + ' (' + prize + ' $)' +
		' <button type="button" onclick="killProduct('+no+')">x</button></div>';
		document.getElementById('cart_inner').innerHTML += html;
	}
	
	//total = total + prize;
	//document.getElementById('total').innerHTML = total + ' €';
	checkTotal();
}

function checkTotal()
{
	var inputs = document.getElementById('cart_inner').getElementsByTagName('input');
	var total = 0;
	for(var i=0;i<inputs.length; i++)
	{
		var amount = parseInt(inputs[i].value);
		var prize = parseFloat(inputs[i].getAttribute('rel'));
		total = total + (amount * prize)
	}
	document.getElementById('total').innerHTML = total + ' $';
	window.setTimeout(checkTotal, 1000);
}


function killProduct(no)
{
	return (elem=document.getElementById('product_'+no)).parentNode.removeChild(elem);
}
