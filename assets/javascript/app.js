var counter = 0
var correct = 0
var incorrect = 0
var unanswerQuestion = 0
var quiz = [
	{	question:("what NFL franchise has the most superbowl wins?"),
		option:["New England Patriots", "Dallas CowBoys", "Denver Broncos", "Pittsburgh Steelers" ],
		answer:[3],

	},
	{	question:("what NFL franchise has the most loss in the superbowls?"),
		option:["New England Patriots", "Dallas CowBoys", "Denver Broncos", "Pittsburgh Steelers" ],
		answer:[2],
	},
	{	question:("what NFL franchise has the most superbowl appearences?"),
		option:["New England Patriots", "Dallas CowBoys", "Denver Broncos", "Pittsburgh Steelers" ],
		answer:[0],
	},


]
	console.log(quiz[0].question);
	console.log(quiz[0].option);
	console.log(quiz[0].answer);

	console.log(quiz[1].question);
	console.log(quiz[1].option);
	console.log(quiz[1].answer);

	console.log(quiz[2].question);
	console.log(quiz[2].option);
	console.log(quiz[2].answer);

	// console.log(quiz[3].question);
	// console.log(quiz[3].option);
	// console.log(quiz[3].answer);
	
	function counter(){
		gitCounter = setInterval(decrement, 1000)
	//how to set a number counter
	};
	var number = 3;
	function decrement(){ //lowers the counter by 1
		console.log("number",number);
		number--;
		$("#timer").text("Remaining Time:" + number)
		//if once number hits zero
		if (number === 0){
			clearInterval(gitCounter);
			console.log("outoftime");
			setTimeout(function(){
				console.log("times up");
				$("#main-content").empty();
				var answer = unanswerQuestion + "/" + quiz.length;
				var gameStats = $("<p>");
				gameStats.text(answer);
				var message = $("<h1>");
				message.text("Good Job");
				$("#main-content").append(message, gameStats);
				//sends the game score and stats
			},1000);
		};

	};
	// function start 
$(document).ready(function(){
	//sends text from js to html
		$("#correct").text("correct",correct);
		$("#incorrect").text("incorrect",incorrect);
		$("#counter").text("Remaining Time",number);	
		// when user clicks to start the quiz
	$("#startGame").on("click",function(){
		$("#timer,correct,incorrect").removeClass("hide");
		$("#main-content").empty();

		//a for loop that sends the quiz
		for(var i=0; i<quiz.length;i++)
			{
				var quizQuestion = $("<h2>");
				quizQuestion.addClass("question");
				quizQuestion.text(quiz[i].question);
				$("#main-content").append(quizQuestion);
					var btnGrp = $("<div>");
					btnGrp.addClass("btn-group");
					btnGrp.attr("role", "group");
					btnGrp.attr("id","bg" + i);
					btnGrp.attr("aria-label","first group");
					$("#main-content").append(btnGrp);
				for(var j = 0; j < quiz[i].option.length; j++)
				{
					var btnOption = $("<button>");
					btnOption.addClass("options brn brn-secondary");
					btnOption.attr("type", "button");
					btnOption.attr("name",i)
					btnOption.attr("id","r"+j);
					btnOption.attr("value", j);
					btnOption.text(quiz[i].option[j]);
					$("#bg"+i).append(btnOption);
				};
			};
		});
	// where the body of the quiz and data will be sending and most of the content will be
		$("#main-content").on("click", ".option", function(){
			if(unanswerQuestion < quiz.length){
				unanswerQuestion++
			var btnName = $(this).attr("name");
			var btnList = $("btn[name=" + "" + btnName + "" + "]" );
			for(var i=0; i<btnList.length;i++){
				btnList[i].classList.remove("selected")
				btnList[i].setAtribute("disable", true);			

			};
			$(this).addClass("selected");
			var selectedBtn = parseInt($(this).val());
			console.log(selectedBtn);
			};
		console.log(selectedBtn);
		var questionIndex = parseInt($(this).attr("name"));
		if(selectedBtn===quizData[questionIndex].answer){
			console.log("correct");
			correct++;
			$("#correct").text("correct:" + correct)
		}
		else{
			console.log("incorrect");
			incorrect++;
			$("#incorrect").text("incorrect" + incorrect)
		}

		});

	// function display (){
	// 	$("#questionBox").html(quiz[counter].question);
	// 	$("#timerBox").append(timer[30000]);
	// 	for (var i=0; i < quiz[counter].option.length; i++){
	// 	$("#answerBox").html(quiz[counter].option);
	// 	};

	// 	};


});
