import { Light } from "./Light/Light";
import { RemoteControl } from "./RemoteControl";
import { LightOnCommand } from "./Light/LightOnCommand";
import { LightOffCommand } from "./Light/LightOffCommand";
import { CeilingFan } from "./CeilingFan/CeilingFan";
import { CeilingFanHighCommand } from "./CeilingFan/CeilingFanHighCommand";
import { CeilingFanOffCommand } from "./CeilingFan/CeilingFanOffCommand";

export class RemoteLoader{
  constructor(){
    const remoteControl = new RemoteControl()
    const kitchenRoom = new Light('kitchen')
    const livingRoom = new Light('living room')
    const ceilingFan = new CeilingFan('Living room')

    remoteControl.setCommand(0,new LightOnCommand(kitchenRoom), new LightOffCommand(kitchenRoom))
    remoteControl.setCommand(1,new LightOnCommand(livingRoom), new LightOffCommand(livingRoom))
    remoteControl.setCommand(2,new CeilingFanHighCommand(ceilingFan), new CeilingFanOffCommand(ceilingFan))
  }
}