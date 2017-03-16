"use strict";


function Hiragana(character, reading){
	this.character = character;
	this.reading = reading;
}

function HiraganaTable(){
	this.table = [];
	this.fill();
	this.shuffle();
}

HiraganaTable.prototype.addHiragana = function(character, reading){
	this.table.push(new Hiragana(character, reading));
}

HiraganaTable.prototype.fill = function(){
	var original = this;
	$.ajax({
		url: "https://raw.githubusercontent.com/Alanian/nihongo/master/data/hiragana.txt",
		async: false,
		success: function(data){
			var lines = data.split("\n");
			var len = lines.length;
			for(var i = 0; i < len; i++){
				var split = lines[i].split(" ");
				original.addHiragana(split[0], split[1]);
			}
		}
	});
}

HiraganaTable.prototype.shuffle = function(){
	var temp, rand;
	for(var i = this.table.length; i; i--){
		rand = Math.floor(Math.random() * i);
		temp = this.table[i-1];
		this.table[i-1] = this.table[rand];
		this.table[rand] = temp;
	}
}

HiraganaTable.prototype.removeFirst = function(){
	this.table.shift();
}

HiraganaTable.prototype.moveFirstToEnd = function(){
	this.table.push(this.table[0]);
	this.table.shift();
}

$(document).ready(function(){
	$("#start").css("display", "none");
	$("#info-box-top").html("Press the button!");
	var ht;
	var tries;
	var matches;

	$("#hiragana-start").click(function(){
		start();
	});

	function start(){
		ht = new HiraganaTable();
		console.log(ht);
		tries = 0;
		matches = 0;
		$("#start").css("display", "initial");
		$("#end").css("display", "none");
		$("#info-box-top").css("background-color", "transparent");
		$("#info-box-top").css("color", "black");
		$("#hiragana-box").html(ht.table[0].character);
		$("#info-box-top").html("Please insert the reading of the Hiragana shown above.");
		$("#info-box-bottom").html("Hiragana remaining: " + ht.table.length);
	}

	function end(){
		$("#start").css("display", "none");
		$("#end").css("display", "initial");
		$("#info-box-top").html("You have done well!");
		$("#info-box-top").css("background-color", "black");
		$("#info-box-bottom").html("Accuracy: " + Math.floor(matches / tries * 100) + "%");
	}

	$("#hiragana-submit").click(function(){
		var input = $("#hiragana-reading").val();

		if(input == ht.table[0].reading){
			$("#info-box-top").html("Correct!");
			$("#info-box-top").css("background-color", "darkcyan");
			$("#info-box-top").css("color", "white");
			ht.removeFirst();
			matches++;
		}else{
			$("#info-box-top").html("Wrong! It was <i>" + ht.table[0].reading + "</i>.");
			$("#info-box-top").css("background-color", "tomato");
			$("#info-box-top").css("color", "white");
			ht.moveFirstToEnd();
		}

		tries++;

		if(ht.table.length){
			$("#info-box-bottom").html("Hiragana remaining: " + ht.table.length + "<br>"
				+ "Accuracy: " + Math.floor(matches / tries * 100) + "%");
			$("#hiragana-box").html(ht.table[0].character);
			$("#hiragana-reading").val("");
		}else{
			end();
		}

	});

	$("#hiragana-reading").keyup(function(e){
		if (e.keyCode == 13) {
			$("#hiragana-submit").trigger("click");
		}
	});
});