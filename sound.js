let counter;

var playing = false;

var padKeyboard = "azsxdcfvgbhnjmk,l.;/'1q2w3e4r5t6y7u8i9o0p-[=]"
var padKeys = [];

function setup(){

	var context = new AudioContext();

	for(var i = 0; i < padKeyboard.length; i++){
		padKeys.push(new padKey());
	}

	counter = 0;
}

function togglePlay(){
	if(!playing){
		loopBeat.start(0);
		playing = true;
	}else{
		loopBeat.stop(0);
		playing = false;
	}
}

function keyPressed() {
	for(var i = 0; i < padKeyboard.length; i++){
		if(padKeyboard[i] == key){
			padKeys[i].play();
		}
	}
}

function keyReleased(){
	for(var i = 0; i < padKeyboard.length; i++){
		if(padKeyboard[i] == key){
			padKeys[i].stop();
		}
	}
}
