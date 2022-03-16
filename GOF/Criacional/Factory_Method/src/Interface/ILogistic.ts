import ITransport from "./ITransport";

interface ILogistic {
  planDelivery(): void;
  createTransport():ITransport;
}

export default ILogistic;