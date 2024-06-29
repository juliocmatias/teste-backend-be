import { Identifiable } from '..';

export default interface IProduct extends Identifiable {
  name: string,
  quantity: number,
  price: number,
  deleted: boolean
}