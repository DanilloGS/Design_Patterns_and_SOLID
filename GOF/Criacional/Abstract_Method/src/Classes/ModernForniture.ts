import IFurniture from "../Interface/IFurniture";

class ModernForniture implements IFurniture {
  createChair(): void {
    console.log("Cadeira Moderna criada");    
  }
  createSofa(): void {
    console.log("Sofa Moderno criado");    
  }
  createCoffeTable(): void {
    console.log("Mesa de café Moderna criada");    
  }

}

export default ModernForniture;