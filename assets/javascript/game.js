var starWars = new Audio("assets/audio/star-wars.mp3");
starWars.volume = 0.2;
/*
var Ben = {Name: "Ben", Hitpoints: 140, Defense: 21, Attack: 15, Damage: 12};
var yoda = {Name: "Yoda", Hitpoints: 120, Defense: 22, Attack: 18, Damage: 15};
var mace = {Name: "Mace", Hitpoints: 150, Defense: 22, Attack: 16, Damage: 16};
var sidious = {Name: "Sidious", Hitpoints: 130, Defense: 19, Attack: 15, Damage: 20};
var vader = {Name: "Vader", Hitpoints: 140, Defense: 21, Attack: 14, Damage: 18};
var nihilus = {Name: "Nihilus", Hitpoints: 100, Defense: 18, Attack: 12, Damage: 14};
*/
var players = [
	{Name: "Ben", Hitpoints: 100, Defense: 3, Attack: 2, Damage: 0},
	{Name: "Yoda", Hitpoints: 90, Defense: 4, Attack: 5, Damage: 1},
	{Name: "Mace", Hitpoints: 110, Defense: 4, Attack: 3, Damage: 2},
	{Name: "Sidious", Hitpoints: 100, Defense: 2, Attack: 5, Damage: 5},
	{Name: "Vader", Hitpoints: 120, Defense: 1, Attack: 4, Damage: 3},
	{Name: "Nihilus", Hitpoints: 105, Defense: 0, Attack: 2, Damage: 2}
];

function playerSetup(obj){
	//console.log(obj);
    for(var i = 1; i < Object.keys(obj).length; i++){
		var name = obj.Name;
		var property = Object.keys(obj)[i];
		var value = obj[property];

    	var temp = "#" + name + ".thumnbnail." + property;
    	$("#" + name + " ." + property).html(property + ": " + value);
    }	
}

var protagonist = undefined;
var antagonist = undefined;

