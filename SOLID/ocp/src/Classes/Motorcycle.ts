import IMotorcycle from "../Interface/IMotorcycle";

class Motorcycle implements IMotorcycle {

  constructor(private color: string, private engine: number) {
      this.configureVeichle(this.color, this.engine)
  }
  
  configureVeichle (color: string, engine: number ): void {
    console.log(`Motorcycle ---- > color: ${color}, engine: ${engine}`);
  }
  
  startVeichle(): void {
    console.log("Motorcycle Started");
  }
}

export default Motorcycle;