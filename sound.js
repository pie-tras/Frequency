let counter;

var playing = false;

var padKeyboard = "azsxdcfvgbhnjmk,l.;/'1q2w3e4r5t6y7u8i9o0p-[=]"
var padNotes = "abcdefg"
var currentOctave = 1;
var padKeys = [];
var padNoteArray = [];

function setup(){

	var context = new AudioContext();

	var q = 0;
	for(var i = 0; i < padKeyboard.length; i++){
		padKeys.push(new padKey(padKeyboard.charAt(i)));
		if(q >= padNotes.length-1){
			q = 0;
			currentOctave++;
		}
		padNoteArray.push(padNotes.charAt(q) + currentOctave);
		q++;
	}

	counter = 0;
}

function keyPressed() {
	for(var i = 0; i < padKeyboard.length; i++){
		if(padKeys[i].key == key){
			padKeys[i].play(padNoteArray[i]);
		}
	}
}

function keyReleased(){
	for(var i = 0; i < padKeyboard.length; i++){
		if(padKeys[i].key == key){
			padKeys[i].stop();
		}
	}
}
