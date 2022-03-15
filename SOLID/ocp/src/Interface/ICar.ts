import IVeichle from "./IVeichle";

interface ICar extends IVeichle {
  configureVeichle(
    color: string, 
    engine: number,
    doors: number,
    seats: number
  ): void;
}

export default ICar