jQuery(document).ready(function() {
	$('.shadow').toggle();
	$('.button').on('click', function() {
		$('.me').toggleClass('animation');
		console.log("click");
	})
	$('#sayMyName').on('click',function() {
		var myName = $('#nameInput').val();
		$('#talkBubble').html("<h1>"+myName+"</h1>");
	})
	$('#grocerybutton').on('click', function() {
		console.log("hhhh")
		var items = [];
		var listItem = $('#shoppingInput').val();
		for (i=0; i < items.length; i++) {
			list += "<li>"+items[i]+"</i>"
		}
		items.push(listItem)
		$('#recipe').html('<h2>'+items+'</h2>');
	})
})