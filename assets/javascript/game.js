var starWars = new Audio("assets/audio/star-wars.mp3");
starWars.volume = 0.2;
var imperial = new Audio("assets/audio/imperial.mp3");
imperial.volume = 0.2;
var force = new Audio("assets/audio/force.mp3");
force.volume = 0.2;

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
var defeated = 0;
var sentence = "";
var status = "<br>Click Attack to begin!<br><hr>";
var scrolled = 0;

function down() {
    scrolled = scrolled + 40;
    $("#scoreboard").animate({scrollTop: scrolled}, 25);
}

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
			$("#scoreboard").css("display", "inline-block");
			sentence = "Protagonist: " + players[protagonist].Name + "<br>Antagonist: " + players[antagonist].Name;	
			$("#scoreboard").append(sentence);
			$("#scoreboard").append(status);
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
			$("#scoreboard").css("display", "inline-block");
			sentence = "Protagonist: " + players[protagonist].Name + "<br>Antagonist: " + players[antagonist].Name;	
			$("#scoreboard").append(sentence);
			$("#scoreboard").append(status);
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
			$("#scoreboard").css("display", "inline-block");
			sentence = "Protagonist: " + players[protagonist].Name + "<br>Antagonist: " + players[antagonist].Name;	
			$("#scoreboard").append(sentence);
			$("#scoreboard").append(status);
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
			$("#scoreboard").css("display", "inline-block");
			sentence = "Protagonist: " + players[protagonist].Name + "<br>Antagonist: " + players[antagonist].Name;	
			$("#scoreboard").append(sentence);
			$("#scoreboard").append(status);
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
			$("#scoreboard").css("display", "inline-block");
			sentence = "Protagonist: " + players[protagonist].Name + "<br>Antagonist: " + players[antagonist].Name;	
			$("#scoreboard").append(sentence);
			$("#scoreboard").append(status);
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
			$("#scoreboard").css("display", "inline-block");
			sentence = "Protagonist: " + players[protagonist].Name + "<br>Antagonist: " + players[antagonist].Name;	
			$("#scoreboard").append(sentence);
			$("#scoreboard").append(status);
		}
	});

	$(".attack").click(function(){
		if(protagonist != undefined && antagonist != undefined){			
			if(players[protagonist].Hitpoints > 0 && players[antagonist].Hitpoints > 0){
				
				var protagRoll = Math.floor(Math.random() * 20) + 1;
				var protagRollWith = protagRoll + players[protagonist].Attack;
				var attacker = players[protagonist].Name + " rolls a " + protagRoll + " (with bonus, a " + protagRollWith + ")";
				$("#scoreboard").append(attacker);

				var antagRoll = Math.floor(Math.random() * 20) + 1;
				var antagRollWith = antagRoll + players[antagonist].Defense;
				var defender = "<br>" + players[antagonist].Name + " rolls a " + antagRoll + " (with bonus, a " + antagRollWith + ")";
				$("#scoreboard").append(defender);


				if((protagRoll + players[protagonist].Attack) >= (antagRoll + players[antagonist].Defense)){
					var damage = (Math.floor(Math.random() * 6) + 1) + players[protagonist].Attack;
					players[antagonist].Hitpoints -= damage;	

					if(players[antagonist].Hitpoints < 0){
						players[antagonist].Hitpoints = 0;
						attacker = "<br>" + players[protagonist].Name + " does " + damage + " points of damage.<br><br>" + players[protagonist].Name + 
						" defeats " + players[antagonist].Name + "!<br>Please select another opponent!<br><hr>";
						$("#scoreboard").append(attacker);
					}

					else{
						attacker = "<br>" + players[protagonist].Name + " does " + damage + " points of damage.<hr>";
						$("#scoreboard").append(attacker);
					}
				}

				else{
					var damage = (Math.floor(Math.random() * 6) + 1) + players[antagonist].Attack;
					players[protagonist].Hitpoints -= damage;
					defender = "<br>" + players[antagonist].Name + " does " + damage + " points of damage.<hr>";
					$("#scoreboard").append(defender);

					if(players[protagonist].Hitpoints < 0){
						players[protagonist].Hitpoints = 0;
					}
				}
				playerSetup(players[protagonist]);
				playerSetup(players[antagonist]);
			}

			else{
				if(players[protagonist].Hitpoints <= 0){
					for(var i = 0; i < players.length; i++){
						$("#" + players[i].Name).css("display", "none");
					}

					imperial.play();
					$(".attack").css("display", "none");
					$("#heading").css("display", "none");
					$("#scoreboard").css("display", "none");
					$("#ending").css("display", "inline-block");
				}

				else {
					if(defeated < 2){
						defeated++;
						$("#" + players[antagonist].Name).css("display", "none");
						players[protagonist].Attack += 2;
						players[protagonist].Damage += 2;
						players[protagonist].Defense += 2;
						players[protagonist].Hitpoints += 10;
						playerSetup(players[protagonist]);
						antagonist = undefined;
					}

					else {
						for(var i = 0; i < players.length; i++){
							$("#" + players[i].Name).css("display", "none");
						}
						
						force.play();
						$(".attack").css("display", "none");
						$("#heading").css("display", "none");
						$("#scoreboard").css("display", "none");
						$("#ending").css("display", "inline-block");
					}
				}
			}
			$('.attack').click(down);
		}
	});
})
