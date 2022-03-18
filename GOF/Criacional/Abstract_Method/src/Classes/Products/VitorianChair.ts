import IChair from "../../Interface/IChair";

class VitorianChair implements IChair{
  hasLegs(): void {
    console.log("Vitorian chair has legs");
  }
  sitOn(): void {
    console.log("Sit on vitorian");
  }

}

export default VitorianChair;