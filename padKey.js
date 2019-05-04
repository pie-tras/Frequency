class padKey{

  constructor(key){
    this.key = key;
    this.synth = new Tone.Synth().toMaster();
  	Tone.Transport.start();
  }

  play(c){
    this.name = c;
    this.synth.triggerAttack(c);
  }

  stop(){
    this.synth.triggerRelease();
  }

}
