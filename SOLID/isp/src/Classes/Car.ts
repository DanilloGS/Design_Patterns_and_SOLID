import ICar from "../Interface/ICar";

class Car implements ICar{
  startVeichle(): void {
    console.log("Start Car");
  }
  createVeichle(): void {
    console.log("Create Car");
  }

  openLuggage(): void{
    console.log("Open Luggage");
  };

  openDoors(): void {
    console.log("Open Doors");
  };

  wheelsCalibrator(): void {
    console.log("Calibrate Wheels");
  };
}

export default Car;