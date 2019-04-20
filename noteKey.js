class noteKey{

  constructor(key, type, freq, attackLevel, releaseLevel, attackTime, susPercent, releaseTime){
    this.key = key;
    this.type = type;
    this.freq = freq;
    this.env = env;
    this.osc = new p5.Oscillator();
    this.env = new p5.Envelope();
    this.env.setADSR(attackTime, decayTime, susPercent, releaseTime);
    this.env.setRange(attackLevel, releaseLevel);
    this.setUp();
  }

  setUp(){
    this.osc.setType(this.type);
    this.osc.amp(this.env, 0.5);
    this.osc.start();
    this.osc.freq(this.freq);
  }

  tuneFreq(freq){
    this.osc.freq(freq);
  }

  play(){
    this.env.triggerAttack();
  }

  stop(){
    this.env.triggerRelease();
  }

}
