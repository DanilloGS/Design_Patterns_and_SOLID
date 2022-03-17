import ITransport from "../Interface/ITransport";

class Truck implements ITransport {
	deliver(): string {
		return "Caminhão saiu para entrega";
	}
}

export default Truck