import {Address} from "./address.entity";
import {Profile} from "./profile.entity";
import {Company} from "./company.entity";

export class Customer {
    id: number;
    createdAt: Date;
    name: string;
    username: string;
    firstName: string;
    lastName: string;
    address: Address;
    profile: Profile;
    company: Company;
}