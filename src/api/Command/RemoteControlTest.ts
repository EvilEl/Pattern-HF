import { SimpleRemoteControl } from "./SimpleRemoteControl";
import { GarageDoor } from './GarageDoor/GarageDoor';
import { GarageOpenDoorCommand } from "./GarageDoor/GarageOpenDoorCommnd";

export class RemoteControlTest{
 static main(){
    const remote = new SimpleRemoteControl()
    const garageDoor = new GarageDoor()
    const garageOpen = new GarageOpenDoorCommand(garageDoor)

    remote.setCommand(garageOpen)
    remote.buttonWasPress()
  }
}