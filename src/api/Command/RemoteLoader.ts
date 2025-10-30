import { Light } from "./Light/Light";
import { RemoteControl } from "./RemoteControl";
import { LightOnCommand } from "./Light/LightOnCommand";
import { LightOffCommand } from "./Light/LightOffCommand";
import { CeilingFan } from "./CeilingFan/CeilingFan";
import { CeilingFanHighCommand } from "./CeilingFan/CeilingFanHighCommand";
import { CeilingFanOffCommand } from "./CeilingFan/CeilingFanOffCommand";
import { CeilingFanMediumCommand } from "./CeilingFan/CeilingFanMediumCommand";

export class RemoteLoader{
  constructor(){

  }

 static main(){
    const remoteControl = new RemoteControl()

    const ceilingFan = new CeilingFan('Living Room')
    const ceilingFanHighCommand = new CeilingFanHighCommand(ceilingFan)
    const ceilingFanMediumCommand = new CeilingFanMediumCommand(ceilingFan)
    const ceilingFanOffCommand = new CeilingFanOffCommand(ceilingFan  )
    
    remoteControl.setCommand(0,ceilingFanMediumCommand, ceilingFanOffCommand)
    remoteControl.setCommand(1,ceilingFanHighCommand, ceilingFanOffCommand)

    remoteControl.onButtonWasPressed(0)
    remoteControl.offButtonWasPressed(0)
    remoteControl.undoButtonWasPressed()

    remoteControl.onButtonWasPressed(1)
    remoteControl.undoButtonWasPressed()

  }
}