import IVeichle from "./IVeichle";

interface IMotorcycle extends IVeichle {
  configureVeichle(
    color: string, 
    engine: number,
  ): void;
}

export default IMotorcycle