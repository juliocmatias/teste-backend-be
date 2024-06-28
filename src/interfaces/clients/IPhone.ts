import { Identifiable } from '..';

export default interface IPhone extends Identifiable {
  phone: string,
  clientId: number
}