




var quiz = [
      {
         question:"'The Mountain' is the nickname for which character?",
         possibleAnsers: ["Gerold Clegane","Sandor Clegane", "Gregor Clegane", "Oberyn Martell"],
         answer: 2 
      },
      {
         question:" Who is Lord Commander of the Kingsguard at the beginning of Game of Thrones?",
         possibleAnsers: ["Ser Loras Tyrell","Ser Barristan Selmy", "Ser Jaime Lannister", "Ser Jeor Mormont", ],
         answer: 1
      },
      {
         question:"Who was the Mad King's firstborn son?",
         possibleAnsers: ["Aegon Targaryen","Rhaegar Targaryen", "Viserys Targaryen", "Aemon Targaryen"],
         answer: 1
      },

      {
         question:"Who was Margaery Tyrell's first husband?",
         possibleAnsers: ["Tommen Baratheon","Stannis Baratheon", "Joffrey Baratheon", "Renly Baratheon"],
         answer: 3

      },

      {
         question:"Who is known as 'The-King-Beyond-the-Wall'?",
         possibleAnsers: ["Mance Rayder","The Night King", "Stannis Baratheon", "Tormund Giantsbane"],
         answer: 0

      }
   ]
   var wins = 0;
   var losses = 0;
   var currentQuestion = 0;
   




 $(document).ready(function (){
 	// quiz data


	

	//where we are at in the game	

   
/*on click stat show  show win loss and stat game*/


$("#correct").hide()
$("#incorrect").hide()
$("#answered").hide()
$("#timer").hide()
$( "#start" ).on( "click", function() 
{
   $("#start").hide()
   $("#correct").show()
   $("#incorrect").show()
   
   $("#timer").show()


   generateQuestion();
   //timer();
   
});


   



   $("#correct").text("correct: " + wins);
   $("#incorrect").text("incorrect: " + losses);
  





function generateQuestion(){
   // evaluation to start the game
   var currentQuiz = quiz[currentQuestion];
   if(currentQuestion<quiz.length){
      //empty question and options
      $(".questions, .answerbutton").empty();
   	//short form for finding index of current quiz we are on.
		// get question and show it on page
		console.log("currentQuestion",currentQuiz.question);
		var questionWrap = $("<h4>");
      //quiz[currentQuestion].question quiz[0].question - q1
      // add text to the h3 element we created above
		questionWrap.text(currentQuiz.question);
      // add th element to the page
		$(".questions").append(questionWrap);


		// get all options and show on page
      /*short form for finding index of current quiz we are on and getting possibleAnswer array from that currect obj*/
      //quiz[currentQuestion].possibleAnsers
		var quizOptions = currentQuiz.possibleAnsers;
      //loop though the array of possibleAnswers
		for(var i = 0;i<quizOptions.length;i++){
         // create html and append to page x times (array length)
			var bttn = $("<button>");
			bttn.addClass("btn btn-secondary");
			bttn.text(quizOptions[i]);
         // storing the index so we know the answer
         bttn.val(i);
			$(".answerbutton").append(bttn);


		}
   }


   else
   {
      endgame()
   }
}




   function endgame()
   {
      $(".questions, .answerbutton").empty();
    var message = $("<h1>")
    message.text("Game over");
    $(".questions").append(message) 

   }


		// get the button clicked
      // go to the buton container and look for all buttons with the class .btn
      
		$(".answerbutton").on("click",".btn",function(){
         // capture the button the user clicked

         
			

         var selectedBtn = parseInt($(this).val());
			console.log("selectedBtn",selectedBtn);
			// evalute if it is right or wrong answer
         // is the value from the button clicked the value of the current round answer?
         //quiz[currentQuestion]
         // .answer
			  


               if(quiz[currentQuestion].answer === selectedBtn)
               {
                  wins++
                  $("#correct").text("correct: " + wins);
                  console.log(wins);
                   console.log("right!");
                   $(".answerbutton").empty();
                   var response = $("<h4>");
                   var answerIndex = quiz[currentQuestion].answer
                   console.log("answerIndex", answerIndex)
                   console.log("answer", quiz[currentQuestion].question[answerIndex]);
                   response.text("You are correct the anwer is " + quiz[currentQuestion].possibleAnsers[answerIndex]);
                   $(".answerbutton").append(response);

                  

                   setTimeout(function(){
                     
                     // currentQuestion go up
                     currentQuestion++
                     $("#answered").text("answered: " + answered);

                     // start all over 
                     
                      generateQuestion()
                      
                      

                  }, 2000);
				}


            else
            {
               losses++;
              
               $("#incorrect").text("incorrect: " + losses);
               console.log(losses); 
               console.log("wrong");
               $(".answerbutton").empty();
                var response = $("<h4>");
                var answerIndex = quiz[currentQuestion].answer;
                 console.log("answerIndex", answerIndex)
                   console.log("answer", quiz[currentQuestion].question[answerIndex]);
                response.text("You are wrong the anwer is " + quiz[currentQuestion].possibleAnsers[answerIndex]);
                $(".answerbutton").append(response);
                setTimeout(function(){
                   
                     // currentQuestion go up
                     currentQuestion++
                     $("#answered").text("answered: " + answered);
                     // start all over
                     
                      generateQuestion()   

                  }, 2000);
            }



		})

      




       


		

});
