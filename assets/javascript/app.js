
	// when the page loads everything on this document.ready function loads.
$(document).ready(function(){

	var correct = 0;
	var incorrect = 0;
	var unanswerQuestion = 0;
	var time;
	var quiz = [
		{	question:"what NFL franchise has the most superbowl wins?",
			option:["New England Patriots", "Dallas CowBoys", "Denver Broncos", "Pittsburgh Steelers" ],
			answer:"3",
		},
		{	question:"what NFL franchise has the most loss in the superbowls?",
			option:["New England Patriots", "Dallas CowBoys", "Denver Broncos", "Pittsburgh Steelers" ],
			answer:"2",
		},
		{	question:"what NFL franchise has the most superbowl appearences?",
			option:["New England Patriots", "Dallas CowBoys", "Denver Broncos", "Pittsburgh Steelers" ],
			answer:"0",
		},
	];
	console.log(quiz)


	//display the clock the page
	// function clock(){
	// 	time = setInterval(decrement,1000);
	// }
	// 	console.log("hi"counter)
		var numbers = 5;
	// function decrement(){

	// 	console.log("number",number);
	// 	number--;
	// 	$("#timer").text("remaining time:" + number);
	// 	//if once number hits zero
	// 	if (number === 0){
	// 		clearInterval(time);
	// 		console.log("outoftime");
	// 		setTimeout(function(){
	// 			console.log("times up");
	// 			$("#main-content").empty();
	// 			var answer = unanswerQuestion + "/" + quiz.length;
	// 			var gameStats = $("<p>");
	// 			gameStats.text(answer);
	// 			var message = $("<h1>");
	// 			message.text("NT");
	// 			$("#main-content").append(message, gameStats);
	// 		},1000);
	// 	};	
	// }
		$("#correct").text("correct: " +correct);
		$("#incorrect").text("incorrect: " +incorrect);
		$("#timer").text("Remaining Time: " +numbers);
			//when the user clicks on the start button this will remove the hide and show the question and answer
	$("#startGame").on("click",function(){
		$("#timer, #correct, #incorrect").removeClass("hide");
		$("#main-content").empty();
		// clock();
		for(var i = 0; i < quiz.length; i++){
		var quiz = $("<h2>");
		quiz.addClass("question");
		quiz.text(quiz[i].question);
		$("#main-content").append(quiz);
				var btnGrp = $("<div>");
				btnGrp.addClass("btn-group");
				btnGrp.attr("role", "group");
				btnGrp.attr("id","bg" + i);
				btnGrp.attr("aria-label","first group");
				$("#main-content").append(btnGrp)
			for (var j = 0; j <quiz[i].option.length; j++){
				var btnOption = $("<button>");
				btnOption.addClass("options btn btn-secondary");
				btnOption.attr("type", "button");
				btnOption.attr("name",i)
				btnOption.attr("id","o"+j);
				btnOption.attr("value", j);
				btnOption.text(quiz[i].option[j]);
				$("#bg"+i).append(btnOption);
			};
		};
	});
	// do this everytime we dynamiclly add things to the page ||
	$("#main-content").on("click", ".options", function(){
		if(unanswerQuestion<quiz.length){
			unanswerQuestion++
			var btnName = $(this).attr("name");
			var btnList = $("btn[name=" + "'" + btnName + "'" + "]" );
			for(var i=0; i<btnList.length;i++){
				btnList[i].classList.remove("selected");
				btnList[i].setAtribute("disable", true);			
			}
			$(this).addClass("selected");
			var selectedBtn = parseInt($(this).val());
			console.log(selectedBtn);
			var questionIndex = parseInt($(this).attr("name"));
			if(selectedBtn===quiz[questionIndex].Answer){
				console.log("correct");
				correct++;
				$("#correct").text("correct:" + correct)
			}
			else{
				console.log("incorrect");
				incorrect++;
				$("#incorrect").text("incorrect" + incorrect)
			}
		}

	});
	});

