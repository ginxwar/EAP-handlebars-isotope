$(function($){

	console.log(people);




	$("#results")
		.handlebars($("#programTemplate"), people)		
		.isotope({
			itemSelector: '.name',
			masonry : {
        columnWidth : 80
      }
		});



});	//on ready