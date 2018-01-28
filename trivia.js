 $(document).ready(function (){
 	// quiz data
 	var wins = 0;
 	var losses = 0;
	var quiz = [
		{
			question:"q1",
			possibleAnsers: ["a1","a2", "a3", "a4", "a5"],
		}
	]

	//where we are at in the game	
   var currentQuestion = 0;

   // evaluation to start the game
   if(currentQuestion<quiz.length){
   	var currentQuiz = quiz[currentQuestion];
   		// get question and show it on page
   		console.log("currentQuestion",currentQuiz.question);
   		var questionWrap = $("<h3>");
   		questionWrap.text(currentQuiz.question);
   		$(".questions").append(questionWrap);

   		// get all options and show on page
   		var quizOptions = currentQuiz.possibleAnsers;
   		for(var i = 0;i<quizOptions.length;i++){
   			var bttn = $("<button>");
   			bttn.addClass("btn btn-secondary");
   			bttn.text(quizOptions[i]);
 			bttn.attr("id","btt-"+ i);
   			$(".answerbutton").append(bttn);
   		}
   		// get the button clicked
   		$(".answerbutton").on("click",".btn",function(){
   			var selectedBtn = $(this).attr("id");
   			console.log("selectedBtn",selectedBtn);
   			// capture the button the user clicked
   			// evalute if it is right or wrong answer
   			//if(){
   				// tell user if they are right or wrong 
   				// if win do something 
   				// if lose do something else
   				// both u need to "empty" both containers (questions answerbutton)

   				//}
   		})
   		// quiz[currentQuestion].possibleAnsers.forEach(function(option){
   		// 	var bttn = $("<button>");
   		// 	$(".answerbutton").append(button)
   		// })

   }

});
