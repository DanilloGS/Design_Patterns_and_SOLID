import IChair from "./IChair";
import ISofa from "./ISofa";

interface IFurniture {
  createChair(): IChair;
  createSofa(): ISofa;
}

export default IFurniture;