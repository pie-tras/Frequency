let counter;

var slider;

var playing = false;

var padKeyboard = "azsxdcfvgbhnjmk,l1q2w3e4r5t6y7u8i9o0p-"
var padNotes = "abcdefg"
var currentOctave = 3;
var padKeys = [];
var padNoteArray = [];

function setup(){

	var context = new AudioContext();

	slider = createSlider(0, 50, 1);
	slider.position(20, 20);


	setup();

	counter = 0;
}

function setup(){
	var q = 0;
	for(var i = 0; i < padKeyboard.length; i++){
		padKeys.push(new padKey(padKeyboard.charAt(i)));
		if(q >= padNotes.length-1){
			q = 0;
			currentOctave++;
		}
		if((i + 1)%2 != 0){
			padNoteArray.push(padNotes.charAt(q) + '#' + currentOctave);
		}else{
			padNoteArray.push(padNotes.charAt(q) + currentOctave);
		}
		q++;
	}
}

function draw(){
	var last = currentOctave;
	currentOctave = slider.value();
	console.log(slider.value());
	if(currentOctave != last){
		setup();
	}
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
