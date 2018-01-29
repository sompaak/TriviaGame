  



$(document).ready(function () 
{
	var wins = 0;
	var losses = 0;
	//var hasBeenClicked = false;
	$(".questions").hide();
	//checkWins();



	 	$("#start").click(function(){

	 	$("#start").hide();
	 	
	 	$(".qa1").show();

		$('#button-1').click(function () 
		{
				
				wins++;
				console.log(wins)
				$(".qa1").hide();
				$(".qa2").show();
			    // The link has been clicked.
			 
			
		});

		$("#losses, #losses-1, #losses-2 ").click(function () 
			{
				
				losses++;
				console.log("losses "+losses);
				$(".qa1").hide();
				$(".qa2").show();
			});

		$('#button-7').click(function () 
		{
				wins++;
				console.log(wins)
				$(".qa2").hide();
				$(".qa3").show();
			    // The link has been clicked.
			
			
		});

		$("#losses-3, #losses-4, #losses-5 ").click(function () 
			{
				
				losses++;
				console.log("losses "+losses);
				$(".qa2").hide();
				$(".qa3").show();
			});



		$('#button-10').click(function () 
		{
				wins++;
				console.log(wins)
				$(".qa3").hide();
				$(".qa4").show();
			    // The link has been clicked.
			
			
		});

		$("#losses-6, #losses-7, #losses-8 ").click(function () 
			{
				
				losses++;
				console.log("losses "+losses);
				$(".qa3").hide();
				$(".qa4").show();
			});
		$('#button-12').click(function () 
		{
				wins++;
				console.log(wins)
				$(".qa4").hide();
				$(".qa5").show();
			    // The link has been clicked.
			
			
		});

		$("#losses-9, #losses-10, #losses-11 ").click(function () 
			{
				
				losses++;
				console.log("losses "+losses);
				$(".qa4").hide();
				$(".qa5").show();
			});


			


	 });

	
	

});


































// $("#button-1").click(function(){
//     		wins++;
//     		console.log(wins);
//     		$(".qa1").hide();
//     		$(".qa2").show();

//     		$("#button-7").click(function(){
//     			wins++;
//     			console.log(wins);
//     			$(".qa2").hide();
//     			$(".qa3").show();

//     		});
//     			$("#button-10").click(function(){
//     			wins++;
//     			console.log(wins);
//     			$(".qa3").hide();
//     			$(".qa4").show();

//     		});


//     	 });


//     });

 

	




	
	

	


	    	
	    	







	  
		
	


































































	//checkWins();


