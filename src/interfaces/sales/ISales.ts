import { Identifiable } from '..';

export default interface ISale extends Identifiable {
  clientId: number,
  productId: number,
  quantity: number,
  price: number,
  totalPrice: number,
  date?: string
}
