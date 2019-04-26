let loopBeat;
let bassSynth, cymbalSynth, pluckSynth;
let counter;

var playing = false;

function setup(){
	counter = 0;

	pluckSynth = new Tone.PluckSynth().toMaster();
	bassSynth	= new Tone.MembraneSynth().toMaster();
	cymbalSynth	= new Tone.MetalSynth(
		{
			frequency  : 200 ,
			envelope  : {
				attack  : 0.001 ,
				decay  : 0.1 ,
				release  : 0.2
			}  ,
			harmonicity  : 5.1 ,
			modulationIndex  : 32 ,
			resonance  : 4000 ,
			octaves  : 1.5
		}
	).toMaster();

	loopBeat = new Tone.Loop(song, '16n');

	//Tone.Transport.bpm.value = 140;
	Tone.Transport.start();
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

function song(time){

	if(counter%4 === 0){
		if(counter === 3 || counter === 12){
			cymbalSynth.envelope.decay = 1.5;
		}else{
			cymbalSynth.envelope.decay = 0.1;
		}
		cymbalSynth.triggerAttackRelease('16n', time, 0.3);
		bassSynth.triggerAttackRelease('c1', '16n', time);
	}

	if(counter%2 === 0){
		if(counter <= 4){
			pluckSynth.triggerAttackRelease('c2', time);
		}else if(counter > 4 && counter <= 8){
			pluckSynth.triggerAttackRelease('c1', time);
		}else if(counter > 8 && counter <= 12){
			pluckSynth.triggerAttackRelease('c2', time);
		}else{
			pluckSynth.triggerAttackRelease('c3', time);
		}
	}

	counter = (counter+1)%16;
}
