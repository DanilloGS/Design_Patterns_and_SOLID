import IChair from "../../Interface/IChair";

class ModernChair implements IChair{
  hasLegs(): void {
    console.log("Modern chair has legs");
  }
  sitOn(): void {
    console.log("Sit on Modern chair");
  }

}

export default ModernChair;