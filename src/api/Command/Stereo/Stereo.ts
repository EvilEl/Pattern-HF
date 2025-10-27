export class Stereo {
  volume:number
  constructor(){
    this.volume = 0
  }
  public on() {
    console.log('Stereo on');
  }
  public off() {
    console.log('Stereo off');
  }

  public setVolume(num:number){
    this.volume = num
  }

  public setSd(){
    console.log('Stereo set sd');
  }
}