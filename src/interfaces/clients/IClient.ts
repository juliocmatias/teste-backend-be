import { Identifiable } from '..';

export default interface IClient extends Identifiable {
  name: string,
  taxId: string
}