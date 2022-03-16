import IVeichle from "./IVeichle";

interface IMotorcycle extends IVeichle {
  configureMotorcycle: () => void;
}

export default IMotorcycle