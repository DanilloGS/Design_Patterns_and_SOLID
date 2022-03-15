import ICar from "../Interface/ICar";

class Car implements ICar {

  constructor(private color: string, private engine: number, private doors: number, private seats: number) {
      this.configureVeichle(this.color, this.engine, this.doors, this.seats)
  }
  
  configureVeichle(color: string, engine: number, doors: number, seats: number): void {
    console.log(`Car ---- > color: ${color}, engine: ${engine}, doors: ${doors}, seats: ${seats}`);
  }
  
  startVeichle(): void {
    console.log("Car Started");
  }
}

export default Car;