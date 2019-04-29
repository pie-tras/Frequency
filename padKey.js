class padKey{

  constructor(){
    this.synth = new Tone.Synth().toMaster();
  	Tone.Transport.start();
  }

  play(){
    this.synth.triggerAttack('c4');
  }

  stop(){
    this.synth.triggerRelease();
  }

}
