import { Identifiable } from '..';


export default interface IUser extends Identifiable {
  email: string,
  password: string
}