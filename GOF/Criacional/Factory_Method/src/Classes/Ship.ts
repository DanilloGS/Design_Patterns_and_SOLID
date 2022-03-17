import ITransport from "../Interface/ITransport";

class Ship implements ITransport {
	deliver(): string {
		return "Navio saiu para entrega";
	}
}

export default Ship