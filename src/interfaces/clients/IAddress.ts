import { Identifiable } from "..";

export default interface IAddress extends Identifiable {
  street: string,
  addressNumber: number,
  city: string,
  zip: number,
  country: string,
  clientId: string
}