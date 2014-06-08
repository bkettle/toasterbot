var bot = require('dogechat-bot');
bot.connect("toasterbot", "botpasswordhere", function() {
    bot.joinRoom("toasterbot");
    bot.chat("Hello Shibes!", "toasterbot");
});

setTimeout(function() {
 
bot.addCommand("!help", function(data) {
    bot.chat(data.user + ": Hello! I see that you need help. To see a list of all the commands, type '!commands'.", data.room);
});

bot.addCommand("!commands", function(data) {
	/* This part uses too many messages.
	// bot.chat(data.user + ", here is a list of all the commands.", data.room);
	bot.chat("##################################################################", data.room);
	bot.chat("## '!about' will give you information about me.                 ##", data.room);
	bot.chat("## '!help' will give you basic information about how to use me. ##", data.room);
	bot.chat("## '!games' will give you a list of all the games you can play. ##", data.room);
	bot.chat("##################################################################", data.room);*/
	bot.chat(data.user + ", here is a list of all my commands: '!help' will give you basic information on how to use me, '!about' will give you info about me, '!games' will give you info about games you can play.", data.room);
});

bot.addCommand("!about", function(data) {
	bot.chat(data.user + ", I am a bot created by theyellowtoaster. Eventually, I will evolve into a bot that does many things, but today I am just a single-function bot.", data.room);
});

bot.addCommand("!games", function(data) {
	bot.chat(data.user + ", in the future I plan to have many games to choose from. However, right now, I only have one game. To play, type '/tip toasterbot <amount (between 5 and 100)>.", data.room);
	//bot.chat(data.user + ": Then, I will think of a random number between 0 and 100. Then, if the number is above 50, I will generate a percent between 0 and 300.", data.room);
	//bot.chat(" I will then tip you that percent of your tip back to you. Thank you, " + data.user + ".", data.room);
	bot.chat("I will think of a random number between 0 and 175, then tip you back that percent of your original tip. Thank you, " + data.user + ".", data.room);
	//bot.chat(data.user + ": WARNING: THIS DOES NOT WORK YET!", data.room);
});

bot.addCommand("hi", function(data) {
	bot.chat("Hello, " + data.user + "!", data.room);
});

bot.onTip(function(data) {
    bot.chat(data.user + ": Thank you for playing, kind shibe.", data.room);
	if (data.amount < 101) {
		var i = 75
		var i = Math.floor((Math.random() * 100) + 0);
		var i = Math.round(p)
		var i = 75
		if (i > 25) {
			// bot.tip(data.user, data.amount, data.room, "not ready to play yet");
			var t = data.amount;
			// bot.chat("you tipped " + t + " doge!", data.room);
			var p = Math.floor((Math.random() * 200) + 0);
			var p = Math.round(p)
			var a = t * p;
			var a = a * .01;
			var a = Math.round(a)
			if (a < 5) {
				bot.chat("wow so lose.", data.room);
			}
			else {
			bot.chat(data.user + ": You tipped " + t + " doge. You earned " + p + "%. This means you get " + a + " doge!", data.room);
			// bot.chat("You get " + p + "%", data.room);
			// bot.chat(data.user + ": You get " + a + " doge!", data.room);
			bot.tip(data.user, a, data.room, "wow such fun");
			}	
		}
		else {
		bot.chat("wow so lose, " + data.user + ".", data.room);
		}
	}
	else {
		var b = data.amount - 5;
		bot.chat(data.user + ", your tip is too large.", data.room);
		bot.tip(data.user, b, data.room, "tip too large");		
	}
});

bot.addCommand("!botbal", function(data) {
	var botbalance = bot.getBalance();
	bot.chat("I currently have " + botbalance + " doge in my account.", data.room);
});
	
}, 3000);
