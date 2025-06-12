import {Injectable, NotFoundException} from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import {Customer} from "./entities/customer.entity";

@Injectable()
export class CustomersService {
  private customers: Customer[] = [];

  create(createCustomerDto: CreateCustomerDto): Customer {
    const newCustomer = {
        id: this.customers.length + 1,
        createdAt: new Date(),
        ...createCustomerDto,
    };
    this.customers.push(newCustomer);
    return newCustomer;
  }

  findAll(): Customer[] {
    return this.customers;
  }

  findOne(id: number): Customer {
    const customer = this.customers.find(c => c.id === id);
    if (!customer) {
      throw new NotFoundException(`Customer with id ${id} not found`);
    }
    return customer;
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto): Customer {
    const customerIndex = this.customers.findIndex(c => c.id === id);
    if (customerIndex === -1) {
      throw new NotFoundException(`Customer with id ${id} not found`);
    }
    const updatedCustomer = {
      ...this.customers[customerIndex],
      ...updateCustomerDto,
    };
    this.customers[customerIndex] = updatedCustomer;
    return updatedCustomer;
  }

  remove(id: number): void {
    const customerIndex = this.customers.findIndex(c => c.id === id);
    if (customerIndex === -1) {
      throw new NotFoundException(`Customer with id ${id} not found`);
    }
    this.customers.splice(customerIndex, 1);
  }
}