$(document).ready(function(){
	//starWars.play();

	for(var i = 0; i < players.length; i++){
		playerSetup(players[i]);
	}

	$("#Ben").click(function(){
		if(protagonist == undefined && antagonist == undefined){
			protagonist = 0;
			$("#intro-msg").css("display", "none");
			$(".attack").css("display", "inline-block");

			for(var i = 1; i < 3; i++){
				$("#" + players[i].Name).css("display", "none");
			}
			
			for(var j = 3; j < 6; j++){
				$("#opponents").append($("#" + players[j].Name));
				$("#" + players[j].Name).css("float", "left");
				$("#" + players[j].Name + " .thumbnail").css({"animation-name": "borderFadeYellow", "background-color": "#FF4500"});	
			}
		}

		if(protagonist != 0 && antagonist == undefined){
			antagonist = 0;
			$("#Ben" + " .thumbnail").css({"animation-name": "borderFade", "background-color": "green"});
		}
	});


	$("#Yoda").click(function(){
		if(protagonist == undefined && antagonist == undefined){
			protagonist = 1;
			$("#intro-msg").css("display", "none");
			$(".attack").css("display", "inline-block");

			for(var i = 0; i < 3; i+=2){
				$("#" + players[i].Name).css("display", "none");
			}
			
			for(var j = 3; j < 6; j++){
				$("#opponents").append($("#" + players[j].Name));
				$("#" + players[j].Name).css("float", "left");
				$("#" + players[j].Name + " .thumbnail").css({"animation-name": "borderFadeYellow", "background-color": "#FF4500"});		
			}
		}

		if(protagonist != 1 && antagonist == undefined){
			antagonist = 1;
			$("#Yoda" + " .thumbnail").css({"animation-name": "borderFade", "background-color": "green"});
		}
	});

	$("#Mace").click(function(){
		if(protagonist == undefined && antagonist == undefined){
			protagonist = 2;
			$("#intro-msg").css("display", "none");
			$(".attack").css("display", "inline-block");

			for(var i = 0; i < 2; i++){
				$("#" + players[i].Name).css("display", "none");
			}
			
			for(var j = 3; j < 6; j++){
				$("#opponents").append($("#" + players[j].Name));
				$("#" + players[j].Name).css("float", "left");
				$("#" + players[j].Name + " .thumbnail").css({"animation-name": "borderFadeYellow", "background-color": "#FF4500"});		
			}
		}

		if(protagonist != 2 && antagonist == undefined){
			antagonist = 2;
			$("#Mace" + " .thumbnail").css({"animation-name": "borderFade", "background-color": "green"});
		}
	});

	$("#Nihilus").click(function(){
		if(protagonist == undefined && antagonist == undefined){
			protagonist = 5;
			$("#Nihilus").css("float", "left");
			$("#intro-msg").css("display", "none");
			$(".attack").css("display", "inline-block");

			for(var i = 3; i < 5; i++){
				$("#" + players[i].Name).css("display", "none");
			}
			
			for(var j = 0; j < 3; j++){
				$("#opponents").append($("#" + players[j].Name));
				$("#" + players[j].Name).css("float", "left");
				$("#" + players[j].Name + " .thumbnail").css({"animation-name": "borderFadeYellow", "background-color": "#FF4500"});		
			}
		}

		if(protagonist != 5 && antagonist == undefined){
			antagonist = 5;
			$("#Nihilus" + " .thumbnail").css({"animation-name": "borderFade", "background-color": "green"});
		}
	});


	$("#Vader").click(function(){
		if(protagonist == undefined && antagonist == undefined){
			protagonist = 4;
			$("#Vader").css("float", "left");
			$("#intro-msg").css("display", "none");
			$(".attack").css("display", "inline-block");

			for(var i = 3; i < 6; i+=2){
				$("#" + players[i].Name).css("display", "none");
			}
			
			for(var j = 0; j < 3; j++){
				$("#opponents").append($("#" + players[j].Name));
				$("#" + players[j].Name).css("float", "left");
				$("#" + players[j].Name + " .thumbnail").css({"animation-name": "borderFadeYellow", "background-color": "#FF4500"});		
			}
		}

		if(protagonist != 4 && antagonist == undefined){
			antagonist = 4;
			$("#Vader" + " .thumbnail").css({"animation-name": "borderFade", "background-color": "green"});
		}
	});


	$("#Sidious").click(function(){
		if(protagonist == undefined && antagonist == undefined){
			protagonist = 3;
			$("#Sidious").css("float", "left");
			$("#intro-msg").css("display", "none");
			$(".attack").css("display", "inline-block");

			for(var i = 4; i < 6; i++){
				$("#" + players[i].Name).css("display", "none");
			}
			
			for(var j = 0; j < 3; j++){
				$("#opponents").append($("#" + players[j].Name));
				$("#" + players[j].Name).css("float", "left");
				$("#" + players[j].Name + " .thumbnail").css({"animation-name": "borderFadeYellow", "background-color": "#FF4500"});		
			}
		}

		if(protagonist != 3 && antagonist == undefined){
			antagonist = 3;
			$("#Sidious" + " .thumbnail").css({"animation-name": "borderFade", "background-color": "green"});
		}
	});

	$(".attack").click(function(){
		if(protagonist != undefined && antagonist != undefined){			
			if(players[protagonist].Hitpoints > 0 && players[antagonist].Hitpoints > 0){
				var protagRoll = Math.floor(Math.random() * 20) + 1;
				var antagRoll = Math.floor(Math.random() * 20) + 1;

				if((protagRoll + players[protagonist].Attack) >= (antagRoll + players[antagonist].Defense)){
					players[antagonist].Hitpoints -= ((Math.floor(Math.random() * 6) + 1) + players[protagonist].Attack);
				}

				else{
					players[protagonist].Hitpoints -= ((Math.floor(Math.random() * 6) + 1) + players[antagonist].Attack);
				}

				playerSetup(players[protagonist]);
				playerSetup(players[antagonist]);
			}

			else{
				if(players[protagonist].Hitpoints <= 0){
					$("#" + players[protagonist].Name).css("display", "none");
					protagonist = undefined;
					console.log("game over");
				}

				else {
					$("#" + players[antagonist].Name).css("display", "none");
					antagonist = undefined;

				}

			}

		}

	});
})
