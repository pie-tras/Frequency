var canvas;

var padString = "qawsedrftgyhujikolp"

var amplitude;
var ampHis = [];

var noteKeyHis = [];

var slider;
var lastFreq = -1;

var env;

var attackLevel = 1.0;
var releaseLevel = 0;
var attackTime = 0.1;
var decayTime = 0.2;
var susPercent = 0.2;
var releaseTime = 0.5;

var button;
var recorder;
var soundFile;
var recording = false;
var lineColor;

function setup(){
	canvas = createCanvas(window.innerWidth + 10, window.innerHeight + 10);
	canvas.position(-10, -10);
	canvas.style("z-index", "-1");

	for(var i = 0; i < padString.length; i++){
		noteKeyHis.push(new noteKey(padString.charAt(i), 'sine', 440 + (i*63.5), attackLevel, releaseLevel, attackTime, susPercent, releaseTime));
	}

	slider = createSlider(50, 2000, 440);

  amplitude = new p5.Amplitude();

	recorder = new p5.SoundRecorder();
	soundFile = new p5.SoundFile();

	lineColor = color(0, 255, 255);

	button = createButton("Record");
	button.mousePressed(record);
}

function draw(){
	if(slider.value() != lastFreq){
	 	for(var i = 0; i < noteKeyHis.length; i++){
	 		noteKeyHis[i].tuneFreq(slider.value() + (i*21.5));
	 	}
	}

  background(0, 0, 0);
  var vol = amplitude.getLevel();
  ampHis.push(vol);
  stroke(255);
  noFill();
  beginShape();
  for(var i = 0; i < ampHis.length; i++){
    var y = map(ampHis[i], 0, 1, height / 2, 0);
    vertex(i, y);
  }
  endShape();

  if(ampHis.length > width-50){
    ampHis.splice(0, 1);
  }

  stroke(lineColor);
  line(ampHis.length, 0, ampHis.length, height);
	lastFreq = slider.value();
}

function record(){
	if(!recording){
		recorder.record(soundFile);
		lineColor = color(255, 0, 0);
		recording = true;
	}else{
		recorder.stop();
		save(soundFile, 'sound.wav');
		lineColor = color(0, 255, 255);
		recording = false;
	}
}

function keyPressed() {
	if (key >= 'a' && key <= 'z') {
		if(padString.includes(key)){
			for(var i = 0; i < noteKeyHis.length; i++){
				if(noteKeyHis[i].key == key){
					noteKeyHis[i].play();
				}
			}
		}
	}
}

function keyReleased(){
	if (key >= 'a' && key <= 'z') {
		if(padString.includes(key)){
			for(var i = 0; i < noteKeyHis.length; i++){
				if(noteKeyHis[i].key == key){
					noteKeyHis[i].stop();
				}
			}
		}
	}
}
