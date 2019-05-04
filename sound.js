let counter;

let slider;

var playing = false;

var padKeyboard = "azsxdcfvgbhnjmk,l.;/1q2w3e4r5t6y7u8i9o0p-[=]"
var padNotes = "abcdefg"
var currentOctave = 0;
var padKeys = [];
var padNoteArray = [];
var padOctArray = [];

var noteNames = [];

var createdKeys = false;

function setup(){
	slider = createSlider(0, 3, 0);
	slider.position(20, 20);
	var q = 0;
	for(var i = 0; i < padKeyboard.length; i++){
		padKeys.push(new padKey(padKeyboard.charAt(i)));
		if(q >= padNotes.length){
			q = 0;
			currentOctave++;
		}
		if((i + 1)%2 != 0){
			padNoteArray.push(padNotes.charAt(q) + 'b');
		}else{
			padNoteArray.push(padNotes.charAt(q));
			q++;
		}
		padOctArray.push(currentOctave);
	}
	counter = 0;
}

function draw(){
	document.getElementById("note").innerHTML = noteNames;
}

function keyPressed() {
	for(var i = 0; i < padKeyboard.length; i++){
		if(padKeys[i].key == key){
			var oct = padOctArray[i] + slider.value();
			var str = padNoteArray[i] + oct;
			padKeys[i].play(str);
			noteNames.push(padKeys[i].name);
		}
	}
}

function keyReleased(){
	for(var i = 0; i < padKeyboard.length; i++){
		if(padKeys[i].key == key){
			padKeys[i].stop();
			for(var q = 0; q < noteNames.length; q++){
				if(noteNames[q] == padKeys[i].name){
					noteNames.splice(q, 1);
				}
			}
		}
	}
}
