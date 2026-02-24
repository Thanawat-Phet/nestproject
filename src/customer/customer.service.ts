import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomerService {

  constructor(
    @InjectModel(Customer)
    private customerModel: typeof Customer,
  ){}

  create(createCustomerDto: CreateCustomerDto) {
    // return this.customerRepository.create(createCustomerDto);
    return 'This action adds a new customer';
  }

  async findAll() {
    return this.customerModel.findAll();
  }

  findOne(id: number) {
    return this.customerModel.findOne({where:{id}});
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return this.customerModel.update(updateCustomerDto,{where:{id}});
  }

  remove(id: number) {
    return this.customerModel.destroy({where:{id}});
  }
}
