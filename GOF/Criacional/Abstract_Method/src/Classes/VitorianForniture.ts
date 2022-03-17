import IFurniture from "../Interface/IFurniture";

class VitorianForniture implements IFurniture {
  createChair(): void {
    console.log("Cadeira Vitoriana criada");    
  }
  createSofa(): void {
    console.log("Sofa Vitoriano criado");    
  }
  createCoffeTable(): void {
    console.log("Mesa de café Vitoriana criada");    
  }

}

export default VitorianForniture;