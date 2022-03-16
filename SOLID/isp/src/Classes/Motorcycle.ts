import IMotorcycle from "../Interface/IMotorcycle";

class Motorcycle implements IMotorcycle {
  configureMotorcycle(): void {
    console.log("Config Motorcycle");
  };
  startVeichle(): void {
    console.log("Start Motorcycle");
  }
  createVeichle(): void {
    console.log("Create Motorcycle");
  }
}

export default Motorcycle;