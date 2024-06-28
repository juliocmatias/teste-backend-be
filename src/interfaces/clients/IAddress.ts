import { Identifiable } from '..';

export default interface IAddress extends Identifiable {
  street: string,
  addressNumber: number,
  city: string,
  zip: string,
  country: string,
  clientId: string
}