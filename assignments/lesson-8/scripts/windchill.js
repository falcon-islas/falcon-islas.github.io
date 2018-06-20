function compute() {

    'use strict';
	//Variables for Temperature and Wind Speed.
	var tempF = document.getElementById('temperature').innerHTML;
	var speed = document.getElementById('windspeed').innerHTML;
	var wchill = windChill(tempF, speed);


document.getElementById('output').innerHTML = "The Wind Chill for Today is <strong>" + (Math.round(wchill * 1)/ 1) + "</strong>" + "&#8457" + "!";
}

function windChill(tempF, speed){
	var wchill = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16); 
	return wchill;
	}