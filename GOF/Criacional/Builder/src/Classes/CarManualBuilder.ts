import IBuilder from "../Interface/IBuilder";
import CarManual from "./CarManual";

class CarManualBuilder implements IBuilder {

  private manual!: CarManual;

  constructor(){
    this.reset();
  }

  reset(): void {
    this.manual = new CarManual();
  }
  
  setSeats(seats: number): void {
    this.manual.documentTotalSeats = seats;
    console.log(`Documentando os ${seats} assentos`);
  }

  setTripComputer(): void {
    this.manual.documentTripComputer = true;
    console.log("Documentando computador de bordo");
  }

  setGPS(): void {
    this.manual.documentGps = true;
    console.log("Documentando GPS");
  }

  setAirConditioning(): void {
    this.manual.documentAirConditioning = true;
    console.log("Documentando Ar condicionado");
  }

  getResult(): CarManual {
    const product = this.manual;
    this.reset();
    return product;
  }
}

export default CarManualBuilder;