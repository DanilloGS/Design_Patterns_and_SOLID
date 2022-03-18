import IBuilder from "../Interface/IBuilder";
import Car from "./Car";

class CarBuilder implements IBuilder {

  private car!: Car;

  constructor(){
    this.reset();
  }

  reset(): void {
    this.car = new Car();
  }
  
  setSeats(seats: number): void {
    this.car.seats = seats;
    console.log(`Adicionado ${seats} assentos`);
  }

  setTripComputer(): void {
    this.car.tripComputer = true;
    console.log("Adicionado computador de bordo");
  }

  setGPS(): void {
    this.car.gps = true;
    console.log("Adicionado GPS");
  }

  setAirConditioning(): void {
    this.car.airConditioning = true;
    console.log("Adicionado Ar condicionado");
  }

  getResult(): Car {
    const product = this.car;
    this.reset();
    return product;
  }
}

export default CarBuilder;