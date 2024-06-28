import { Identifiable } from '..';

export default interface IProduct extends Identifiable {
  nome: string,
  quantity: number,
  price: number,
  deleted: boolean
}