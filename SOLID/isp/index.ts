// Interface Segregation Principle (Princípio da Segregação da Interface)
// Uma classe não deve ser forçada a implementar interfaces e métodos que não irão utilizar

import Car from "./src/Classes/Car";
import Motorcycle from "./src/Classes/Motorcycle";

const car = new Car()
const motorcycle = new Motorcycle()

// Apesar de ambos serem veiculos. A moto não possui todos os métodos que um carro possui e vice e versa. 
// Métodos e atributos que não fazem sentidos para uma certa classe devem ser omitidos.

car.createVeichle()
motorcycle.createVeichle()

car.openDoors()
car.openLuggage()
car.wheelsCalibrator();

motorcycle.configureMotorcycle()

motorcycle.startVeichle()
car.startVeichle()


