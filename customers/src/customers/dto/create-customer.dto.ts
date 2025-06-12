import {Address} from "../entities/address.entity";
import {Profile} from "../entities/profile.entity";
import {Company} from "../entities/company.entity";

export class CreateCustomerDto {
    name: string;
    username: string;
    firstName: string;
    lastName: string;
    address: Address;
    profile: Profile;
    company: Company;
}
