window.onload = function(){
	
$('form').click(function(){
		//Grabs ID for food item
		var user_selection = $('#breakfast_item').val();
		var breakfast_pic = "assets/" + String(user_selection) + ".jpg";
		console.log(user_selection);
		console.log(breakfast_pic);

		breakfast_pic = "<img id='breakfast' src='" + breakfast_pic + "' alt='NO IMAGE'>";
		console.log("loading breakfast picture...");
		$('#selection').append(breakfast_pic);
	});
}
