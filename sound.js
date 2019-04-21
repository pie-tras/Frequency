let loopBeat;
let bassSynth;

function setup(){

	bassSynth	= new Tone.MembraneSynth().toMaster();

	loopBeat = new Tone.Loop(song, '4n');

	Tone.Transport.bpm.value = 140;
	Tone.Transport.start();
	loopBeat.start(0);
}

function song(time){
	bassSynth.triggerAttackRelease('c1', '8n', time);
	console.log(time);
}
